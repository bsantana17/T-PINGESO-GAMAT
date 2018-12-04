import React, { Component } from 'react'
import { UncontrolledAlert, Button } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { Link } from 'react-router-dom';
import ItemToApprove from './ItemToApprove';
import NewRequest from '../NewRequest/NewRequest';

class RequestoToAprove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indice: 0,
            items: [],
            observations:[],
            states:[]
        };
        this.handleOnApprove = this.handleOnApprove.bind(this);
        this.handleOnReject = this.handleOnReject.bind(this);
        this.handleOnChangeState = this.handleOnChangeState.bind(this);
        this.handleOnChangeForm=this.handleOnChangeForm.bind(this);
    }

    componentDidMount() {
        // this.props.onFalseVariables();

        let request = { ...this.props.requests[this.props.match.params.indice] };
        const newObservations= request.items.map(()=>"")
        const newStates=request.items.map(()=>"");
      

        this.setState({
            indice: this.props.match.params.indice,
            items: request.items,
            observations: newObservations,
            states: newStates
        })

    }
    handleOnChangeState(state,i) {
        console.log("cambiando",state,"en",i)
       let copiaStates = [...this.state.states]
       copiaStates[i]=state;
       this.setState({
           states:copiaStates
       })
    }

    handleOnChangeForm(e,i){
        console.log("llegue aca")
        const value = e.target.value;
        let copia = [...this.state.observations]
        copia[i]=value;
        console.log("llegue aca2",value)
        this.setState({
            observations:copia
        })

    }

    handleOnApprove() {
        const idRequest= this.props.requests[this.state.indice].idRequest;
        const observations= this.state.observations;
        const states= this.state.states;
        let newStateRequest= this.props.requests[this.state.indice]
        newStateRequest.items.map((item,i)=>{
            item.observation=observations[i];
            let idState;
            switch (states[i]) {
                case 'autorizado':
                    idState=6
                    break;
                case 'pendiente':
                    idState=2
                    break;
                case 'rechazado':
                    idState=5
                    break;
                default:
                    break;
            }
            item.itemState={
                idItemState:idState,
                name:states[i]
            }
        })
        console.log('REQUEST MODIFICADA',newStateRequest);
        this.props.onApproveRequest(idRequest,newStateRequest)
    }

    handleOnReject() {
        const idRequest= this.props.requests[this.state.indice].idRequest;
        const observations= this.state.observations;
        const states= this.state.states;
        this.props.onRejectRequest(idRequest,observations,states)
    }

    render() {

        return (
            <div>
                {this.props.approve &&
                    <UncontrolledAlert color="success"  >
                        Solicitud aprobada correctamente
                 </UncontrolledAlert>}

                {this.props.reject &&
                    <UncontrolledAlert color="warning"  >
                        Solicitud rechazada correctamente
                    </UncontrolledAlert>
                }
                <h2>Revisar Solicitud </h2>

                <div className="d-flex  mb-5">

                    {this.state.items && 
                        this.state.items.map((item, index) => (


                            <ItemToApprove
                                key={index}
                                i={index}
                                number={item.number}
                                name={item.nombre}
                                quantity={item.quantity}
                                urgency={item.urgency}
                                description={item.description}
                                observation={item.observation}
                                onChangeForm={this.handleOnChangeForm}
                                valueObservation={this.state.observations[index]}
                                state={this.state.states[index]}
                                onChangeState={this.handleOnChangeState}

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
        onApproveRequest: (requestId,observations,states) => dispatch(actions.fetchApproveRequests(requestId,observations,states)),
        onRejectRequest: (requestId,observations,states) => dispatch(actions.fetchRejectRequests(requestId,observations,states)),
        onFalseVariables: () => dispatch(actions.removedToFalseRequest())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestoToAprove);