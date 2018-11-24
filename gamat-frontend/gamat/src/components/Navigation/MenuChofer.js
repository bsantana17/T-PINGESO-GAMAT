import React from 'react';
import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import {Link}from 'react-router-dom';

  const MenuAprobador = () => (

            <Nav className="" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Solicitudes
                </DropdownToggle>
                <DropdownMenu left='true' >
                <DropdownItem>
                    <Link to='/new-request'>Ver Solicitudes</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to=''>Historial de Solicitudes </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
  )

  export default MenuAprobador;