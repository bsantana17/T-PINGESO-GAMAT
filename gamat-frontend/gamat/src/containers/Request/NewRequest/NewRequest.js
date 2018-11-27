import React, { Component } from 'react';
import AddItemModal from './AddItemModal';
import ItemCard from './ItemCard';
//import { requests } from '../../../requests.json';
import { connect } from 'react-redux';
import Spinner from '../../../components/UI/Spinner';
import * as actions from '../../../store/actions/index';
import { Link, Redirect } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


class NewRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      observation: '',
      items : []
    };

    this.toggle = this.toggle.bind(this);
    this.inputHandler = this.inputHandler.bind(this);

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

  addItemHandler (item){
    this.setState({
      items: this.state.items.concat(item),
    })
  }

  sendHandler = (event) => {
    const requestData = {
      observation: this.state.observation,
      items: this.state.items
    }
    this.props.onSendRequest(requestData, this.props.userId);
    
  }

  render() {

    let redirect = null
    if (this.props.requestSent){
        redirect = <Redirect to='/requests' />
    }

    const items = this.state.items.map((item, index) => {
      return <ItemCard 
                key={index}
                number={index} 
                name={item.name} 
                quantity={item.quantity} 
                description={item.description} 
                urgency={item.urgency} 
                />
    });

    const itemsRow = this.state.items.map((item, index) => {
      return <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
    });

    return (
      <div>
        <div className="d-flex">
          <div className="mr-3"><h3>Nueva solicitud</h3></div>
          <div><AddItemModal onAddItem={(e) => this.addItemHandler(e)}/></div>
        </div>
        
        <h4>Items agregados:</h4>
        <div className="row">
            {items}
        </div>

        <button className="btn btn-primary" disabled={!this.state.items.length > 0} onClick={this.toggle} >Enviar Solicitud</button>{' '}
        <Link to='/'><button className="btn btn-secondary">Volver</button></Link>
       
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Enviar Solicitud</ModalHeader>
          <ModalBody>
            {redirect}
            {this.props.loading ? <Spinner/> : 
              <div>
                Los items a enviar son los siguientes:
                <table className="table table-sm">
                  <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itemsRow}
                  </tbody>
                </table>
              
            
              <Form>
                <FormGroup>
                    <Label for="description">Agregar observaciones (opcional): </Label>
                    <Input type="textarea" name="observation" id="description" onChange={this.inputHandler} />
                </FormGroup>

            </Form>
            </div>
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" disabled={this.props.loading} onClick={this.sendHandler} >Enviar</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    requestSent: state.request.requestSent,
    loading: state.request.loading,
    userId : state.login.userId,
  };
}
const mapDispatchToProps = dispatch => {
  return{
    onSendRequest: (requestData, userId) => dispatch(actions.addRequest(requestData, userId))  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRequest);