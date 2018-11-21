import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import {Route}from 'react-router-dom';
import NewRequest from './containers/Request/NewRequest/NewRequest';
import Requests from './containers/Request/Requests/Requests';

class App extends Component {
  render() {
    return (
        <div>
          <Layout>
            <Route path="/new-request" exact component={ NewRequest }></Route>
            <Route path="/requests" exact component={ Requests }></Route>
          </Layout>
        </div>
    );
  }
}

export default App;
