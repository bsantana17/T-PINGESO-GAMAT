import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button,  
    Card, CardText,  CardTitle} from 'reactstrap';
import Moment from 'moment';
import { requests } from '../../requests.json';
import { connect } from 'react-redux';
import ItemRow from './ItemRow';
import AddItemtoBudget from './AddItemtoBudget';
import './AddBudget.css';
import * as actions from '../../store/actions/index';


var datos = 
{"idRequest":4,"state":"pendiente por revisar","observation":"velit adipisicing exercitation excepteur dolorsadadadsasd ea","date":"2018-11-23T14:33:43.000+0000","items":[{"idItem":6,"name":"item4","price":3141,"quantity":75,"driver":null,"distributor":null,"itemState":{"idItemState":2,"name":"pendiente","date":null},"date":"2018-11-23T14:33:43.000+0000"},{"idItem":7,"name":"item5","price":31412342,"quantity":20,"driver":null,"distributor":null,"itemState":{"idItemState":2,"name":"pendiente","date":null},"date":"2018-11-23T14:33:43.000+0000"},{"idItem":8,"name":"item6","price":341,"quantity":5,"driver":null,"distributor":null,"itemState":{"idItemState":2,"name":"pendiente","date":null},"date":"2018-11-23T14:33:43.000+0000"}]};

class NewBudget extends Component {

    state = {
          request: requests[0],
          items: [],
          test: requests[0].items
        };
        
        /* Agrega elementos a state.items*/ 

        addItemHandler (item){
            console.log('en addItemHandles', item)
            this.setState({
              items: this.state.items.concat(item) 
            },()=> console.log('el nuevo estado de items',this.state.items))
          }


    /*componentDidMount(){
        //Carga los elementos de una request
        this.props.onFetchBudgets();
        //Crear <Form> para cada Item!
    }
    */

   

    render() {
        const items = this.state.items.map((item, index) => {
            return <ItemRow 
                      key={index}
                      number={index} 
                      name={item.name} 
                      quantity={item.quantity} 
                      description={item.description} 
                      urgency={item.urgency} 
                      />
          });


        return (
            
            <div className="row">
                <div className="col-lg-9 col-md-12">
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
                        <tr>
                            {console.log(this.state)}
                            <td>
                            <div><AddItemtoBudget onAddItem={(e) => this.addItemHandler(e)}/></div>
                            </td>
                        </tr>
                        </tbody>     
                    </Table>
                    <br/><br/>
                
                    
                </div>  
             <div className="col-lg-3 col-md-12">
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
            </div>
        </div>
        );
      }
}
const mapStateToProps = state => {
    return {
      items: state.items
    };
  }
  const mapDispatchToProps = dispatch => {
    return{
       onRequestAdded: (requestData) => dispatch(actions.addRequest(requestData))  
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NewBudget);
