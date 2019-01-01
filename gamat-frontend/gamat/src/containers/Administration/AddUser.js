import React from 'react';
import {Modal,ModalBody,ModalHeader,ModalFooter,
    Form,FormGroup,Label,
    Input,Button} from 'reactstrap'

const AddUser = (props) => {
    return (
        <div>
            
        <Modal isOpen={props.open} toggle={props.toggle} >
          <ModalHeader 
            toggle={props.toggle}> 
           Agregar Usuario 
          </ModalHeader>
          <ModalBody>

              <Form>
                <FormGroup>
                <Label for="name">Nombre</Label>
                <Input value={props.name} type="text" name="name" id="name" onChange={props.onChangeForm}/>
                </FormGroup>

                <FormGroup>
                <Label for="quantity">Email</Label>
                <Input value={props.email} type="Email" name="email" id="email" onChange={props.onChangeForm}/>
                </FormGroup>

                <FormGroup>
                <Label for="quantity">Password</Label>
                <Input value={props.password} type="text" name="password" id="password" onChange={props.onChangeForm}/>
                </FormGroup>

                <FormGroup>
                    <Label for="rol">Rol</Label>
                    <Input value={props.rol} type="select" name="rol" id="rol" onChange={props.onChangeForm}>
                        {props.roles.map((r,i)=>(
                            <option key={i} value={i}>{r}</option>
                        ))}
                    </Input>
                </FormGroup>
                
                ESTO SOLO SE DEBE MOSTRAR SI EL ROL SELECCIONADO ES MANAGER O APPROVER:
                <FormGroup>
                    <Label for="building">Obra</Label>
                    <Input value="" type="select" name="building" id="building" onChange={props.onChangeForm}>
                        <option>Obra 1</option>
                        <option>Obra 2</option>
                        <option>Obra 3</option>
                    </Input>
                </FormGroup>




            

            </Form>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={props.onAddUser}>
           Agregar</Button>{' '}
            <Button color="secondary" onClick={props.toggle}>Volver</Button>
          </ModalFooter>
        </Modal>
      </div>
        
    );
};

export default AddUser;