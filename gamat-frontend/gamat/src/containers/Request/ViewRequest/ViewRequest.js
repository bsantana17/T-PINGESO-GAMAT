import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

 class ViewRequest extends Component {
  render() {
    // esto es para qeu se pueda acceder directamente usando la ruta
    let request= this.props.requests.find(
      (req)=>req.idRequest == this.props.match.params.idRequest)
    return (
      <div>
        <Link to={'/requests'}>
           <Button color="secondary">Volver </Button>
        </Link>
        {console.log(this.props.location.state)}
        <table className="table table-sm">
          <thead>
            <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Urgencia</th>
            <th>Descripcion</th>
            <th>Observacion</th>
            </tr>
          </thead>
          <tbody>
            {
              
              request.items.map((item, index) => {
                return <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.urgency}</td>
                        <td>{item.description}</td>
                        <td>{item.observation}</td>
                      </tr>
              })
            }
          </tbody>
        </table>
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