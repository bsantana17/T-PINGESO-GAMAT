import React from 'react';

const ItemToDeliver = (props) => {
    let pickedState = null;
    if(props.picked === true){
        pickedState = 'card bg-success'
    }else{
        pickedState = 'card'
    }

  return (
    <div className="col-12 col-lg-4 mb-3">
        <div className={pickedState}>
            <div className="card-body">
            <div className="row">
                    <div className="col-4"><b>Item #{props.i}</b></div>
                    <div className="col-8"></div>
                </div>
                <div className="row">
                    <div className="col-5 col-lg-4">Nombre:</div>
                    <div className="col-7 col-lg-8"> {props.name} </div>
                </div>
                <div className="row">
                    <div className="col-5 col-lg-4">Cantidad:</div>
                    <div className="col-7 col-lg-8"> {props.quantity} </div>
                </div>
                <div className="row">
                    <div className="col-5 col-lg-4">Descripcion:</div>
                    <div className="col-7 col-lg-8"> {props.description}</div>
                </div>
                <div className="row">
                    <div className="col-5 col-lg-4">Proveedor:</div>
                    <div className="col-7 col-lg-8">{props.distributor} </div>
                </div>
                <div className="row">
                    <div className="col-12 my-2">
                    { props.picked === true ? 
                        <button onClick={props.onChangeState} className="btn btn-sm mr-2 btn-danger">No Entregado</button>
                        : <button onClick={props.onChangeState} className="btn btn-sm mr-2 btn-success">Entregado</button>
                    }
                    </div>
                </div>
                
                    {/* <button onClick={props.handler}/> */}
                
            </div>
        </div>
      </div>

  );
};

export default ItemToDeliver;