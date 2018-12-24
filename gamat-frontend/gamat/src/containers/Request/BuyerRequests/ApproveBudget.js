import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import ItemApproveBudget from './ItemApproveBudget';
import {  Redirect } from 'react-router-dom';


class ApproveBudget extends Component {
    constructor(props){
        super(props);
        this.state={
            indiceRequest:0,
            items:[],
            states:[]

        }

        this.handleOnApprove=this.handleOnApprove.bind(this)
        this.handleOnReject=this.handleOnReject.bind(this);
        this.handleOnChangeState=this.handleOnChangeState.bind(this)
        this.helperRefreshItems=this.helperRefreshItems.bind(this)
        this.handleOnAutorizar=this.handleOnAutorizar.bind(this)


    }

    componentDidMount(){
        let indiceRequest =  this.props.requests.findIndex(
            (req)=>req.idRequest == this.props.match.params.idRequest);
      
        const newStates=this.props.requests[indiceRequest].items.map(()=>false);
            console.log("nesStates",newStates)

        this.setState({
            indiceRequest: indiceRequest,
            // items: request.items,
            
            states: newStates
        })

    }

    handleOnAutorizar(){
        let  newState= [...this.state.states]
        console.log(newState)
        for (let index = 0; index < newState.length; index++) {
             newState[index]=true;
            
        }
        console.log(newState)
        this.setState({
            states:newState
        })
    }
    
    handleOnChangeState(indice){
        console.log("CAMBIANDO",indice)
        let  newState= [...this.state.states]
        newState[indice]=!this.state.states[indice]
        this.setState({
            states:newState
        },()=>console.log(this.state.states))
    }
    helperRefreshItems(){
       
        
        const states= this.state.states;
        let request= this.props.requests[this.state.indiceRequest]
       let newItems = request.items.map((item,i)=>{
           let state;
            states[i] ? state='autorizado':
            state='no autorizado';

            return {...item,state:state}
        })
        let newStateRequest={...request,items:newItems}

        return newStateRequest
    }


    handleOnApprove(){
        const idRequest= this.props.requests[this.state.indiceRequest].idRequest;
        let newStateRequest = this.helperRefreshItems();
        console.log(newStateRequest)
        this.props.onApproveBudget(idRequest,newStateRequest);

    }

    handleOnReject(){
        const idRequest= this.props.requests[this.state.indiceRequest].idRequest;
        let newStateRequest = this.helperRefreshItems();
        this.props.onRejectBudget(idRequest,newStateRequest);
    }


    render() {
        return (
            <div>
            {/* {this.props.approve &&
                <UncontrolledAlert color="success"  >
                    Solicitud aprobada correctamente
             </UncontrolledAlert>}

            {this.props.reject &&
                <UncontrolledAlert color="warning"  >
                    Solicitud rechazada correctamente
                </UncontrolledAlert>
            } */}
            {(this.props.budgetApproveSuccess || this.props.budgetRejectSuccess) && <Redirect to='/requests' />}
            <h2>Revisar Cotizacion</h2>

            <div className="d-flex  mb-5">

                {
                    this.props.requests[this.state.indiceRequest].items.map((item, index) => (


                        <ItemApproveBudget
                            key={index}
                            i={index}
                            name={item.nombre}
                            quantity={item.quantity}
                            urgency={item.urgency}
                            description={item.description}
                            comment={item.comment}
                            // observation={item.observation}
                            price={item.price}
                            state={item.state}
                            // distributor={item.distributor}
                            totalPrice={item.totalPrice}
                            active={this.state.states[index]}
                            // onChangeForm={this.handleOnChangeForm}
                            // valueObservation={this.state.observations[index]}
                            onChangeState={this.handleOnChangeState}

                        />



                    ))}
            </div>

            <div className=" col-md-7 d-flex justify-content-around">
                <Button color="primary" onClick={this.handleOnApprove}>Aprobar Cotizacion </Button>
                <Button color="danger" onClick={this.handleOnReject}>Rechazar Cotizacion </Button>
            <Button color="success" onClick={this.handleOnAutorizar}>Autorizar todos </Button>            
                <Link to={'/requests'}>
                    <Button color="secondary">Volver </Button>

                </Link>
            </div>
        </div>

        );
    }
}




const mapStateToProps = state => {
    return {
        requests: state.request.requests,
        approve: state.request.requestApprove,
        reject: state.request.requestReject,
        budgetApproveSuccess: state.request.budgetApproveSuccess,
        budgetRejectSuccess: state.request.budgetRejectSuccess
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onApproveBudget: (requestId,request) => dispatch(actions.fetchApproveBudget(requestId,request)),
        onRejectBudget: (requestId,request) => dispatch(actions.fetchRejectBudget(requestId,request)),
        onFalseVariables: () => dispatch(actions.removedToFalseRequest())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApproveBudget);