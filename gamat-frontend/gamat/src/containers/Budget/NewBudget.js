import React, { Component } from 'react';
import { Table, Button,  
    Card, CardText,  CardTitle} from 'reactstrap';
import { requests } from '../../requests.json';
import axios from 'axios';
import { connect } from 'react-redux';
import ItemRow from './ItemRow';
import AddItemtoBudget from './AddItemtoBudget';
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
        request: requests[0],
        items: [],
        
            date: '',
            expiration: '',
            total_price: 0,
            administration_price: 0,
            shipping_price: 0,
            true_price: 0


        
        //Deberian todos los elementos de una budget
        

      };

      this.addItemHandler = this.addItemHandler.bind(this);
      this.calculatePrices = this.calculatePrices.bind(this);
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
            items: this.state.items.concat(item) 
        },()=> console.log('el nuevo estado de items en NB',this.state.items))
        this.calculatePrices();
        }
    
    

    calculatePrices(){
        console.log("Entro a calculatePrices en NB");
        var totalprice = 0;
        for(var i=0;i < this.state.items.length;i++){
            totalprice += parseInt(this.state.items[i].price);
        }
        console.log("El VALOR NETO ES: ", totalprice);
        //Calculo la sumatoria (VALOR NETO)
        //Aqui calculo todos los valores que van en budget
        this.setState({
            total_price: totalprice,
            //El precio de despacho sera un 10% del precio total.
            shipping_price: totalprice*0.1,
            //El precio de administracion sera un 1% del precio total.
            administration_price: totalprice*0.01,
            //El VALOR TOTAL sera el precio total + un 19% (IVA)
            true_price: totalprice+(totalprice*0.19)
        });


    }
    

   

    render() {


        /*Esta funcion toma los items de los request (que por ahora viene en request.json) 
          los pone en un ItemRow (que entrega una fila) y lo guarda en la variable prueba*/
        var prueba = this.state.request.items.map((person, i) => 
                <ItemRow key = {i}  datosRequest = {person} onItemHandlerIR={this.addItemHandler}/>)

        

        return (
            
            <div className="row">
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Perno</td>
                            <td>20</td>
                            <td>Si</td>
                            <td>Esta fila es estatica, para probar el boton</td>
                            <td>
                            <div><AddItemtoBudget onAddItem={(e) => this.addItemHandler(e)}/></div>
                            </td>
                        </tr>
                        {/*Aqui, la funcion de arriba deberia guardar todo en testrequest, y mostrarlo.*/}
                        {prueba}
                        </tbody>     
                    </Table>
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
                        <li>Peso Total: </li>
                        <li>Despacho: {this.state.shipping_price}</li>
                        <li>Administración: {this.state.administration_price}</li>
                        <li>Valor Neto: {this.state.total_price}</li>
                        <li><b>IVA: 19%</b></li>
                        <li><b>VALOR TOTAL:{this.state.true_price}</b></li>
                    </CardText>
                </Card> 
                <br/>
                <Button color="success" className="endbuttons">Guardar Cotización.</Button>
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
