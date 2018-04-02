import React, { Component } from 'react';
import Popup from './Popup';
import './styles.css';

class LoginPopup extends Component {

  handleLogin = () => {
    this.props.signInFacebookUser();
  };

  render() {
    return (
      <Popup {...this.props} style="login-popup">
        <h1>Login to Join The Community</h1>
        <p>Truststreet is a Community to share data. Join us :)</p>
        <button className="facebook-btn" onClick={this.handleLogin}>Login with Facebook</button>
        <p>We'll never post to Facebook without your permission.</p>
      </Popup>
    );
  }
}

export default LoginPopup;
