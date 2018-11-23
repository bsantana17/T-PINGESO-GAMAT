import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';

export default class Requests extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: {} //Deberia responder 
        //idUser :  //Deberia utilizar el Id:User para el servicio rest
      };
  }

  handleGetData() {
    //var urlTest = "http://0.0.0.0:8080/requests/" + this.state.idUser + "/owned";
    var urlTest = "http://0.0.0.0:8080/requests/2/owned";
    axios.get(urlTest)
        .then(res => {
            const datos = res.data;
            this.setState({ datos });
        });
}
  render() {
    return (
      <div>
        <Table hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Solicitante</th>
          <th>Fecha</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr> 
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td> 
            <td><Button color="primary" id="ver">
                    Ver
                </Button>
                <Button color="danger" id="borrar">
                Borrar
                </Button>
                <Button color="primary" id="editar">
                    Editar
                </Button> </td>
            </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><Button color="primary" id="ver">
                    Ver
                </Button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>

            
                <Button color="success" id="pedir">
                    Pedir
                </Button>

                <Button color="warning" id="cotizar">
                    Pedir
                </Button>
            </td>
          </tr>


        </tbody>
      </Table>
      </div>
    )
  }
}
