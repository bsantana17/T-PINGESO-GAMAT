import React, { Component } from 'react';
import Moment from 'moment';
// Redux
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import Spinner from '../../../components/UI/Spinner';
import { Table, Button ,FormGroup,Label,Input} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      estado:0,
      estados:[
        'Pendientes por revisar',
        'Aprobados',
        'Cotizados'
      ]
    };
    this.toggle = this.toggle.bind(this);
    this.handler = this.handler.bind(this);
    this.refreshRequest= this.refreshRequest.bind(this);
  }
  handler() {
    console.log("funciona")
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {

    let estados;
    if(this.props.userType==="Buyer")
   {
     estados=[

       'Aprobados',
       'Autorizados'
      ]
       
   } 
   else{
    estados=[
      'Pendientes por revisar',
      'Aprobados',
      'Cotizados',
      'Confirmar Recibidos'
    ]


   }
    this.setState({
      estados:estados
    })
    let state=0;
   
    this.props.onFetchRequests(this.props.userId, this.props.userType, state);
    this.props.removedFalse();
  }

  refreshRequest(e){
    const value = e.target.value;
    this.setState({
      estado:value
    })
    this.props.onFetchRequests(this.props.userId, this.props.userType, value);
  }
  deleteHandler = (event) => {
    this.props.onDeleteRequest(event.target.name)
  }

  render() {
    let spinner = <Spinner />

    // let buttons = null
    // let ruta =''
    //console.log(this.props.userType)
    // if(this.props.userType === '1' || this.props.userType === 1){
    //   ruta='/approve-request/';

    // }else{
    //   ruta='/view-request/';
    // }

    let redirect = null
    if (this.props.requestRemoved) {
      //console.log(this.props.requestRemoved)
      redirect = <Redirect to='/removed-success' />
    }

    let requests = null
    if (!this.props.loading) {
      spinner = null
      requests = this.props.requests.map((request, i) => (
        <tr key={request.idRequest}>
          <td>{request.idRequest}</td>
          <td>???</td>
          <td>{Moment(request.date).format("DD/MM/YYYY hh:mm")}</td>
          <td>{request.state}</td>
          <td>{request.observation}</td>
          {/* <td><Link to={'/view-request/'+request.idRequest}><Button color="primary" id="ver">Ver</Button></Link> </td> */}
          <td>
            <Link to={{ pathname: '/view-request/' + request.idRequest, state: request.items }}>
              <Button className="btn btn-sm btn-info" id="ver">Ver</Button>
            </Link>
            {' '}
            { (this.props.userType == "Approver" || this.props.userType=="Buyer") &&

              <Button className="btn btn-sm btn-danger" id="borrar" name={request.idRequest} onClick={this.deleteHandler}>Borrar</Button>
            }
            {' '}
            {this.props.userType == "Approver" && this.state.estado==0 &&
              <Link to={{ pathname: '/approve-request/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm btn-success" id="aprobar">Aprobar</Button>
              </Link>
            }
            {this.props.userType == "Approver" && this.state.estado==2 &&
              <Link to={{ pathname: '/approve-budget/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm btn-success" id="aprobar">Aprobar Cotizacion</Button>
              </Link>
            }

             {this.props.userType == "Approver" && this.state.estado==3 &&
              <Link to={{ pathname: '/deliver-to-approve/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm btn-success" id="aprobar">Confirmar Recepcion</Button>
              </Link>
            }
            {this.props.userType == "Buyer" && this.state.estado ==0 &&
              <Link to={{ pathname: '/new-budget/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm btn-success" id="aprobar">Cotizar</Button>
              </Link>
            }

             {this.props.userType == "Buyer" && this.state.estado==1 &&
              <Link to={{ pathname: '/assing-driver/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm btn-success" id="aprobar">Asignar Chofer</Button>
              </Link>
            }

              {this.props.userType == "Driver" &&  request.state =="asignada"  &&
              <Link to={{ pathname: '/request-to-pick/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm btn-success" id="retirarr">Retirar Item</Button>
              </Link>
            }


              {this.props.userType == "Driver" &&  request.state =="Retirada" &&
              <Link to={{ pathname: '/request-to-deliver/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm btn-success" id="retirarr">Entrega Item</Button>
              </Link>
            }
          </td>
        </tr>
      ))
    }

    return (
      <div className="container">
        {redirect}
        {spinner}
        <div className="d-flex justify-content-between">
          <div>

          <h2>Historial de solicitudes: </h2>
          </div>
          {(this.props.userType =="Approver" || this.props.userType=="Buyer") &&
          <FormGroup>
            <Label for="estado">Estado</Label>
            <Input value={this.state.estado} onChange={this.refreshRequest} type="select" name="estado" id="estado" >
              {this.state.estados.map((estado, i) => (
                
                <option key={i} value={i}>{estado}</option>
                
                ))}
              
            </Input>
          </FormGroup>
              }
        </div>
        <Table hover className="table-responsive">
          <thead>
            <tr>
              <th>#</th>
              <th>Solicitante</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Observación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {requests}
          </tbody>
        </Table>


      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    requestRemoved: state.request.requestRemoved,
    requests: state.request.requests,
    loading: state.request.loading,
    userId: state.login.userId,
    userType: state.login.userType,
    removed: state.request.removed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchRequests: (userId, userType, state) => dispatch(actions.fetchRequests(userId, userType, state)),
    onDeleteRequest: (requestId) => dispatch(actions.removeRequests(requestId)),
    removedFalse: () => dispatch(actions.removedToFalse())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Requests);