import React from 'react';

import {Modal,ModalBody,ModalHeader,ModalFooter,
    Form,FormGroup,Label,
    Input,Button,Table} from 'reactstrap'
import Spinner from '../../components/UI/Spinner';

const ListBuildingApprover = (props) => {
    return (
        <div>
        <Modal isOpen={props.open} toggle={props.toggle} >
          <ModalHeader 
            toggle={props.toggle}> 
           Lista de Obras
          </ModalHeader>
          <ModalBody>
             {props.loading ?
             <Spinner/>
             :
          <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Direccion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {props.buildings.map((building,i)=>(
                
                <FormGroup>
                <Label for="exampleCheckbox">Checkboxes</Label>
                <div>
                  <CustomInput type="checkbox" checked id="exampleCustomCheckbox" label={building.address} />
               
                </div>
              </FormGroup>
                
        
            ))}
         
        </tbody>
      </Table>
        } 
         

          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={props.onAddUser}>
           Agregar</Button>{' '} */}
            <Button color="secondary" onClick={props.toggle}>Volver</Button>
          </ModalFooter>
        </Modal>
        </div>
    );
};

export default ListBuildingApprover;