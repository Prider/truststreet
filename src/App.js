import React, { Component } from 'react';
import './App.css';

// material-ui components
import { Route, Switch, Link } from 'react-router-dom';

import Header from './components/header/header'

import MainPage from './components/landing-page';
import RecognizePage from './components/recognize';
import RegisterPage from './components/register';
import SignInPage from './components/signIn/signIn';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };
  }

  toggleDrawerMenu() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  handleClose() {
    this.setState({
      toggle: false
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={(props) => <MainPage {...props} />} />
          <Route path='/recognize' render={(props) => <RecognizePage {...props} />} />
          <Route path='/register' render={(props) => <RegisterPage {...props} />} />
          <Route path='/signIn' render={(props) => <SignInPage {...props} />} />
          <Route path='**' render={(props) => <MainPage {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;