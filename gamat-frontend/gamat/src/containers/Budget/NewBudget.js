import React, { Component } from 'react';
import {
    Table, Button,
    Card, CardText, CardTitle, CardBody, CardHeader,
    Collapse
} from 'reactstrap';
import { requests } from '../../requests.json';
import axios from 'axios';
import { connect } from 'react-redux';
import ItemRow from './ItemRow';
import './AddBudget.css';
import * as actions from '../../store/actions/index';
import TableItem from './TableItem';
import SeeBudgetforItem from './SeeBudgetforItem';
import ResumeBudget from './ResumeBudget';
import AddItemtoBudget from './AddItemtoBudget';




class NewBudget extends Component {


    /* El formato de la vista NewBudget es.
            Componentes ItemRows -> Cada fila tiene los elementos de las requests.
                                 -> Cada ItemRows tiene dos botones. Crear y Ver.
            El boton Crear abre el componente AddItemtoBudget.
            El boton Ver abre el componente SeeBudgetForItem.
    
            El hijo ItemRows recoge de buena manera el state de AddItemtoBudget,
            y al recibirlo, envia inmediatamente los datos a la vista NewBudget. 
            Eso si, faltaria implementar que cada ItemRow tiene una Key. y que no 
            se sobreescribe, si no se que se agrega una.  
    */

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            requestActual:{},
            indiceRequest: 0,
            openColapse: false,
            openAddItem: false,
            indiceItem: 0,
            indiceSeeItem:0,

            // budgetItem: {
            price: 0,
            totalprice: 0,
            weight: 0,
            totalweight: 0,
            provider: '',
            estado: '',
            comments: '',
            // },
            //Deberian todos los elementos de una budget
            date: '',
            expiration: '',
            totalWeight: 0,
            total_price: 0,
            administration_price: 0,
            shipping_price: 0,
            true_price: 0


        };

        this.addItemHandler = this.addItemHandler.bind(this);
        this.calculatePrices = this.calculatePrices.bind(this);
        // this.collapseHandler = this.collapseHandler.bind(this);
        this.toggleAddItem = this.toggleAddItem.bind(this);
        this.toggleSeeItem = this.toggleSeeItem.bind(this);
        this.handlerSeeItem = this.handlerSeeItem.bind(this);
        this.handlerOpenAddItem = this.handlerOpenAddItem.bind(this);
        this.inputHandler = this.inputHandler.bind(this)

    }






    //Cuando monta el DOM, entonces deberia realizar esto
    componentDidMount() {
        //Carga los elementos de una request
        // this.props.onFetchRequest();
        let indiceRequest = this.props.requests.findIndex(
            (req) => req.idRequest == this.props.match.params.idRequest);
            console.log("REQUEST",this.props.requests[indiceRequest])
            
        let itemsActuales = this.props.requests[indiceRequest].items.map(item => ({ ...item,totalWeight:0,totalPrice:0}))
        this.setState({
            items: itemsActuales,
            indiceRequest: indiceRequest
        })


    }



    handlerSeeItem(index){
        this.setState({
            indiceSeeItem:index,
            openColapse: true
        })
    }

    inputHandler(e) {

        let multiplicacion;
        const { value, name } = e.target;
        const indice = this.state.indiceItem;
        if (name === 'price') {
            let valueInt= parseInt(value);
            console.log(typeof valueInt);
            isNaN(valueInt) && (valueInt=0);
    
            this.setState({
                [name]: valueInt,
                preciototal: valueInt*this.state.items[indice].quantity
            })
        }
        else if(name === 'weight'){
            let valueInt= parseInt(value);
            console.log(typeof valueInt);
            isNaN(valueInt) && (valueInt=0)
            this.setState({
                [name]: valueInt,
                pesototal: valueInt*this.state.items[indice].quantity
            })
        }
        else {
            this.setState({
                [name]: value
            })
        }


    }


    handlerOpenAddItem(index) {
        this.toggleAddItem()
        console.log("abirnedo item",index)
        this.setState({ indiceItem: index })
    }

    /* Esta función deberia agregar a la budget los valores de cada item!*/
    addItemHandler(item) {
        console.log('en addItemHandles en NB:', item)
        //Aqui se deberia hacer append

        let copiaItem = this.state.items.map(item=>({...item}))
        
        const i= this.state.indiceItem;
        console.log("agregando en item",i)
        copiaItem[i].price= this.state.price;
        copiaItem[i].totalPrice= this.state.preciototal;
        copiaItem[i].weight=this.state.weight;
        copiaItem[i].pesototal=this.state.pesototal;
        copiaItem[i].comments=this.state.comments;
        copiaItem[i].distributor= this.state.provider;
        this.setState({
            items: copiaItem,
        }, () => {
            this.calculatePrices()
            this.toggleAddItem();});
        
    }

    toggleAddItem() {
        this.setState({
            openAddItem: !this.state.openAddItem,
            
        }, ()=>{
            if(!this.state.openAddItem){
                this.setState({
                    price:0,
                    preciototal:0,
                    weight:0,
                    pesototal:0,
                    comments:0,
                    provider:'',
                    indiceItem:0
                })
            }
        })
    }

    toggleSeeItem() {
        this.setState({
            openColapse: !this.state.openColapse
        })
    }



    calculatePrices() {
        console.log("Entro a calculatePrices en NB");
        console.log("Largo de items: ", this.state.items.length);
        var preciototal = 0;
        var pesototal = 0;
        for (var i = 0; i < this.state.items.length; i++) {
            preciototal += this.state.items[i].totalPrice
            pesototal += this.state.items[i].totalWeight
        }
        pesototal = pesototal / 1000;
        console.log(preciototal)
        console.log(pesototal)
        //Calculo la sumatoria (VALOR NETO)
        //Aqui calculo todos los valores que van en budget
        this.setState({
            totalWeight: pesototal,
            total_price: preciototal,
            //El precio de despacho sera un 10% del precio total.
            shipping_price: preciototal * 0.1,
            //El precio de administracion sera un 1% del precio total.
            administration_price: preciototal * 0.01,
            //El VALOR TOTAL sera el precio total + un 19% (IVA)
            true_price: preciototal + (preciototal * 0.19)
        });


    }



    sendBudget() {
        if (this.state.items.length === 3) {
            window.alert("¡La cotización fue enviada al aprobador!");
        }
        else {
            window.alert("Faltan elementos por cotizar")
        }
    }

    render() {


        /*Esta función toma los items de los request (que por ahora viene en request.json) 
          los pone en un ItemRow (que entrega una fila) y lo guarda en la variable prueba*/
        return (

            <div className="row" >
                <div className="col-lg-9 col-md-12 col-sm-12">
                    <TableItem
                        items={this.state.items}
                        openAddItem={this.handlerOpenAddItem}
                        onSeeItem={this.handlerSeeItem}
                    />
                     {
                        this.state.items.length > 0  &&
                    <AddItemtoBudget
                        price={this.state.price}
                        preciototal={this.state.preciototal}
                        weight={this.state.weight}
                        totalWeight={this.state.pesototal}
                        comments={this.state.comments}
                        provider={this.state.provider}
                        estado={this.state.estado}
                        toggle={this.toggleAddItem}
                        submitHandler={this.addItemHandler}
                        open={this.state.openAddItem}
                        inputHandler={this.inputHandler}
                        quantity={this.state.items[this.state.indiceItem].quantity}

                    />
                     }

                    <br /><br />
                    {
                        this.state.items.length > 0  &&
                    
                    <SeeBudgetforItem
                    // price={this.state.price}
                    // weight={this.state.weight}
                    // provider={this.state.provider}
                    // estado={this.state.estado}
                    // comments={this.state.comments}
                    item={this.state.items[this.state.indiceSeeItem]}
                    estadocolapso={this.state.openColapse}
                    
                    />
                }
                    <br /><br />

                </div>
                {/* {this.state.indiceRequest &&  */}
                <ResumeBudget
                request={this.props.requests[this.state.indiceRequest]}
                totalWeight={this.state.totalWeight}
                shipping_price={this.state.shipping_price}
                administration_price={this.state.administration_price}
                total_price={this.state.total_price}
                true_price={this.state.true_price}
                
                />
            {/* } */}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        requests: state.request.requests,
        loading: state.loading
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onRequestAdded: (requestData) => dispatch(actions.addRequest(requestData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBudget, axios);
