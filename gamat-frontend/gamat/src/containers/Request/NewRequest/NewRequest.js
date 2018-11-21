import React, { Component } from 'react';
import AddItemModal from './AddItemModal';
import ItemCard from './ItemCard';
import {requests} from '../../../requests.json'


export default class NewRequest extends Component {

  state = {
    request : requests[0],
    items: [],
  }

  render() {
    //console.log(this.state.request);
    const items = this.state.items.map((item, index) => {
      return <ItemCard 
                key={index}
                number={index} 
                name={item.name} 
                quantity={item.quantity} 
                description={item.description} 
                urgency={item.urgency} 
                />
    })

    return (
      <div>
        <div className="d-flex">
          <div className="mr-3"><h3>Nueva solicitud</h3></div>
          <div><AddItemModal/></div>
        </div>
        
        <h4>Items agregados:</h4>
        <div className="row">
            {items}
        </div>
        <button className="btn btn-primary">Enviar Solicitud</button>{' '}<button className="btn btn-secondary">Volver</button>


      </div>
    )
  }
}
