import React from 'react';

const ItemRow = (props) => {
    return (
        <tr>
            <th scope="row">{props.number}</th>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            <td>{props.urgency}</td>
            <td>{props.description}</td>
        </tr>
    );
};
export default ItemRow;
