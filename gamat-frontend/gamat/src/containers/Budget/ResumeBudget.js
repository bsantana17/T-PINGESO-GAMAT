import React from 'react';
// import PropTypes from 'prop-types';
import {Card,CardTitle,CardText,Button} from 'reactstrap'

const ResumeBudget = props => {
    return (
        <div className="pl-3">
                <div className="card card-budget-request item-card">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5>Solicitud</h5><button className="btn btn-sm btn-info">Editar</button>
                        </div>
                        <p><strong>Numero:</strong> {props.request.idRequest}</p>
                        <p><strong>Fecha:</strong> {props.request.date}</p>
                        <p><strong>Lugar de Entrega:</strong> </p>
                        <p><strong>Receptor:</strong> </p>
                        <p><strong>Contacto:</strong> </p>
                        <p><strong>Hora de Entrega:</strong> </p>
                        <p><strong>Condicion de Pago:</strong> </p>
                        <p><strong>Vence:</strong> </p>
                    </div>
                </div>
                <br/>
                <div className="card card-budget-request item-card"> 
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5>Cotización</h5><button className="btn btn-sm btn-info">Editar</button>
                        </div>
                        <p><strong>Numero:</strong> </p>
                        <p><strong>Peso Total:</strong> {props.totalWeight}</p>
                        <p><strong>Precio por Despacho:</strong> ${props.shipping_price}</p>
                        <p><strong>Precio por Administración:</strong> ${props.administration_price}</p>
                        <p><strong>Valor Neto:</strong> ${props.total_price}</p>
                        <p><strong>IVA: 19%</strong></p>
                        <p><strong>VALOR TOTAL: ${props.true_price}</strong></p>
                    </div>
                </div> 
                <br/>
                <button className="btn btn-success" onClick={props.sendBudget}>Guardar Cotización.</button>
            </div>
    );
};

ResumeBudget.propTypes = {
    
};

export default ResumeBudget;