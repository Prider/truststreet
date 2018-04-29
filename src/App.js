import React, { Component } from 'react';
import './App.css';

import { Route, Switch, Link } from 'react-router-dom';

import Header from './components/header/header'
import MainPage from './components/landing-page';
import RecognizePage from './components/recognize';
import RegisterPage from './components/register';
import SignInPage from './components/signIn/signIn';

import UserInfo from './containers/UserInfo';
import Dashboard from './containers/Dashboard';


import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import Divider from "material-ui/Divider";
import FlatButton from "material-ui/FlatButton";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }
  componentDidMount() {
    const element = document.getElementById('splash-screen')
    if (element && document.body) {
      document.body.removeChild(element)
    }
  }

  render() {

    const iconStyle = {
      display: "inline-flex",
      verticalAlign: "middle"
    };

    return (
      <div>
        <Switch>
          <Route exact path='/' render={(props) => <MainPage {...props} />} />
          <Route path='/recognize' render={(props) => <RecognizePage {...props} />} />
          <Route path='/register' render={(props) => <RegisterPage {...props} />} />
          <Route path='/signIn' render={(props) => <SignInPage {...props} />} />
          <Route path='/kyc' render={(props) => {
            return (<UserInfo {...props} />)
          }} />
          <Route path='/dashboard' render={(props) => <Dashboard {...props} />} />
          <Route path='**' render={(props) => <MainPage {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
