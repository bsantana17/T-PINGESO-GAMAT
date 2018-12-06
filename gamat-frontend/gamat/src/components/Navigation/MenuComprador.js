import React from 'react';
import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import {Link}from 'react-router-dom';
  
  const MenuComprador = () => (

            <Nav className="" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                
                  Solicitudes
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>
                  <Link to='/requests'>
                    Nuevas solicitudes
                </Link>
                  </DropdownItem>
                  <DropdownItem>
                  {/* <Link to='/requests'> */}
                    Solicitudes Pendientes
                    {/* </Link> */}
                  </DropdownItem>
                  <DropdownItem>
                      Historial de Solicitudes
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Usuarios
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>
                    Agregar nuevo usuario
                  </DropdownItem>
                  <DropdownItem>
                    Ver usuarios
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
  )

  export default MenuComprador;