import React from 'react';

const ListCompany = (props) => {
    return (
        <div>
    <table className="table table-primary table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Rut</th>
            <th>Obras</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {/* {props.users.map((user,i)=>( */}


          <tr key={1}>
            <th scope="row">{1}</th>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="btn btn-sm btn-info">Editar</button>{' '}
              <button className="btn btn-sm btn-danger">Borrar</button>{' '}
              <button className="btn btn-sm btn-success">Agregar Obra</button>{' '}
              <button className="btn btn-sm btn-danger">Borrar Obra</button>{' '}
            </td>

          </tr>

            {/* ))} */}
        </tbody>
      </table>
        </div>
    );
};

export default ListCompany;