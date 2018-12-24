import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Navigation from '../Navigation/Navigation';
import { connect } from 'react-redux';

class Layout extends Component {

    render (){
        return(
            <Auxiliar>
            <Navigation type={this.props.userType} isLogged={this.props.isLogged} />
            <main className='p-2 pt-3 p-lg-4'> 
                {this.props.children}
            </main>
        </Auxiliar>
        )
    }
}

const mapStateToProps = state =>{
    return {
        userType: state.login.userType,
        isLogged : state.login.userId !== null
    };
}

export default connect(mapStateToProps)(Layout);