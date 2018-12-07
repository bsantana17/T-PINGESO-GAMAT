import React from 'react';
import PropTypes from 'prop-types';
import {Card,CardBody,CardTitle,CardText,Button} from 'reactstrap'

const ResumeBudget = props => {
    return (
        <div className="col-lg-3 col-md-12 col-sm-12">
                <Card body inverse style={{ backgroundColor: '#808080', borderColor: '#333' }}>
                    <CardTitle>
                        <b>Solicitud</b>
                    </CardTitle>
                    <CardText>
                    {/* <ul className="lista"> */}
                        <li>Numero: {props.request.idRequest}</li>
                        <li>Fecha: {props.request.date}</li>
                        <li>Lugar de Entrega: </li>
                        <li>Condicion de Pago: </li>
                        <li>Vence: </li>
                        {/* <li>Solicita: {props.request.user.name}</li> */}
                    {/* </ul>   */}
                    </CardText>
                </Card>
                <br/>
                <Card body inverse style={{ backgroundColor: '#808080', borderColor: '#333' }}> 
                    <CardTitle>
                        <b>Resumen de la Cotizacion</b>
                    </CardTitle>
                    <CardText>
                    <li className="lista">Numero: </li>
                        <li>Peso Total: {props.totalWeight}</li>
                        <li>Precio por Despacho: ${props.shipping_price}</li>
                        <li>Precio por Administración: ${props.administration_price}</li>
                        <li>Valor Neto:$ {props.total_price}</li>
                        <li><b>IVA: 19%</b></li>
                        <li><b>VALOR TOTAL: ${props.true_price}</b></li>
                    </CardText>
                </Card> 
                <br/>
                <Button color="success" onClick={props.sendBudget} className="endbuttons" >Guardar Cotización.</Button>
            </div>
    );
};

ResumeBudget.propTypes = {
    
};

export default ResumeBudget;