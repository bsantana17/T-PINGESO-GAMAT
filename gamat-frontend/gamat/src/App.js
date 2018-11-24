import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import {Route}from 'react-router-dom';
import NewRequest from './containers/Request/NewRequest/NewRequest';
import Requests from './containers/Request/Requests/Requests';
import Login from './containers/Login/Login';
import AddBudget from './containers/Budget/AddBudget';

class App extends Component {
  render() {
    return (
        <div>
          <Layout>
            <Route path="/new-request" exact component={ NewRequest }></Route>
            <Route path="/requests" exact component={ Requests }></Route>
            <Route path="/login" exact component={ Login }></Route>
            <Route path="/addbudget" exact component= {AddBudget}></Route>
          </Layout>
        </div>
    );
  }
}

export default App;
