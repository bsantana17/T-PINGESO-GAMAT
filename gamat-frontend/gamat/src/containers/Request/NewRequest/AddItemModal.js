import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';

class AddItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
                <Input type="name" name="name" id="name"/>
                </FormGroup>

                <FormGroup>
                <Label for="quantity">Cantidad</Label>
                <Input type="quantity" name="quantity" id="quantity"/>
                </FormGroup>

                <FormGroup>
                    <Label for="urgency">Urgencia</Label>
                    <div>
                        <CustomInput type="radio" id="urgency1" name="urgency" label="Si" inline />
                        <CustomInput type="radio" id="urgency2" name="urgency" label="No" inline/>
                    </div>
                </FormGroup>

                <FormGroup>
                    <Label for="description">Descripción</Label>
                    <Input type="textarea" name="text" id="description" />
                </FormGroup>

            </Form>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Agregar</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Volver</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddItemModal;