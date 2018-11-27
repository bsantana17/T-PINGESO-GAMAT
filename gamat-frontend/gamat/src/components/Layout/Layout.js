import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Navigation from '../Navigation/Navigation';
import { connect } from 'react-redux';

class Layout extends Component {

    render (){
        return(
            <Auxiliar>
            <Navigation type={this.props.userType} />
            <main className='p-4'> 
                {this.props.children}
            </main>
        </Auxiliar>
        )
    }
}

const mapStateToProps = state =>{
    return {
        userType: state.login.userType
    };
}

export default connect(mapStateToProps)(Layout);