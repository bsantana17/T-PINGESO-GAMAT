import React, { Component } from 'react'
import ItemToDeliver from './ItemToDeliver'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Spinner from '../../../components/UI/Spinner';



export default class RequestToDeliver extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          open: false
        };
    
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
    this.setState({
        modal: !this.state.modal
    });
    }
    

    render() {

        const itemsRow = 
             <tr>
                <td>Item1</td>
                <td>23</td>
                <td>Retirado</td>
            </tr>
          ;
    
        return (
      <div>
        <h2>Solicitud a entregar: </h2>
        <p>Jefe de Obra: Juanito Perez</p>
        <p>Direccion de obra: calle 123, Maipu</p>

        <h3>Items a Entregar:</h3>
        <div className="row">
            <ItemToDeliver picked={false} />
            <ItemToDeliver picked={true} />
        </div>

        <button className="btn btn-primary" disabled={false} onClick={this.toggle} >Enviar Reporte</button>{' '}
        <Link to='/'><button className="btn btn-secondary">Volver</button></Link>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Enviar Reporte</ModalHeader>
          <ModalBody>
            {this.props.loading ? <Spinner/> : 
              <div>
                Los siguientes items fueron entregados:
                <table className="table table-sm">
                  <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itemsRow}
                    {itemsRow}
                  </tbody>
                </table>
              
            
            </div>
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" disabled={false}>Enviar</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>

      </div>
    )
  }
}
