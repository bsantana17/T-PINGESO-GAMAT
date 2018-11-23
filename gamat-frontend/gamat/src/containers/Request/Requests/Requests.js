import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';
import Moment from 'moment';
// Redux
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class Requests extends Component {

  componentDidMount(){

    this.props.onFetchRequests();
  }

  render() {
    let requests = <tr><td>cargando</td></tr>
    console.log(this.props.requests)
    if (!this.props.loading ) {
      //console.log(this.props.requests)
       requests = this.props.requests.map( request => (
        <tr key={request.idRequest}>
        <th scope="row">{request.idRequest}</th>
        <td>???</td>
        <td>{Moment(request.date).format("DD/MM/YYYY")}
        </td>
        <td>{request.state}</td> 
        <td><Button color="primary" id="ver">
                Ver
            </Button>
        </td>
        </tr>
      ) )
  }
    return (
      <div>
        <Table hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Solicitante</th>
          <th>Fecha</th>
          <th>Estado</th>
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
      requests: state.requests,
      loading: state.loading,
      // token: state.auth.token,
      // userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchRequests: () => dispatch( actions.fetchRequests() )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( Requests, axios );