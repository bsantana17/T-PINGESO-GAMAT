import React from 'react';
import { Button, FormGroup, Label, Form, Input } from 'reactstrap';
import "./Login.css";
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner'

class Login extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: '',
        password: ''
      };
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onLogin(this.state.email,this.state.password);      
    }
    
    validarForm() {
        if( this.state.email.length > 0 && this.state.password.length > 0){
            return false;
        }
        return true;
    }

    render() {

        let form = <Form onSubmit= {this.handleSubmit}>
                        <FormGroup>
                            <Label>Correo Electrónico</Label>
                            <Input
                                autoFocus
                                type="email"
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Contraseña</Label>
                            <Input
                                required
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                                id="password"
                                name="password"
                            />
                        </FormGroup>
                            <Button
                                color="primary"
                                block
                                disabled={this.validarForm()}
                                type="submit"
                            > 
                            Login
                            </Button>
                    </Form>

        if(this.props.loading){
            form = <Spinner />
        }
        
        let errorMessage = null
        if(this.props.error){
            errorMessage = <div className="alert alert-danger text-center">{this.props.error}</div>
        }

        return (
            <div>
                {errorMessage}
                <div className="col-12 col-lg-3 mb-3 center-div">
                    {form}
                </div>
            </div>
        );
    }   

}   

const mapStateLoading = state => {
    return {
        loading: state.loginLoading,
        error: state.loginError
    };
}

const mapDispatchToProps = dispatch => {
    return{
        onLogin: (email,password) => dispatch(actions.login(email,password))
    };
};

export default connect(mapStateLoading,mapDispatchToProps)(Login);