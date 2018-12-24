import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import { connect } from 'react-redux';
import Moment from 'moment'
import * as actions from '../../../store/actions/index';

 class ViewRequest extends Component {
  render() {
    // esto es para qeu se pueda acceder directamente usando la ruta
    let request= this.props.requests.find(
      (req)=>req.idRequest == this.props.match.params.idRequest)
    return (
      <div className="container">
        <h2>Detalles de la solicitud:</h2>
        <p><strong>Solicitante:</strong> {request.manager ? request.manager.name : '---'}</p>
        <p><strong>Compañía:</strong> {request.building ? request.building.company.name : '---'}</p>
        <p><strong>Dirección de obra:</strong> {request.building ? request.building.address : '---'}</p>
        <p><strong>Fecha:</strong> {request.date ? Moment(request.date).format("DD/MM/YYYY hh:mm") : '---'}</p>
        <p><strong>Estado de la solicitud:</strong> {request.state} </p>

        <h4>Items Solicitados: </h4>
        <table className="table table-primary table-responsive-lg table-sm">
          <thead>
            <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Urgencia</th>
            <th>Descripción</th>
            <th>Observación</th>
            </tr>
          </thead>
          <tbody>
            {
              request.items.map((item, index) => {
                return <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.urgency === false ? 'No' : 'Si' }</td>
                        <td>{item.description}</td>
                        <td>{item.observation}</td>
                      </tr>
              })
            }
          </tbody>
        </table>
        <Link to={'/requests'}>
           <Button color="secondary">Volver </Button>
        </Link>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
      requests: state.request.requests,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//       onApproveRequest: (requestId,observations,states) => dispatch(actions.fetchApproveRequests(requestId,observations,states)),
//       onRejectRequest: (requestId,observations,states) => dispatch(actions.fetchRejectRequests(requestId,observations,states)),
//       onFalseVariables: () => dispatch(actions.removedToFalseRequest())

//   };
// };

export default connect(mapStateToProps, null)(ViewRequest);