import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import {Route}from 'react-router-dom';
import NewRequest from './containers/Request/NewRequest/NewRequest';
import Requests from './containers/Request/Requests/Requests';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Route path="/new-request" exact component={ NewRequest }></Route>
            <Route path="/requests" exact component={ Requests }></Route>
            
          </Layout>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
