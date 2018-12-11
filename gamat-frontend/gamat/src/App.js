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
import RequestToAprove from './containers/Request/RequestsToApprove/RequestToAprove';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import ApproveBudget from './containers/Request/ApproveBudget/ApproveBudget';
import testingQR from './containers/QRTest/testingQR';


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
            <Route path="/new-budget/:idRequest" exact component= {newBudget}></Route>
            <Route path="/logout" exact component={ Logout }></Route>
            <Route path="/view-request/:idRequest" exact component={ ViewRequest }></Route>
            <Route path="/approve-request/:idRequest" exact component={RequestToAprove }></Route>
            <Route path="/approve-budget/:idRequest" exact component={ApproveBudget }></Route>
            <Route path="/removed-success" exact component={ RemovedSuccess }></Route>
            <Route path="/testingqr" exact component={ testingQR}></Route>
           
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
