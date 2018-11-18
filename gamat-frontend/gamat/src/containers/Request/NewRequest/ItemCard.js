import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const ItemCard = (props) => {
  return (
    <div className="col-12 col-lg-3 mb-3">
        <div className="card">
            <div className="card-body">
            <div className="row">
                    <div className="col-4">Item 1</div>
                    <div className="col-8"></div>
                </div>
                <div className="row">
                    <div className="col-5 col-lg-4">Nombre:</div>
                    <div className="col-7 col-lg-8"> Tornillo</div>
                </div>
                <div className="row">
                    <div className="col-5 col-lg-4">Cantidad:</div>
                    <div className="col-7 col-lg-8"> 200</div>
                </div>
                <div className="row">
                    <div className="col-5 col-lg-4">Urgencia:</div>
                    <div className="col-7 col-lg-8"> No</div>
                </div>
                <div className="row">
                    <div className="col-5 col-lg-4">Descripcion:</div>
                    <div className="col-7 col-lg-8"> Aasdasd asd asdasdas asd adadaad</div>
                </div>
            </div>
        </div>
      </div>

  );
};

export default ItemCard;