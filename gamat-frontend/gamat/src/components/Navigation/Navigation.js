import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
} from 'reactstrap';
import MenuJefeDeObra from './MenuJefeDeObra'


export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {

    return (
      <div>
        <Navbar className="navbar navbar-dark bg-dark" color="dark" light expand="md">
          <NavbarBrand href="/">GAMAT </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <MenuJefeDeObra/>
            <Nav className="ml-auto" navbar>
                <NavLink href="/components/">Cerrar Sesión</NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}