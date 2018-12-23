import React from 'react';
import {Table} from 'reactstrap';

const ListUser = (props) => {
    return (
        <div>
    <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
            {props.users.map((user,i)=>(


          <tr key={i}>
            <th scope="row">{i}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>

            ))}
        </tbody>
      </Table>
        </div>
    );
};

export default ListUser;