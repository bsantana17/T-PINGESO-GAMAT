import React from 'react';
// import { Component } from 'react';
import {
    InputGroup, InputGroupText, InputGroupAddon, Input,
    Button, Form, FormGroup, Label,
    Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

const EditRequestInfo = props => {
    return (
        <div style={{ display: "inline-block" }}>
            <Modal isOpen={props.open} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Editar Solicitud</ModalHeader>
                <ModalBody>
                    <Form>
                        <div className="row">
                            <div className="col-md-12">
                                <FormGroup>

                                    <Label for="">Hora de entrega</Label>
                                    <InputGroup>
                                        <Input type="text" name="" id=""></Input>
                                    </InputGroup>
                                </FormGroup>
                            </div>
                            <div className="col-md-12">
                                <FormGroup>
                                    <Label for="">Condición de pago</Label>
                                    <InputGroup>
                                        <Input type="text" name="" id=""></Input>                                    
                                    </InputGroup>
                                </FormGroup>
                            </div>
                            <div className="col-md-12">
                                <FormGroup>
                                    <Label for="">Vence</Label>
                                    <InputGroup>
                                        <Input type="text" name="" id=""></Input>                                    
                                    </InputGroup>
                                </FormGroup>
                            </div>
                        </div>
        
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.submitHandler}>Editar</Button>{' '}
                    <Button color="secondary" onClick={props.toggle}>Cancelar</Button>

                </ModalFooter>
            </Modal>
        </div>
    );
};


export default EditRequestInfo;