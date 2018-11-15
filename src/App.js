import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
// import './App.css';
import Styles from '../src/components/style/styles';
import Fabrics from '../src/components/fabrics/fabrics';
import Header from '../src/components/header/header'
import SideBar from './components/sideBar/sideBar';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SideBar />
      {/* <Switch>
          <Route path='/style' component={Styles} exact/>
          <Route path='/fabrics' component={Fabrics} exact/>
        </Switch> */}
      </div>
    );
  }
}

export default App;
