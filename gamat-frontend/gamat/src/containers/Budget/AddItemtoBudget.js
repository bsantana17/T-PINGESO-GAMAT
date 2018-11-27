import React, { Component } from 'react';
import {InputGroup, InputGroupText, InputGroupAddon, Input, 
    Button, Form, FormGroup, Label,
    Modal, ModalBody, ModalFooter ,ModalHeader} from 'reactstrap';
import './AddBudget.css';


class AddItemtoBudget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            idItem: {},
            price: 0,
            totalprice: '',
            weight: 0,
            totalweight: '',
            providers: '',
            state: '',
            comments: '',


        };

        this.toggle = this.toggle.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.totalHandler = this.totalHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.printeando = this.printeando.bind(this);
    }




    /*Funcion que muestra el modal */
    toggle() {
        this.setState({
        modal: !this.state.modal
        });
    }
    /*Funcion que cambia los estados de los imputs*/
    inputHandler (e) {
        
        const {value, name} = e.target;
        this.setState({
            [name] : value
        })
        
    }

    /*Funcion que calcula el total de los valores y pesos */
    totalHandler (e) {
        const {name, price, quantity} = e.target;
        this.setState({
            [name] : price*quantity
        }) 
    }
    /*Handler que sube todo al final */
    /*Este debe generar en el json los valores solicitados*/
    submitHandler(){
        console.log('en submitHandler en AItB', this.state)
        this.props.onAddItem(this.state);
        this.toggle();
      }

    printeando(){
        console.log("Button:" + this.state)
    }

    
    render(){
        return(
        
        <div>
            <Button size ="sm" color="danger" onClick={this.toggle}>+</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Cotizar Item</ModalHeader>
            <ModalBody> 
            <Form>
            <div className="row">
                <div className="col-md-6">     
                <FormGroup>
                    
                    <Label for="price">Precio Unitario</Label>
                    <InputGroup>
                    <InputGroupAddon addonType="append">$</InputGroupAddon>
                    <Input type="number" min="0" name="price" id="price" onChange={this.inputHandler}></Input>
                    </InputGroup>
                </FormGroup>
                </div>
                <div className="col-md-6">
                <FormGroup>
                    <Label for="totalprice">Precio Total</Label>
                    <InputGroup>
                    <InputGroupAddon addonType="append">$</InputGroupAddon>
                    <Input disabled name="totalprice" id="totalprice"  onChange={this.inputHandler} value={this.props.cantidad*this.state.price}></Input>
                    </InputGroup>
                </FormGroup>
                </div>
            </div>  
            <div className="row">
                <div className="col-md-6">
                <FormGroup>
                    <Label for="weight">Peso Unitario</Label>
                    <InputGroup>
                    <Input type="number" min="0" name="weight" id="weight" onChange={this.inputHandler}></Input>
                    <InputGroupAddon addonType="append">Kg</InputGroupAddon>
                    </InputGroup>
                </FormGroup>
                </div>
                <div className="col-md-6">
                <FormGroup>
                    <Label for="totalweight">Peso Total</Label>
                    <InputGroup>
                    <Input disabled min='0'name="totalweight" id="totalweight" value={this.props.cantidad*this.state.weight} onChange={this.inputHandler} ></Input>
                    <InputGroupAddon addonType="append">Kg</InputGroupAddon>
                    </InputGroup>
                </FormGroup>
                </div>
            </div>                
            

            <br />
            <div className="row">
                <div className="col-md-12">
                <InputGroup size="md">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Proveedor</InputGroupText>
                </InputGroupAddon>
                    <Input name="provider" id="provider" onChange={this.inputHandler}></Input>
                </InputGroup>
                </div>
                
            </div>
            <br/>
            <div className="row">
                <div className="col-md-12">
                <FormGroup>
                <Label for="state">Estado</Label>
                <Input type="select" name="state" id="state">
                    <option>Cotizado</option>
                    <option>Cotizado con Comentarios</option>
                    <option>Pendiente de entrega</option>
                    <option>Pendiente de cotizacion</option>
                </Input>
                </FormGroup>
                
                </div>
                
            </div>
            <div className="row">
                <div className="col-md-12">
                <InputGroup size="">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Comentarios</InputGroupText>
                </InputGroupAddon>
                    <Input type="textarea" name="comments" id="comments" onChange={this.inputHandler}></Input>
                </InputGroup>
                </div>
            </div>
            </Form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.submitHandler}>Agregar</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Volver</Button>
            <Button color="warning" onClick={this.printeando}>print</Button>

            </ModalFooter>
            </Modal>
        </div>
        );
    }
}

export default AddItemtoBudget