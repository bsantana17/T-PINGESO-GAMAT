import React, { Component } from 'react';
import {InputGroup, InputGroupText, InputGroupAddon, Input, 
    Button, Form, FormGroup, Label,
    Modal, ModalBody, ModalFooter ,ModalHeader,
    InputGroupButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import './AddBudget.css';


class AddItemtoBudget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            idItem: '',
            price: '',
            totalprice: '',
            weight: '',
            totalweight: '',
            providers: '',
            state: '',
            comments: '',
            dropdownOpen: false,    


        };

        this.toggle = this.toggle.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.toggleDropDown =this.toggleDropDown.bind(this);
        this.totalHandler = this.totalHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }


    /*Funcion que abre o cierra el dropdown */
    toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
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
    submitHandler(){
        console.log('en submitHandler', this.state)
        this.props.onAddItem(this.state);
        return this.toggle
      }

    render(){
        return(
        <div>
            <Button color="danger" onClick={this.toggle}>Hacer Cotización</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Cotizar Item</ModalHeader>
            <ModalBody> 
            <Form>
            <div class="row">
                <div class="col-md-6">     
                <FormGroup>
                    <Label for="price">Precio Unitario</Label>
                    <Input name="price" id="price" onChange={this.inputHandler}></Input>
                </FormGroup>
                </div>
                <div class="col-md-6">
                <FormGroup>
                    <Label for="totalprice">Precio Total</Label>
                    <Input disabled name="totalprice" id="totalprice" value={this.totalHandler}></Input>
                </FormGroup>
                </div>
            </div>  
            <div class="row">
                <div class="col-md-6">
                <FormGroup>
                    <Label for="weight">Peso Unitario</Label>
                    <Input name="weight" id="weight" onChange={this.inputHandler}></Input>
                </FormGroup>
                </div>
                <div class="col-md-6">
                <FormGroup>
                    <Label for="totalweight">Peso Total</Label>
                    <Input disabled name="totalweight" id="totalweight" value={this.totalHandler}></Input>
                </FormGroup>
                </div>
            </div>                
            

            <br />
            <div class="row">
                <div class="col-md-12">
                <InputGroup size="md">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Proveedor</InputGroupText>
                </InputGroupAddon>
                    <Input name="provider" id="provider" onChange={this.inputHandler}></Input>
                </InputGroup>
                </div>
                
            </div>
            <br/>
            <div class="row">
                <div class="col-md-12">
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
            <div class="row">
                <div class="col-md-12">
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
            </ModalFooter>
            </Modal>
        </div>
        );
    }
}

export default AddItemtoBudget