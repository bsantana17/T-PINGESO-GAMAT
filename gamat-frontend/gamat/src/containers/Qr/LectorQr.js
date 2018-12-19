import React, {Component} from 'react';
import QRCode from 'qrcode.react';
import QrReader from 'react-qr-reader';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class LectorQr extends Component {

    constructor(props){
        super(props);
        this.state = {
            delay: 100,
            result: "",
            modal: false,
            message: "",
            IDrequest: "12345" //IDRequest: Obtiene la ID de la request (enviar codificada).
            
        };
        this.handleScan = this.handleScan.bind(this);
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState({
            modal: !this.state.modal
        });
        }
        handleScan(data) {
            if (data) {
              this.setState({
                
                message: "Lectura Realizada!",
                modal:false
              });
               
              this.props.onValidateData(data);
            }
    
          }
    



    render() {
        return (
            
                 <div className="row">
            <div className="col-12 col-md-4">
                <h3>Lea el codigo Qr del Jefe de Obra para validar la entrega</h3>
                <Button color="danger" onClick={this.toggle}>Abrir Lector </Button>
                <Modal  isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}> Ponga la camara para leer el codigo QR</ModalHeader>
                    <ModalBody>
                        <QrReader
                    delay={this.state.delay}
                    onScan={this.handleScan}
                    style={{ width: "100%"}}
                    ></QrReader>
                    <ModalFooter>
                    {this.state.message} 
                    </ModalFooter>
                    </ModalBody>
                </Modal>
                
                
                
  </div>
            </div>
        );
    }
}

export default LectorQr;