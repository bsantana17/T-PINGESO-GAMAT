import React from 'react';
import {Button} from 'reactstrap';

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
            /*this.setState({
            modal: !this.state.modal
            });*/
            this.props.funcion();
        }
        /*Funcion que desahibilita el boton*/
        
        disableButton(){
            this.setState({
                disable: !this.state.disable
            });
        }

    render(){
        return (
        <div style={{display: "inline-block"}}>
        <Button disabled={this.state.disable} size="sm" color="info" onClick={this.toggle}>Ver</Button>

        </div>
        )   
    }
    
}

export default SeeBudgetforItem;