import React, {
    Component
} from 'react'
import { UncontrolledAlert,Button } from 'reactstrap';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import {Link, Redirect} from 'react-router-dom';


import ItemCard from '../NewRequest/ItemCard';

class ViewRequestAp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
        this.handleOnApprove = this.handleOnApprove.bind(this);
        this.handleOnReject = this.handleOnReject.bind(this);
    }

    componentDidMount(){
        this.props.onFalseVariables();

    }

    handleOnApprove() {
        this.props.onApproveRequest(this.props.match.params.idRequest)
    }

    handleOnReject() {
        this.props.onRejectRequest(this.props.match.params.idRequest)
    }

    render() {
        
        return (
            <div>
                {this.props.approve &&
                <UncontrolledAlert color="success"  >
                    Solicitud aprobada correctamente
                 </UncontrolledAlert>}
                
                { this.props.reject && 
                    <UncontrolledAlert color="warning"  >
                    Solicitud rechazada correctamente
                    </UncontrolledAlert>
                }
                    <h2>Revisar Solicitud </h2>
                    
                <div className="d-flex  mb-5"> 

                    {
                       this.props.location.state.map((item, index) => (


                            <ItemCard
                                key={index}
                                number={item.number}
                                name={item.nombre}
                                quantity={item.quantity}
                                urgency={item.urgency}
                                description={item.description}
                            // handler={props.location.state.handler}
                            />



                        ))}
                </div>

                <div className=" col-md-7 d-flex justify-content-around">

                    <Button color="success" onClick={this.handleOnApprove}>Aprobar Solicitud </Button>
                    <Button color="danger" onClick={this.handleOnReject}>Rechazar Solicitud </Button>
                    <Link to={'/requests'}>
                    <Button color="secondary">Volver </Button>
              
            </Link> 
                </div>
            </div>

        )
    }


};

const mapStateToProps = state => {
    return {
        requests: state.request.requests,
        approve: state.request.requestApprove,
        reject: state.request.requestReject
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onApproveRequest: (requestId) => dispatch(actions.fetchApproveRequests(requestId)),
        onRejectRequest:(requestId) => dispatch(actions.fetchRejectRequests(requestId)),
        onFalseVariables: ()=>dispatch(actions.removedToFalseRequest())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewRequestAp);