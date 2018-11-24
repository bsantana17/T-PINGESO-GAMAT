import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Navigation from '../Navigation/Navigation';
import { connect } from 'react-redux';

class Layout extends Component {

    render (){
        return(
            <Aux>
            <Navigation type={this.props.userType} />
            <main className='p-4'> 
                {this.props.children}
            </main>
        </Aux>
        )
    }
}

const mapStateToProps = state =>{
    return {
        userType: state.userType
    };
}

export default connect(mapStateToProps)(Layout);