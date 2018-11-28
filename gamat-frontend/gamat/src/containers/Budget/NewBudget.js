import React, { Component } from 'react';
import { Table, Button,  
    Card, CardText,  CardTitle, CardBody, CardHeader,
    Collapse} from 'reactstrap';
import { requests } from '../../requests.json';
import axios from 'axios';
import { connect } from 'react-redux';
import ItemRow from './ItemRow';
import './AddBudget.css';
import * as actions from '../../store/actions/index';




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
        estadocolapso: false,
        request: requests[2],
        items: [],
        lastItem: {
            price: 'NaN',
            totalprice: 'NaN',
            weight: 'NaN',
            totalweight: 'Nan',
            provider: 'NaN',
            estado:  'Cotizado',
            comments:  'NaN'
        },
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
      this.collapseHandler = this.collapseHandler.bind(this)
    }
    
        
    
    

/*
    //Cuando monta el DOM, entonces deberia realizar esto
    componentDidMount(){
        //Carga los elementos de una request
        this.props.onFetchRequest();
        
        
    }
*/

    /* Esta función deberia agregar a la budget los valores de cada item!*/
    addItemHandler (item){
        console.log('en addItemHandles en NB:', item)
        //Aqui se deberia hacer append
        this.setState({
            items: this.state.items.concat(item),
            lastItem: item
        },()=> this.calculatePrices());
        }
    
    

    calculatePrices(){
        console.log("Entro a calculatePrices en NB");
        console.log("Largo de items: ",this.state.items.length);
        var preciototal = 0;
        var pesototal = 0;
                //Calculo la sumatoria (VALOR NETO)
        if(this.state.items.length === 1){
            preciototal = this.state.items[0].totalprice;
            pesototal = this.state.items[0].totalweight;
        }
        else{
            for(var i=0;i < this.state.items.length;i++){
                preciototal += this.state.items[i].totalprice
                pesototal += this.state.items[i].totalweight
            }
        }
        
        console.log("Preciototal: ", this.state.items)
        pesototal = pesototal/1000;
        //Aqui calculo todos los valores que van en budget
        this.setState({
            totalWeight: pesototal,
            total_price: preciototal,
            //El precio de despacho sera un 10% del precio total.
            shipping_price: preciototal*0.1,
            //El precio de administracion sera un 1% del precio total.
            administration_price: preciototal*0.01,
            //El VALOR TOTAL sera el precio total + un 19% (IVA)
            true_price: preciototal+(preciototal*0.19)
        }, () => console.log("setState Realizado en CP")
        );


    }

    collapseHandler(){
        //console.log("DIME QUE collapseHandlerO AMOR MIOOOO",  this.state)
        this.setState({
            estadocolapso: !this.state.estadocolapso
        });
    }
    
    
   sendBudget(){
        //Realiza el post.
        window.alert("¡La cotización fue enviada al aprobador!");
   }

    render() {


        /*Esta función toma los items de los request (que por ahora viene en request.json) 
          los pone en un ItemRow (que entrega una fila) y lo guarda en la variable prueba*/
        var prueba = this.state.request.items.map((person, i) => 
                
                <ItemRow key = {i}  datosRequest = {person} onItemHandlerIR={this.addItemHandler} colapseFunction={this.collapseHandler}/>)

        

        return (
            
            <div className="row" >
                <div className="col-lg-9 col-md-12 col-sm-12">
                    <Table size="sm" >
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Urgencia</th>
                            <th>Descripcion</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                     
                        {/*Aqui, la funcion de arriba deberia guardar todo en testrequest, y mostrarlo.*/}
                        {prueba}
                        </tbody>     
                    </Table>
                    <br/><br/>
                    <Card outline color="info">
                    <CardHeader>
                        Descripcion del Item
                    </CardHeader>

                    <Collapse isOpen={this.state.estadocolapso}>
                  
            <CardBody>
            <div className="row">
              <div className="col-6">
              Precio Unitario: {this.state.lastItem.price}
              </div>
            
              <div className="col-6">
              Precio Total: {this.state.lastItem.weight}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
              Estado: {this.state.lastItem.estado}
              </div>
            
              <div className="col-12">
              Proveedor: {this.state.lastItem.provider}
              </div>

              <div className="col-12">
              Comentarios: {this.state.lastItem.comments}
              </div>
            </div>

            </CardBody>
            </Collapse>                
            
            </Card>
            <br/><br/>

            </div>  
            <div className="col-lg-3 col-md-12 col-sm-12">
                <Card body inverse style={{ backgroundColor: '#808080', borderColor: '#333' }}>
                    <CardTitle>
                        <b>Solicitud</b>
                    </CardTitle>
                    <CardText>
                    <ul className="lista">
                        <li>Numero: {this.state.request.idRequest}</li>
                        <li>Fecha: {this.state.request.date}</li>
                        <li>Lugar de Entrega: </li>
                        <li>Condicion de Pago: </li>
                        <li>Vence: </li>
                        <li>Solicita: {this.state.request.user.name}</li>
                    </ul>  
                    </CardText>
                </Card>
                <br/>
                <Card body inverse style={{ backgroundColor: '#808080', borderColor: '#333' }}> 
                    <CardTitle>
                        <b>Resumen de la Cotizacion</b>
                    </CardTitle>
                    <CardText>
                    <li className="lista">Numero: </li>
                        <li>Peso Total: {this.state.totalWeight} Kg</li>
                        <li>Precio por Despacho: ${this.state.shipping_price}</li>
                        <li>Precio por Administración: ${this.state.administration_price}</li>
                        <li>Valor Neto:$ {this.state.total_price}</li>
                        <li><b>IVA: 19%</b></li>
                        <li><b>VALOR TOTAL: ${this.state.true_price}</b></li>
                    </CardText>
                </Card> 
                <br/>
                <Button color="success" className="endbuttons" onClick={this.sendBudget}>Guardar Cotización.</Button>
            </div>
        </div>
        );
      }
}
const mapStateToProps = state => {
    return {
      requests: state.request,
      loading: state.loading
    };
  }
  const mapDispatchToProps = dispatch => {
    return{
       onRequestAdded: (requestData) => dispatch(actions.addRequest(requestData))  
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NewBudget, axios);
