import React from 'react';
import {Button, Card, CardBody, Modal, ModalBody,ModalHeader} from 'reactstrap';

class SeeBudgetforItem extends React.Component {

     /*Funciones basicas para el collapse (de react-strap)*/
     constructor(props) {
        super(props);
        this.state = {
            modal: false,
            disable: false
        }

        this.toggle = this.toggle.bind(this);
        this.disableButton = this.disableButton.bind(this);

      }

    
        /*Funcion que muestra el modal */
        toggle() {
            this.setState({
            modal: !this.state.modal
            });
        }
        /*Funcion que desahibilita el boton*/
        
        disableButton(){
            this.setState({
                disable: !this.state.disable
            });
        }

    render(){
        return (
        <div>
        <Button disabled={this.state.disable} size="sm" color="info" onClick={this.toggle}>Ver</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Ver Item</ModalHeader>
            <ModalBody> 
            <Card>
            <CardBody>
            <div className="row">
              <div className="col-6">
              Precio Unitario: {this.props.datos.price}
              </div>
            
              <div className="col-6">
              Precio Total: WU
              </div>
            </div>
            <div className="row">
              <div className="col-12">
              Estado: E
              </div>
            
              <div className="col-12">
              Provedor: Pr0
              </div>
              <div className="col-12">
              Provedor: Pr0
              </div>
              <div className="col-12">
              Comentarios: C
              </div>
              </div>

            </CardBody>
            </Card>
            </ModalBody>
        </Modal>
          

        </div>
        )   
    }
    
}

export default SeeBudgetforItem;