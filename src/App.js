import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
// import './App.css';
import Styles from '../src/components/style/styles';
import Fabrics from '../src/components/fabrics/fabrics'

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
          <Route path='/style' component={Styles} exact/>
          <Route path='/fabrics' component={Fabrics} exact/>
        </Switch>
      </div>
    );
  }
}

export default App;
