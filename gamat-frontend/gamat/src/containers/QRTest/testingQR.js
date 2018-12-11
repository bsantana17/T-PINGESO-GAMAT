import React, {Component} from 'react';
import QRCode from 'qrcode.react';
import QrReader from 'react-qr-reader';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

/*
TestingQR: Clase de prueba donde se ve el funcionamiento del QR que deberian tener el JefeObra y el Chofer.
             En Lector: Se genera un MODAL con el componente QrReader, que realiza la lectura del QR, y manda al servicio X.
                        >Lee el QR del telefono de la otra persona, modifica en la tabla la fila de revisadoChofer, y 
                        >La vista deberia revisar todo el rato si la solicitud tiene el revisadoChofer y revisadoObra como true (1).
                        >En caso de que si esta, entonces habilita el boton de Confirmar Recepción
*/

class testingQR extends Component {

    constructor(props){
        super(props);
        this.state = {
            texto: "",
            delay: 100,
            result: "",
            modal: false
        };
        this.handleScan = this.handleScan.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleScan(data) {
        if (data) {
          this.setState({
            result: data
          });
        }
      }

    toggle() {
    this.setState({
        modal: !this.state.modal
    });
    }



    render(){
        return(
        <div className="row">
            <div className="col-12 col-md-4">
                <h3>Lector</h3>
                <Button color="danger" onClick={this.toggle}>Lector</Button>
                <Modal  isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}> Ponga la camara para leer el codigo QR</ModalHeader>
                    <ModalBody>
                        <QrReader
                    delay={this.state.delay}
                    onScan={this.handleScan}
                    style={{ width: "100%"}}
                    ></QrReader>
                    </ModalBody>
                </Modal>
                
                
                <p></p>
            </div>
            <div className="col-12 col-md-4">
            <h3>Generador</h3>
            <QRCode value="https://youtu.be/Zf2qOWmKiz0"></QRCode>            
            </div>    

            <div className="col-12 col-md-4">
                <Button color="success" disabled="true"> Confirmar entrega.</Button>

            </div>
        </div>    
               
        );
    }

}
export default testingQR;