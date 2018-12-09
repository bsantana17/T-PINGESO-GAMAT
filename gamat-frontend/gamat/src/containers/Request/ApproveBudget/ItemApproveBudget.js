import React from 'react';
import {Button} from 'reactstrap';
import Check from '@material-ui/icons/CheckCircle'

const ItemApproveBudget = (props) => {
  return (
    <div className="col-12 col-lg-4 mb-3">
        <div className="card">
            <div className="card-body">
            
                <div className="row">
                    <div className="col-5 col-lg-4">Nombre:</div>
                    <div className="col-7 col-lg-8"> {props.name} </div>
                </div>
                <div className="row">
                    <div className="col-5 col-lg-4">Descripcion:</div>
                    <div className="col-7 col-lg-8"> {props.description}</div>
                </div>
                <div className="row">
                    <div className="col-5 col-lg-4">Urgencia:</div>
                    <div className="col-7 col-lg-8"> {props.urgency ? 'Si' : 'No' }</div>
                </div>
                <div className="row">
                    <div className="col-5 col-lg-4">Estado:</div>
                    <div className="col-7 col-lg-8 font-weight-bold"> {props.state}</div>
                </div>
                <div className="row">
                    <div className="col-5 col-lg-4">Cantidad:</div>
                    <div className="col-7 col-lg-8"> {props.quantity} </div>
                </div>
                <div className="row">
                    <div className="col-5 col-lg-4">Precio:{props.price}</div>
                    <div className="col-7 col-lg-8">Precio total: {props.totalPrice} </div>
                </div>
                <div className="row">
                    <div className="col-12">Comentarios:</div>
                    <div className="col-12">{props.comment} </div>
                </div>
                
                <div className="row">
                    <div className="col-11 my-2">
                        <Button  active={props.active} onClick={(e)=>{props.onChangeState(props.i)}} className="btn btn-sm mr-2 btn-success">Autorizado</Button>
                        {props.active && <Check color="action" />}
                        {/* <button onClick={(e)=>{props.onChangeState("rechazado",props.i)}} className="btn btn-sm mr-2 btn-danger">r</button> */}
                    </div>
                </div>
                
                    {/* <button onClick={props.handler}/> */}
                
            </div>
        </div>
      </div>

  );
};

export default ItemApproveBudget;