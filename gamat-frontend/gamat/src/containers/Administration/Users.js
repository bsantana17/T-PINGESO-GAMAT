import React, { Component } from 'react';
import ListUser from './ListUser';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import AddUser from './AddUser';
import AddIcon from '@material-ui/icons/Add';
import { Button } from 'reactstrap';
import Spinner from '../../components/UI/Spinner';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            name: '',
            email: '',
            password: '',
            rol: 0,
            roles: [
                'Manager'
                , 'Approver',
                'Buyer',
                'Driver'],
            rSelected: 1

        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handlerOnAddUser = this.handlerOnAddUser.bind(this)
        this.handlerOnChangeForm = this.handlerOnChangeForm.bind(this)
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this)
        this.handlerOnDeleteUser = this.handlerOnDeleteUser.bind(this)


    }

    onRadioBtnClick(rSelected) {
        this.setState({ rSelected })
    }

    handlerOnAddUser() {
        let newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            role: this.state.roles[this.state.rol]
        }
        this.props.onAddUser(newUser)

        this.setState({
            name: '',
            email: '',
            password: '',
            rol: '',
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

    handlerOnDeleteUser(idUser){
        const res= window.confirm("¿Esta seguro de que desea eliminar este usuario?")
        res && (this.props.onDeleteUser(idUser));
    }
    componentDidMount() {
        this.props.onFetchUsers();
    }
    render() {

        return (
            <div className="container">
                {/* <div className="col-md-11 d-flex justify-content-center">

                    <ButtonGroup>
                        <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Usuarios Gamat</Button>
                        <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Usuarios Externos</Button>

                    </ButtonGroup>
                </div> */}
               
                <div>
                    <div className="d-flex mb-3">
                        <h3>Lista de usuarios</h3>
                        <button className="btn btn-success ml-3" onClick={this.toggleModal}>Agregar <AddIcon /> </button>
                    </div>

                    <AddUser
                        name={this.state.name}
                        email={this.state.email}
                        password={this.state.password}
                        rol={this.state.rol}
                        roles={this.state.roles}
                        onChangeForm={this.handlerOnChangeForm}
                        onAddUser={this.handlerOnAddUser}
                        open={this.state.openModal}
                        toggle={this.toggleModal}
                        />
                </div>
                    
                {this.props.loading ? <Spinner /> :
                    <ListUser 
                    users={this.props.users}
                    onDelete={this.handlerOnDeleteUser} />
                }
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        users: state.user.users,
        loading: state.user.loading

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: () => dispatch(actions.fetchUsers()),
        onAddUser: (newUser) => dispatch(actions.addUser(newUser)),
        onDeleteUser: (idUser) => dispatch(actions.deleteUser(idUser))


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

