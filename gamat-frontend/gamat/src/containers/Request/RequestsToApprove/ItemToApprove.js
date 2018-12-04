import React from 'react';

const ItemToApprove = (props) => {
  return (
    <div className="col-12 col-lg-4 mb-3">
        <div className="card">
            <div className="card-body">
            <div className="row">
                    <div className="col-4"><b>Item #{props.number}</b></div>
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
                    <div className="col-5 col-lg-4">Urgencia:</div>
                    <div className="col-7 col-lg-8"> {props.urgency ? 'Si' : 'No' }</div>
                </div>
                <div className="row">
                    <div className="col-5 col-lg-4">Descripcion:</div>
                    <div className="col-7 col-lg-8"> {props.description}</div>
                </div>
                <div className="row">
                    <div className="col-12">Observaciones:</div>
                    <div className="col-12"> <textarea className="form-control  w-100" rows="2"></textarea></div>
                </div>
                <div className="row">
                    <div className="col-12 my-2">
                        <button className="btn btn-sm mr-2 btn-success">Aprobar</button>
                        <button className="btn btn-sm mr-2 btn-warning">Pendiente</button>
                        <button className="btn btn-sm mr-2 btn-danger">Rechazar</button>
                    </div>
                </div>
                
                    {/* <button onClick={props.handler}/> */}
                
            </div>
        </div>
      </div>

  );
};

export default ItemToApprove;