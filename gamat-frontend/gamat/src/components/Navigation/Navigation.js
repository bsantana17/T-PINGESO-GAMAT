import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
} from 'reactstrap';
import MenuJefeDeObra from './MenuJefeDeObra';
import MenuComprador from './MenuComprador';
import MenuChofer from './MenuChofer'
import MenuAprobador from './MenuAprobador';


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

    let menu = <p>nada</p>
    if(this.props.type === 1){
      menu =  <MenuAprobador/>
    }
    else if(this.props.type === 2){
      menu =  <MenuJefeDeObra/>
    }
    else if(this.props.type === 3){
      menu =  <MenuComprador/>
    }
    else if(this.props.type === 4){
      menu =  <MenuChofer/>
    }

    let loginMenu = <NavLink href="/login">Iniciar Sesión</NavLink>
    if (this.props.type !== null){
      loginMenu = <NavLink href="/logout"> Cerrar Sesión</NavLink>
    }

    return (
      <div>
        <Navbar className="navbar navbar-dark bg-dark" color="dark" light expand="md">
          <NavbarBrand href="/">GAMAT </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {menu}
            <Nav className="ml-auto" navbar>
              {loginMenu}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}