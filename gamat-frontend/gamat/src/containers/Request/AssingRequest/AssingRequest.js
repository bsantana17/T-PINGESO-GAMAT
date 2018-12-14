import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import Spinner from '../../../components/UI/Spinner';
import { Table, Button ,FormGroup,Label,Input} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';


class AssingRequest extends Component {
    constructor(props){
        super(props)
        this.state={
            indice:0,
            driver:0
        }

        this.onChangeDriver=this.onChangeDriver.bind(this);
        this.assignDriver=this.assignDriver.bind(this);

    }

    componentWillMount(){
        let indiceRequest =  this.props.requests.findIndex(
            (req)=>req.idRequest == this.props.match.params.idRequest);

            this.props.onRefreshDriver();
            console.log(this.props.drivers)
        this.setState({
            indice:indiceRequest
        })
    }

    onChangeDriver(e){
        const value = e.target.value;
    this.setState({
      driver:value
    })
    }
    assignDriver(){
        let idDriver=this.props.drivers[this.state.driver].idUser;
        let idRequest=this.props.requests[this.state.indice].idRequest;
        this.props.onAssingDriver(idDriver,idRequest)
    }

    render() {
        return (
            <div>
                 <div>
                 {this.props.assingDriver && <Redirect to='/requests' />}
        <Link to={'/requests'}>
           <Button color="secondary">Volver </Button>
        </Link>
        {console.log(this.props.location.state)}
        <table className="table table-sm">
          <thead>
            <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Urgencia</th>
            <th>Descripcion</th>
            <th>Observacion</th>
            </tr>
          </thead>
          <tbody>
            {
              
              this.props.requests[this.state.indice].items.map((item, index) => {
                return <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.urgency}</td>
                        <td>{item.description}</td>
                        <td>{item.observation}</td>
                      </tr>
              })
            }
          </tbody>
        </table>
      </div>
      <div>

      <FormGroup>
            <Label for="chofer">Chofer</Label>
            <Input value={this.state.driver} onChange={this.onChangeDriver} type="select" name="chofer" id="chofer" >
              {this.props.drivers.map((driver, i) => (
                  
                  <option key={i} value={i}>{driver.name}</option>
                  
                  ))}
              
            </Input>
          </FormGroup>
          <Button color="success" onClick={this.assignDriver}>Asignar</Button>

                  </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        requests: state.request.requests,
        drivers: state.request.drivers,
        assingDriver: state.request.assingDriver
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRefreshDriver: () => dispatch(actions.fetchDriver()),
        onAssingDriver: (idDriver,idRequest) => dispatch(actions.assingDriver(idDriver,idRequest))
        

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssingRequest);