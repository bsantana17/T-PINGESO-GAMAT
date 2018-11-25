import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import Moment from 'moment';
// Redux
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import Spinner from '../../../components/UI/Spinner'

class Requests extends Component {

  componentDidMount(){
    this.props.onFetchRequests(this.props.userId);
  }

  render() {
    let spinner = <Spinner/>
    let requests = null
    if (!this.props.requestLoading ) {
        spinner = null
        requests = this.props.requests.map( request => (
        <tr key={request.idRequest}>
        <th scope="row">{request.idRequest}</th>
        <td>???</td>
        <td>{Moment(request.date).format("DD/MM/YYYY")}
        </td>
        <td>{request.state}</td> 
        <td>{request.observation}</td> 
        <td><Button color="primary" id="ver">
                Ver
            </Button>
        </td>
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
      requests: state.requests,
      requestLoading: state.requestLoading,
      userId: state.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchRequests: (userId) => dispatch( actions.fetchRequests(userId) )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( Requests );