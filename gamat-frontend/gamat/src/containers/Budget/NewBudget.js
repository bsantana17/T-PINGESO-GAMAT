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

    state = {
          request: requests[0],
          items: [],
          //Deberian todos los elementos de una budget

        };
        
        /* Agrega elementos a state.items*/ 

/*
    //Cuando monta el DOM, entonces deberia realizar esto
    componentDidMount(){
        //Carga los elementos de una request
        this.props.onFetchRequest();

    
        //Sirve para  filas para cada uno de los items del cache
    }
*/

    /* Esta función deberia agregar a la budget los valores de cada item!*/
    addItemHandler (item){
        console.log('en addItemHandles', item)
        this.setState({
            items: this.state.items.concat(item) 
        },()=> console.log('el nuevo estado de items',this.state.items))
        }

  
    

   

    render() {


        /*Esta funcion toma los items de los request (que por ahora viene en request.json) 
          los pone en un ItemRow (que entrega una fila) y lo guarda en la variable prueba*/
        var prueba = this.state.request.items.map((person, i) => 
                <ItemRow key = {i}  data = {person} />)

        //console.log(prueba);

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
                        <li>Despacho: </li>
                        <li>Administración: </li>
                        <li>Valor Neto: </li>
                        <li><b>IVA:</b></li>
                        <li><b>VALOR TOTAL:</b></li>
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
      requestsLoading: state.requestLoading
    };
  }
  const mapDispatchToProps = dispatch => {
    return{
       onRequestAdded: (requestData) => dispatch(actions.addRequest(requestData))  
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NewBudget, axios);
