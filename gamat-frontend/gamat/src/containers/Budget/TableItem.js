import React from 'react';
import PropTypes from 'prop-types';
import {Button,Table} from 'reactstrap'

const TableItem = props => {
    return (
        <div>
            <Table size="sm" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Urgencia</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {/*Aqui, la funcion de arriba deberia guardar todo en testrequest, y mostrarlo.*/}
                    {props.items.map((item, index) => (
                        item.state!="rechazado" &&
                        <tr key={index}>
                            <th scope="row">{item.idItem}</th>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.urgency ? "Si":"No"}</td>
                            <td>{item.description}</td>
                            <td>
                                {/* <div > */}
                                <Button  size="sm" color="info" onClick={(e)=>props.onSeeItem(index)}>Ver</Button>
                                <Button size ="sm" color={props.editItems[index] ? 'primary':'danger'} style={{display: "inline-block"}} onClick={(e)=>props.openAddItem(index)}>
                                {props.editItems[index] ? 'Editar':'+'}
                                </Button>
                                    {/* <AddItemtoBudget cantidad={this.props.datosRequest.quantity} onAddItem={(e) => this.addItemHandler(e)} /> */}
                                    {/*Cuando se crea una budget, deberia poder ver su budget a partir de un botn.*/}
                                    {/* <SeeBudgetforItem datos={this.state.budgetItem} funcion={this.displayCollapse}></SeeBudgetforItem> */}
                                
                                {/* </div> */}

                            </td>

                        </tr>


                    ))}
                </tbody>
            </Table>
        </div>
    );
};

TableItem.propTypes = {

};

export default TableItem;