import React, { Component } from 'react';
import Moment from 'moment';
// Redux
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import Spinner from '../../../components/UI/Spinner';
import { Table, Button} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';

class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
    this.handler = this.handler.bind(this);
  }
  handler(){
    console.log("funciona")
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount(){
    this.props.onFetchRequests(this.props.userId,this.props.userType);
    this.props.removedFalse();
  }

  deleteHandler = (event) => {
    this.props.onDeleteRequest(event.target.name)
  }

  render() {
    let spinner = <Spinner/>
    
    // let buttons = null
    // let ruta =''
    //console.log(this.props.userType)
    // if(this.props.userType === '1' || this.props.userType === 1){
    //   ruta='/approve-request/';
      
    // }else{
    //   ruta='/view-request/';
    // }

    let redirect = null
    if(this.props.requestRemoved){
      //console.log(this.props.requestRemoved)
      redirect = <Redirect to='/removed-success' />
    }

    let requests = null
    if (!this.props.loading ) {
        spinner = null
        requests = this.props.requests.map( request => (
          <tr key={request.idRequest}>
          <td>{request.idRequest}</td>
          <td>???</td>
          <td>{Moment(request.date).format("DD/MM/YYYY hh:mm")}</td>
          <td>{request.state}</td> 
          <td>{request.observation}</td> 
          {/* <td><Link to={'/view-request/'+request.idRequest}><Button color="primary" id="ver">Ver</Button></Link> </td> */}
          <td>
            <Link to={{ pathname: '/view-request/'+request.idRequest, state:request.items}}>
              <Button className="btn btn-sm btn-info" id="ver">Ver</Button>
            </Link> 
            {' '}
            <Button className="btn btn-sm btn-danger"  id="borrar" name={request.idRequest} onClick={this.deleteHandler}>Borrar</Button>
            {' '}
            {this.props.userType == 1 ? 
              <Link to={{ pathname: '/approve-request/'+request.idRequest, state:request.items}}>
                <Button  className="btn btn-sm btn-success" id="aprobar">Aprobar</Button> 
              </Link> 
            : null}
          </td>
        </tr>
      ) )
  }

    return (
      <div className="container">
        {redirect}
        {spinner}
        <h2>Historial de solicitudes: </h2>
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
      onFetchRequests: (userId,userType) => dispatch( actions.fetchRequests(userId,userType) ),
      onDeleteRequest: (requestId) => dispatch( actions.removeRequests(requestId)),
      removedFalse: () => dispatch(actions.removedToFalse())  
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( Requests );