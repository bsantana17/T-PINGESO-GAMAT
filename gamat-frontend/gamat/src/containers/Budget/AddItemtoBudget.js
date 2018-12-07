import React, { Component } from 'react';
import {
    InputGroup, InputGroupText, InputGroupAddon, Input,
    Button, Form, FormGroup, Label,
    Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import './AddBudget.css';


// class AddItemtoBudget extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             modal: false,
//             idItem: {},
//             price: 0,
//             totalprice: 0,
//             weight: 0,
//             totalweight: 0,
//             provider: '',
//             estado: 'Cotizado',
//             comments: '',


//         };

//         this.toggle = this.toggle.bind(this);
//         props.inputHandler = props.inputHandler.bind(this);
//         this.totalHandler = this.totalHandler.bind(this);
//         this.submitHandler = this.submitHandler.bind(this);
//         this.selectHandler = this.selectHandler.bind(this);
//     }




//     /*Funcion que muestra el modal */
//     toggle() {
//         this.setState({
//         modal: !this.state.modal
//         });
//     }
//     /*Funcion que cambia los estados de los imputs*/
//     inputHandler (e) {

//         const {value, name} = e.target;
//         if(name === 'price' || name === 'weight'){
//             this.setState({
//                 [name] : parseInt(value)
//             })
//         }
//         else{
//             this.setState({
//                 [name] : value
//             })
//         }   

//     }

//     /*Funcion que calcula el total de los valores y pesos */
//     totalHandler (e) {
//         console.log("Entra o no?");
//         const {name, son, quantity} = e.target;
//         this.setState({
//             [name] : son*quantity
//         }) 
//     }

//     /*selectHandler que define el estado de los items*/
//     selectHandler (e) {
//         console.log("Entrando a selectH en AItB", e.target.value)
//         this.setState({estado: e.target.value});


//     }


//     /*Handler que sube todo al final */
//     /*Este debe generar en el json los valores solicitados*/
//     submitHandler(){
//         console.log('en submitHandler en AItB', this.state);
//         this.setState({
//             totalprice: parseInt(this.state.price) * this.props.cantidad,
//             totalweight: parseInt(this.state.weight) * this.props.cantidad
//         })

//         this.props.onAddItem(this.state);
//         this.toggle();
//       }




//     render(){
//         return(

//         <div style={{display: "inline-block"}}>
//             <Button size ="sm" color="danger" style={{display: "inline-block"}} onClick={this.toggle}>+</Button>
//             <Modal isOpen={this.state.modal} toggle={this.toggle}>
//             <ModalHeader toggle={this.toggle}>Cotizar Item</ModalHeader>
//             <ModalBody> 
//             <Form>
//             <div className="row">
//                 <div className="col-md-6">     
//                 <FormGroup>

//                     <Label for="price">Precio Unitario</Label>
//                     <InputGroup>
//                     <InputGroupAddon addonType="append">$</InputGroupAddon>
//                     <Input type="number" min="0" name="price" total="totalprice" id="price" onChange={props.inputHandler}></Input>
//                     </InputGroup>
//                 </FormGroup>
//                 </div>
//                 <div className="col-md-6">
//                 <FormGroup>
//                     <Label for="totalprice">Precio Total</Label>
//                     <InputGroup>
//                     <InputGroupAddon addonType="append">$</InputGroupAddon>
//                     <Input disabled name="totalprice" id="totalprice" value={this.props.cantidad*this.state.price}  ></Input>
//                     </InputGroup>
//                 </FormGroup>
//                 </div>
//             </div>  
//             <div className="row">
//                 <div className="col-md-6">
//                 <FormGroup>
//                     <Label for="weight">Peso Unitario</Label>
//                     <InputGroup>
//                     <Input type="number" min="0" name="weight" id="weight" onChange={props.inputHandler}></Input>
//                     <InputGroupAddon addonType="append">g</InputGroupAddon>
//                     </InputGroup>
//                 </FormGroup>
//                 </div>
//                 <div className="col-md-6">
//                 <FormGroup>
//                     <Label for="totalweight">Peso Total</Label>
//                     <InputGroup>
//                     <Input disabled min='0'name="totalweight" id="totalweight" value={this.props.cantidad*this.state.weight} onChange={props.inputHandler} ></Input>
//                     <InputGroupAddon addonType="append">g</InputGroupAddon>
//                     </InputGroup>
//                 </FormGroup>
//                 </div>
//             </div>                


//             <br />
//             <div className="row">
//                 <div className="col-md-12">
//                 <InputGroup size="md">
//                 <InputGroupAddon addonType="prepend">
//                     <InputGroupText>Proveedor</InputGroupText>
//                 </InputGroupAddon>
//                     <Input name="provider" id="provider" onChange={props.inputHandler}></Input>
//                 </InputGroup>
//                 </div>

//             </div>
//             <br/>
//             <div className="row">
//                 <div className="col-md-12">
//                 <FormGroup>
//                 <Label for="estado">Estado</Label>
//                 <Input type="select" name="estado" id="estado" value={this.state.estado} onChange={this.selectHandler}>
//                     <option value="Cotizado"> Cotizado</option>
//                     <option value="Cotizado con Comentarios">Cotizado con comentarios</option>
//                     <option value="Pendiente de entrega">Pendiente de entrega</option>
//                     <option value="Pendiente de cotizacion">Pendiente de cotizacion</option>
//                 </Input>
//                 </FormGroup>

//                 </div>

//             </div>
//             <div className="row">
//                 <div className="col-md-12">
//                 <InputGroup size="">
//                 <InputGroupAddon addonType="prepend">
//                     <InputGroupText>Comentarios</InputGroupText>
//                 </InputGroupAddon>
//                     <Input type="textarea" name="comments" id="comments" onChange={props.inputHandler}></Input>
//                 </InputGroup>
//                 </div>
//             </div>
//             </Form>
//             </ModalBody>
//             <ModalFooter>
//             <Button color="primary" onClick={this.submitHandler}>Agregar</Button>{' '}
//             <Button color="secondary" onClick={this.toggle}>Volver</Button>

//             </ModalFooter>
//             </Modal>
//         </div>
//         );
//     }
// }

// export default AddItemtoBudget



const AddItemtoBudget = props => {
    return (
        <div style={{ display: "inline-block" }}>
            {/* <Button size="sm" color="danger" style={{ display: "inline-block" }} onClick={this.toggle}>+</Button> */}
            <Modal isOpen={props.open} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Cotizar Item</ModalHeader>
                <ModalBody>
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <FormGroup>

                                    <Label for="price">Precio Unitario</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="append">$</InputGroupAddon>
                                        <Input type="number" min="0" value={props.price} name="price" total="totalprice" id="price" onChange={props.inputHandler}></Input>
                                    </InputGroup>
                                </FormGroup>
                            </div>
                            <div className="col-md-6">
                                <FormGroup>
                                    <Label for="totalprice">Precio Total</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="append">$</InputGroupAddon>
                                        <Input disabled name="totalprice" id="totalprice" value={props.price*props.quantity}  ></Input>
                                    </InputGroup>
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <FormGroup>
                                    <Label for="weight">Peso Unitario</Label>
                                    <InputGroup>
                                        <Input type="number" value={props.weight} min="0" name="weight" id="weight" onChange={props.inputHandler}></Input>
                                        <InputGroupAddon addonType="append">g</InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            </div>
                            <div className="col-md-6">
                                <FormGroup>
                                    <Label for="totalweight">Peso Total</Label>
                                    <InputGroup>
                                        <Input disabled min='0' value={props.weight*props.quantity} name="totalweight" id="totalweight"  ></Input>
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
                                    <Input name="provider" id="provider" value={props.provider} onChange={props.inputHandler}></Input>
                                </InputGroup>
                            </div>

                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-12">
                                <FormGroup>
                                    <Label for="estado">Estado</Label>
                                    <Input type="select" name="estado" id="estado" >
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
                                    <Input type="textarea" name="comments" id="comments" onChange={props.inputHandler}></Input>
                                </InputGroup>
                            </div>
                        </div>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.submitHandler}>Agregar</Button>{' '}
                    <Button color="secondary" onClick={props.toggle}>Volver</Button>

                </ModalFooter>
            </Modal>
        </div>
    );
};


export default AddItemtoBudget;