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
            totalprice: 0,
            weight: 0,
            totalweight: 0,
            provider: '',
            estado: 'Cotizado',
            comments: '',
            


        };

        this.toggle = this.toggle.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.totalHandler = this.totalHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.selectHandler = this.selectHandler.bind(this);
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
        if(name === 'price'){
            this.setState({
                [name] : parseInt(value),
                totalprice: parseInt(value)*this.props.cantidad,
                
            })
        }
        else if(name === 'weight'){
            this.setState({
                [name] : parseInt(value),
                totalweight: parseInt(value)*this.props.cantidad,
                
            })
        }
        else{
            this.setState({
                [name] : value
            })
        }   
        
    }

    /*Funcion que calcula el total de los valores y pesos */
    totalHandler (e) {
        console.log("Entra o no?");
        const {name, son, quantity} = e.target;
        this.setState({
            [name] : son*quantity
        }) 
    }

    /*selectHandler que define el estado de los items*/
    selectHandler (e) {
        console.log("Entrando a selectH en AItB", e.target.value)
        this.setState({estado: e.target.value});

        
    }


    /*Handler que sube todo al final */
    /*Este debe generar en el json los valores solicitados*/
    submitHandler(){
        console.log('en submitHandler en AItB', this.props.cantidad);
        var eso1 = parseInt(this.state.price) * this.props.cantidad;
        var eso2 = parseInt(this.state.weight) * this.props.cantidad;
        console.log('en submitHandler en AItB', eso1)
        this.setState({
            totalprice: eso1,
            totalweight: eso2
        },
        function() { console.log("setState completed", this.state)}
        )
        this.props.onAddItem(this.state);
        this.toggle();

      }



    
    render(){
        return(
        
        <div style={{display: "inline-block"}}>
            <Button size ="sm" color="danger" style={{display: "inline-block"}} onClick={this.toggle}>+</Button>
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
                    <Input type="number" min="0" name="price" total="totalprice" id="price" onChange={this.inputHandler}></Input>
                    </InputGroup>
                </FormGroup>
                </div>
                <div className="col-md-6">
                <FormGroup>
                    <Label for="totalprice">Precio Total</Label>
                    <InputGroup>
                    <InputGroupAddon addonType="append">$</InputGroupAddon>
                    <Input disabled type="number" name="totalprice" id="totalprice" value={this.props.cantidad*this.state.price}></Input>
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
                    <InputGroupAddon addonType="append">g</InputGroupAddon>
                    </InputGroup>
                </FormGroup>
                </div>
                <div className="col-md-6">
                <FormGroup>
                    <Label for="totalweight">Peso Total</Label>
                    <InputGroup>
                    <Input disabled type='number' name="totalweight" id="totalweight" value={this.props.cantidad*this.state.weight}></Input>
                    <InputGroupAddon addonType="append">g</InputGroupAddon>
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
                <Label for="estado">Estado</Label>
                <Input type="select" name="estado" id="estado" value={this.state.estado} onChange={this.selectHandler}>
                    <option value="Cotizado"> Cotizado</option>
                    <option value="Cotizado con Comentarios">Cotizado con comentarios</option>
                    <option value="Pendiente de entrega">Pendiente de entrega</option>
                    <option value="Pendiente de cotizacion">Pendiente de cotizacion</option>
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

            </ModalFooter>
            </Modal>
        </div>
        );
    }
}

export default AddItemtoBudget