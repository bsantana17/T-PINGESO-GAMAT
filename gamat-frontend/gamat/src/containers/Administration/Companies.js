import React, { Component } from 'react';
import ListCompany from './ListCompany';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import AddCompany from './AddCompany';
import AddBuilding from './AddBuilding';
import AddIcon from '@material-ui/icons/Add';
import Spinner from '../../components/UI/Spinner';

class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            name: '',
            rut:'',
        }

        this.toggleModal = this.toggleModal.bind(this)
        this.handlerOnAddCompany = this.handlerOnAddCompany.bind(this)
        this.handlerOnChangeForm = this.handlerOnChangeForm.bind(this)
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this)

    }

    onRadioBtnClick(rSelected) {
        this.setState({ rSelected })
    }

    handlerOnAddCompany() {
        let newCompany = {
            name: this.state.name,
        }
        this.props.onAddCompany(newCompany)

        this.setState({
            name: '',
            openModal: false
        })
    }

    handlerOnChangeForm(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    toggleModal() {
        this.setState({
            openModal: !this.state.openModal
        })
    }
    componentDidMount() {
        // this.props.onFetchUsers();
    }
    render() {

        return (
            <div className="container">
                <div>
                    <div className="d-flex mb-3">
                        <h3>Lista de empresas</h3>
                        <button className="btn btn-success ml-3" onClick={this.toggleModal}>Agregar <AddIcon /> </button>
                    </div>

                    <AddCompany
                        name={this.state.name}
                        rut={this.state.rut}
                        onChangeForm={this.handlerOnChangeForm}
                        onAddCompany={this.handlerOnAddCompany}
                        open={this.state.openModal}
                        toggle={this.toggleModal}
                        />

                    
                </div>
                    
                {this.props.loading ? <Spinner /> :
                    <ListCompany companies={'nada'} />
                }
                
                <AddBuilding
                        name={'nombre de la obra'}
                        address={'direccion de la obra'}
                        onChangeForm={this.handlerOnChangeForm}
                        open={this.state.openModal}
                        toggle={this.toggleModal}
                        />
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        loading: state.user.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Companies);

