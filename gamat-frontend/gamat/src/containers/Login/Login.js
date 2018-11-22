import React from 'react';
import { Button, FormGroup, Label, Form, Input } from 'reactstrap';
import "./Login.css";

export default class Login extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: ""
      };
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
    
      handleSubmit = event => {
        
        //var Urlapi = "http://pingeso-back.herokuapp.com/buildings/";
        var urlTest = "http://0.0.0.0:8080/users/login";
        
        

        console.log("El state es: " + JSON.stringify(this.state));
        fetch(urlTest,{
            method: 'POST',
            body: this.state
        })
            .then(function(response){
                console.log("Work, el json es:" + response);
                window.alert("La respuesta es: " + response);
            })
            .catch(function(error){
                console.log("Fail: El codigo es:" + error);

            });
            //event.preventDefault();
            
      }
    

    validarForm() {
        if( this.state.email.length > 0 && this.state.password.length > 0 && this.state.password < 20){
            return 1;
        }
        return 0;
      }

        render() {
        return (
            <div className="col-12 col-lg-3 mb-3 center-div">
            
            <Form onSubmit= {this.handleSubmit}>
                <FormGroup>
                <Label>Correo Electronico</Label>
                <Input
                    autoFocus
                    type="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                />
                
                </FormGroup>
                <FormGroup>
                <Label>Password</Label>
                <Input
                    required
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    id="password"
                />
                </FormGroup>
                <Button
                color="primary"
                block
                disabled={this.validarForm() === 0}
                type="submit"
                >
                Login
                </Button>
            </Form>
            </div>
        );
        }

}
