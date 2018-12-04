import React from 'react';

const ItemCard = (props) => {
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
                    <div className="col-12 mt-3">
                        <button className="btn btn-sm btn-info mr-2">Editar</button>
                        <button className="btn btn-sm btn-danger mr-2">Borrar</button>
                    </div>
                </div>
                <div>

                    {props.rol==1 && 
                    <div>
                    <Button  onClick={(e)=>{props.onChangeState("autorizado")}} color="success">Autorizar</Button>
                    <Button  onClick={(e)=>{props.onChangeState("pendiente")}} color="secondary">Pendiente</Button>
                    <Button  onClick={(e)=>{props.onChangeState("rechazado")}} color="danger">Rechazar</Button>
                    </div>
                }
                </div>
            </div>
        </div>
      </div>

  );
};

export default ItemCard;