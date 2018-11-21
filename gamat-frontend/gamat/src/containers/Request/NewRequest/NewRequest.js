import React, { Component } from 'react';
import AddItemModal from './AddItemModal';
import ItemCard from './ItemCard';
import { requests } from '../../../requests.json';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';


class NewRequest extends Component {

  state = {
    request : requests[0],
    items : []
  }


  addItemHandler (item){
    console.log('en addItemHandles', item)
    this.setState({
      items: this.state.items.concat(item) 
    },()=> console.log('el nuevo estado de items',this.state.items))
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
    });


    return (
      <div>
        <div className="d-flex">
          <div className="mr-3"><h3>Nueva solicitud</h3></div>
          <div><AddItemModal onAddItem={(e) => this.addItemHandler(e)}/></div>
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

const mapStateToProps = state => {
  return {
    items: state.items
  };
}
const mapDispatchToProps = dispatch => {
  return{
     onRequestAdded: (requestData) => dispatch(actions.addRequest(requestData))  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRequest);