import React from 'react';

const ListUser = (props) => {
    return (
        <div>
    <table className="table table-primary table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Empresa</th>
            <th>Obra</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {props.users.map((user,i)=>(


          <tr key={i}>
            <th scope="row">{i}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td></td>
            <td></td>
            <td>
              <button className="btn btn-sm btn-info">Editar</button>{' '}
              <button onClick={(e)=>props.onDelete(user.idUser)} className="btn btn-sm btn-danger">Borrar</button>
            </td>

          </tr>

            ))}
        </tbody>
      </table>
        </div>
    );
};

export default ListUser;