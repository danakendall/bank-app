import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Login from './components/Login/Login'
import Accounts from './components/Accounts/Accounts'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route component={Login} path='/' exact/>
          <Route component={Accounts} path='/accounts'/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
