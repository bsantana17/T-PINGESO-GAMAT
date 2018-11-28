import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import {Route, withRouter}from 'react-router-dom';
import NewRequest from './containers/Request/NewRequest/NewRequest';
import Requests from './containers/Request/Requests/Requests';
import RemovedSuccess from './containers/Request/Requests/Requests';
import Login from './containers/Login/Login';
import newBudget from './containers/Budget/NewBudget';
import Logout from './containers/Login/Logout';
import ViewRequest from './containers/Request/ViewRequest/ViewRequest';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
        <div>
          <Layout>
            <Route path="/new-request" exact component={ NewRequest }></Route>
            <Route path="/requests" exact component={ Requests }></Route>
            <Route path="/login" exact component={ Login }></Route>
            <Route path="/new-budget" exact component= {newBudget}></Route>
            <Route path="/logout" exact component={ Logout }></Route>
            <Route path="/view-request/:idRequest" exact component={ ViewRequest }></Route>
            <Route path="/removed-success" exact component={ RemovedSuccess }></Route>

          </Layout>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.userType !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.loginCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
