import React, { Component } from 'react';
import Moment from 'moment';
// Redux
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import Spinner from '../../../components/UI/Spinner';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom';

class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount(){
    this.props.onFetchRequests(this.props.userId);
  }

  render() {
    let spinner = <Spinner/>

    let buttons = null
    if(this.props.userType === '2' || this.props.userType === 2){
      buttons = <div><Button color="primary" id="ver" onClick={this.toggle}>Ver</Button> <Button color="primary" id="ver">Aprobar</Button></div>
    }

    let requests = null
    if (!this.props.requestLoading ) {
        spinner = null
        requests = this.props.requests.map( request => (
        <tr key={request.idRequest}>
          <td scope="row">{request.idRequest}</td>
          <td>???</td>
          <td>{Moment(request.date).format("DD/MM/YYYY")}</td>
          <td>{request.state}</td> 
          <td>{request.observation}</td> 
          {/* <td><Link to={'/view-request/'+request.idRequest}><Button color="primary" id="ver">Ver</Button></Link> </td> */}
          <td><Link to={{ pathname: '/view-request/'+request.idRequest, state:request.items }}><Button color="primary" id="ver">Ver</Button></Link> </td>
        </tr>
      ) )
  }

    return (
      <div>
        {spinner}
        <Table hover>
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
      requests: state.request.requests,
      requestLoading: state.request.loading,
      userId: state.login.userId,
      userType: state.login.userType
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchRequests: (userId) => dispatch( actions.fetchRequests(userId) )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( Requests );