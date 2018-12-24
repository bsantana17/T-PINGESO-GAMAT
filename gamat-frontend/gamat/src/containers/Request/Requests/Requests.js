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
    console.log(this.props.userType)
  }
  deleteHandler = (event) => {
    this.props.onDeleteRequest(event.target.name)
  }

  render() {

    let redirect = null
    if (this.props.requestRemoved) {
      //console.log(this.props.requestRemoved)
      redirect = <Redirect to='/removed-success' />
    }
    
    let spinner = <Spinner />
    let requests = null
    if (!this.props.loading) {
      spinner = null
      requests = this.props.requests.map((request, i) => (
        <tr key={request.idRequest}>
          <td>{request.idRequest}</td>
          {this.props.userType !== "Manager" ? 
          <td>{request.manager ? request.manager.name : '---'}</td>
          :''}
          {this.props.userType !== "Manager" ? 
          <td>{request.building ? request.building.company.name : '---'}</td>
          :''}
          {this.props.userType !== "Driver" ? 
            <td>{request.date ? Moment(request.date).format("DD/MM/YYYY hh:mm") : ''}</td>
          :''}
          {this.props.userType !== "Driver" ? 
            <td>{request.state}</td> 
          :''}
          {this.props.userType !== "Driver" && this.props.userType !== "Manager" ? 
            <td>{request.observation}</td>
          :''}
          {/* <td><Link to={'/view-request/'+request.idRequest}><Button color="primary" id="ver">Ver</Button></Link> </td> */}
          <td className="d-flex justify-content-center justify-content-lg-start flex-wrap">
            <Link to={{ pathname: '/view-request/' + request.idRequest, state: request.items }}>
              <Button className="btn btn-sm mr-1 btn-info" id="ver">Ver</Button>
            </Link>
            {' '}
            {this.props.userType === "Buyer" && this.state.estado == 1 && 
            request.state==='Autorizada' &&
              <Link to={{ pathname: '/new-budget/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm mr-1 btn-info" id="aprobar">Editar</Button>
              </Link>
            }
            {' '}
            {(this.props.userType === "Approver" || this.props.userType === "Buyer") &&
              <Button className="btn btn-sm mr-1 btn-danger" id="borrar" name={request.idRequest} onClick={this.deleteHandler}>Borrar</Button>
            }
            {' '}
            {this.props.userType === "Approver" && this.state.estado === 0 &&
              <Link to={{ pathname: '/approve-request/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm mr-1 btn-success" id="aprobar">Aprobar</Button>
              </Link>
            }
            {' '}
            {this.props.userType === "Approver" && this.state.estado == 2 &&
              <Link to={{ pathname: '/approve-budget/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm mr-1 btn-success" id="aprobar">Aprobar Cotizacion</Button>
              </Link>
            }
            {' '}
            {this.props.userType === "Manager" && request.state === "Entregada" &&
              <Link to={{ pathname: '/deliver-to-approve/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm mr-1 btn-success" id="aprobar">Confirmar Recepcion</Button>
              </Link>
            }
            {' '}
            {this.props.userType === "Manager" && request.state === "Retirada" &&
              <Link to={{ pathname: '/validation/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm mr-1 btn-success" id="aprobar">Validar Entrega</Button>
              </Link>
            }
            {this.props.userType === "Buyer" && this.state.estado === 0 &&
              <Link to={{ pathname: '/new-budget/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm mr-1 btn-success" id="aprobar">Cotizar</Button>
              </Link>
            }
            {' '}
            {this.props.userType == "Buyer" && this.state.estado == 1 &&
              <Link to={{ pathname: '/assing-driver/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm mr-1 btn-success" id="aprobar">Asignar Chofer</Button>
              </Link>
            }
            {' '}
            {this.props.userType === "Driver" &&  request.state === "Asignada"  &&
              <Link to={{ pathname: '/request-to-pick/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm mr-1 btn-success" id="retirarr">Retirar</Button>
              </Link>
            }
            {' '}
            {this.props.userType === "Driver" &&  request.state === "Retirada" &&
              <Link to={{ pathname: '/request-to-deliver/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm mr-1 btn-success" id="retirarr">Entregar</Button>
              </Link>
            }
            {' '}
            {this.props.userType === "Driver" &&  request.state === "Entregada" &&
              <Link to={{ pathname: '/validation/' + request.idRequest, state: i }}>
                <Button className="btn btn-sm mr-1 btn-success" id="retirarr">Validar Entrega</Button>
              </Link>
            }
          </td>
        </tr>
      ))
    }

    return (
      <div className="container p-2 p-lg-4">
        {redirect}
        {spinner}

        <div className="row m-0">
          <div className="col-12 p-0 mb-4">
            <h2>Lista de Solicitudes: </h2>
          </div>
          
            {(this.props.userType =="Approver" || this.props.userType=="Buyer") &&
            <div className="col-12 p-0 mb-4">
              <h6>Filtrar por:</h6>
              <div className="form-group row">
                <label className="col-sm-1 col-form-label">Estado</label>
                <div className="col-sm-4">
                <Input value={this.state.estado} onChange={this.refreshRequest} type="select" name="estado" id="estado" >
                    {this.state.estados.map((estado, i) => (
                      <option key={i} value={i}>{estado}</option>
                      ))}
                  </Input>
                </div>
              </div>
            </div>

            }
          
          <div className="col-12 p-0">
          
            <table className="table table-primary table-responsive-lg">
              <thead>
                <tr>
                  <th>#</th>
                  {this.props.userType !== "Manager" ? <th>Solicitante</th> :''}
                  {this.props.userType !== "Manager" ? <th>Compañía</th> :''}
                  {this.props.userType !== "Driver" ? <th>Fecha</th> :''}
                  {this.props.userType !== "Driver" ? <th>Estado</th> :''}
                  {this.props.userType !== "Driver" && this.props.userType !== "Manager" ? <th>Observación</th> :''}
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {requests}
              </tbody>
            </table>

          </div>
        </div>
 

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