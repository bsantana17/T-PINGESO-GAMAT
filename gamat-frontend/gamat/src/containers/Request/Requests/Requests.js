import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';
// Redux
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class Requests extends Component {

  componentDidMount(){

    this.props.onFetchRequests();
  }

  render() {
     let requests = <h1>loading</h1>
    console.log(this.props.loading)
    if ( this.props.loading ) {
      //console.log(this.props.requests)
       requests = this.props.requests.map( request => (
          <h1>request.id</h1>
      ) )
  }
    return (
      
      <div>


        {requests}
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td> 
            <td><Button color="primary" id="ver">
                    Ver
                </Button>
                <Button color="danger" id="borrar">
                Borrar
                </Button>
                <Button color="primary" id="editar">
                    Editar
                </Button> </td>
            </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><Button color="primary" id="ver">
                    Ver
                </Button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>

            
                <Button color="success" id="pedir">
                    Pedir
                </Button>

                <Button color="warning" id="cotizar">
                    Pedir
                </Button>
            </td>
          </tr>


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