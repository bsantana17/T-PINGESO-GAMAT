import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import {
    InputGroup, InputGroupText, InputGroupAddon, Input,
    Button, Form, FormGroup, Label,
    Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';


class Options extends Component {
    constructor(props) {
        super(props);
        this.state={
            porcentajeDespacho:0,
            porcentajeAdministracion:0,
            unidades:[]
        }
        this.onChangeForm=this.onChangeForm.bind(this);
        this.updateOption=this.updateOption.bind(this);
    }

 

    componentDidMount() {
    console.log("AAA")
       this.props.onFetchOptions();
       this.setState({
           porcentajeAdministracion:this.props.option.administracion,
           porcentajeDespacho:this.props.option.despacho
       })
     

    }

    onChangeForm(e){
        let value= e.target.value
        let name= e.target.name
        this.setState({
            [name]:value
        })
    }

   updateOption(){
       let newOptions={
           id:1,
           administracion:this.state.porcentajeAdministracion,
           despacho:this.state.porcentajeDespacho
       }
       this.props.onUpdateOptions(newOptions)
   }

    render() {
        return (
            <div>
                    <table className="table col-md-5 table-sm table-primary table-responsive-lg w-100">
            <thead>
                <tr>
                   
                    <th>Opcion</th>
                    <th>Valor</th>
                   
                </tr>
            </thead>
            <tbody>

                {/*Aqui, la funcion de arriba deberia guardar todo en testrequest, y mostrarlo.*/}
               
                    <tr key={0}>
                      
                        <td>Procentaje Administracion(%)</td>
                        <td><Input  name="porcentajeAdministracion" onChange={this.onChangeForm} value={this.state.porcentajeAdministracion} type="number"  min="1" max="100">
                        
                        
                        </Input></td>
                      

                    </tr>
                    <tr key={1}>
                      
                        <td>Procentaje Despacho(%)</td>
                        <td><Input name="porcentajeDespacho" onChange={this.onChangeForm} value={this.state.porcentajeDespacho} type="number"  min="1" max="100">
                        
                        
                        </Input></td>
                      

                    </tr>
                


               
            </tbody>
        </table>
        <Button  onClick={this.updateOption} color="success">Guardar </Button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        option: state.request.options,
        // loading: state.provider.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOptions: () => dispatch(actions.fetchOptions()),
        onUpdateOptions: (option) => dispatch(actions.updateOptions(option)),
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);



