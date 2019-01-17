import React from 'react';

import {Modal,ModalBody,ModalHeader,ModalFooter,
    Form,FormGroup,Label,
    Input,Button,Table} from 'reactstrap'
import Spinner from '../../../components/UI/Spinner';

const LogModal = (props) => {
    return (
        <div>
        <Modal isOpen={props.open} toggle={props.toggle} >
          <ModalHeader 
            toggle={props.toggle}> 
           Historial de Solicitud
          </ModalHeader>
          <ModalBody>
             {props.loading ?
             <Spinner/>
             :
          <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Fecha</th>
            <th>Detalle</th>
            
          </tr>
        </thead>
        <tbody>
            {props.logs.map((log,i)=>(
                
                
                
                <tr key={i}>
            <th scope="row">{i}</th>
            <td>{log.date}</td>
            <td>{log.details}</td>
           
          </tr>
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

export default LogModal;