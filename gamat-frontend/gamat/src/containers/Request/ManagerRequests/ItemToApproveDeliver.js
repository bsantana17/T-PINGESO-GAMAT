import React from 'react';

const ItemToApproveDeliver = (props) => {

  return (
    <div className="col-12 col-lg-4 mb-3">
        <div className="card">
            <div className="card-body">
            <div className="row">
                    <div className="col-4"><b>Item #{props.key}</b></div>
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
                    <div className="col-7 col-lg-8"> </div>
                </div>
                <div className="row">
                    <div className="col-12 my-2">
                        <select value={props.select} onChange={(e)=>props.onChangeState(e,props.i)} className="form-control">
                            <option key={0} value={0}>Conforme</option>
                            <option  key={1} value={1}>Disconforme</option>
                        </select>
                    </div>
                </div>
                
                    {/* <button onClick={props.handler}/> */}
                
            </div>
        </div>
      </div>

  );
};

export default ItemToApproveDeliver;