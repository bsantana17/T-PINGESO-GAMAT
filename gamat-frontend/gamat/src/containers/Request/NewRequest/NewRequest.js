import React, { Component } from 'react';
import AddItemModal from './AddItemModal';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import ItemCard from './ItemCard';


export default class NewRequest extends Component {
  render() {
    return (
      <div>
        <div className="d-flex">
          <div className="mr-3"><h3>Nueva solicitud</h3></div>
          <div><AddItemModal/></div>
        </div>
        
        <h4>Items agregados:</h4>
        <div className="row">
            <ItemCard/>
        </div>
        <button className="btn btn-primary">Enviar Solicitud</button>{' '}<button className="btn btn-secondary">Volver</button>


      </div>
    )
  }
}
