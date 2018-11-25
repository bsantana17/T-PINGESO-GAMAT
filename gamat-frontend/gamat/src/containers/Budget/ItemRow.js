import React from 'react';
import AddItemtoBudget from './AddItemtoBudget';

class ItemRow extends React.Component {
    render(){

    function printUrgency(dato){
        if(dato === true){
            return "Si";
        }
        return "No";
    }
    
    return (
        <tr>
            <th scope="row">{this.props.data.idItem}</th>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.quantity}</td>
            <td>{printUrgency(this.props.data.urgency)}</td>
            <td>{this.props.data.description}</td>
            <td>
            <div><AddItemtoBudget onAddItem={(e) => this.addItemHandler(e)}/></div>
            {/*Cuando se crea una budget, deberia poder ver su budget a partir de un botn.*/}
            </td>
        </tr>
    );
    }
};
export default ItemRow;
