import React, { Component } from 'react'

export default class VerRequest extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.location.state)}
        <table className="table table-sm">
          <thead>
            <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Urgencia</th>
            <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
            {
              
              this.props.location.state.map((item, index) => {
                return <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.urgency}</td>
                        <td>{item.description}</td>
                      </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

