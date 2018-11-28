import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

class AddItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: '',
      quantity: '',
      urgency: false,
      description: ''
    };

    this.toggle = this.toggle.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.radioHandler = this.radioHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  inputHandler (e) {
    const {value, name} = e.target;
      this.setState({
        [name] : value
      })
  }

  radioHandler (e) {
    if(e.target.value === "si"){
      this.setState({
        urgency : true
      })
    }
    else if(e.target.value === "no"){
      this.setState({
        urgency : false
      })
    }
  }

  submitHandler(){
    const item = {
      name: this.state.name,
      quantity: this.state.quantity,
      urgency: this.state.urgency,
      description: this.state.description,
      price: null,
      itemState: null
    }
    this.props.onAddItem(item);
    this.setState({
      name: '',
      quantity: '',
      urgency: false,
      description: ''
    })
    return this.toggle()
  }

  validForm() {
    if( this.state.name.length > 0 && this.state.quantity.length > 0){
      // eslint-disable-next-line  
      if(this.state.quantity == parseInt(this.state.quantity, 10)){ // si quantity es un valor entero NO CAMBIAR
        return false;
      }
    }
    return true;
}

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Agregar Item</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Agregar Item</ModalHeader>
          <ModalBody>

              <Form>
                <FormGroup>
                <Label for="name">Nombre</Label>
                <Input type="text" name="name" id="name" onChange={this.inputHandler}/>
                </FormGroup>

                <FormGroup>
                <Label for="quantity">Cantidad</Label>
                <Input type="number" name="quantity" id="quantity" onChange={this.inputHandler}/>
                </FormGroup>

                <FormGroup>
                    <Label for="urgency">Urgencia</Label>
                    <div>
                        <CustomInput type="radio" id="urgency1" name="urgency" label="Si" value="si" checked={this.state.urgency === true}  inline onChange={this.radioHandler}/>
                        <CustomInput type="radio" id="urgency2" name="urgency" label="No" value="no" checked={this.state.urgency === false} inline onChange={this.radioHandler}/>
                    </div>
                </FormGroup>

                <FormGroup>
                    <Label for="description">Descripción</Label>
                    <Input type="textarea" name="description" id="description" onChange={this.inputHandler} />
                </FormGroup>

            </Form>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.submitHandler} disabled={this.validForm()}>Agregar</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Volver</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddItemModal;