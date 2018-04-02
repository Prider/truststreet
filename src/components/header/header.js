import React, { Component } from 'react';

import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import firebase from 'firebase';
import fireApp from '../../services/firebase';

import LoginPopup from '../signIn/login';

import { registerUser } from '../../actions';

import {
    red500,
    indigoA700
  } from 'material-ui/styles/colors';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInStatus: false,
            popupStatus: false,
            userProfile: null
        };
    //    this.initSession();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userProfile !== this.state.userProfile) {
          this.updateUserProfile(nextProps.userProfile );
          this.updateSignInStatus(true);
        }
    }

    updateSignInStatus(status) {
        this.setState({
            signInStatus: status
        });
    }

    updateUserProfile(user) {
        this.setState({
            userProfile: user
        });
    }

    showPopup = () => {
        this.setState({popupStatus: true});
    };
    
    hidePopup = () => {
        this.setState({popupStatus: false});
    }

    handleFacebookLogin = () => {
        this.signInFacebookUser();
    }

    initSession = () => {
        fireApp.auth().onAuthStateChanged((user) => {
            if(user){
                this.updateSignInStatus(true);
                this.updateUserProfile(user);
            }
        });
    }
    signInFacebookUser = () => {
        let provider = new firebase.auth.FacebookAuthProvider()
        fireApp.auth().signInWithPopup(provider).then((result) => {
            this.hidePopup();
            const { user } = result;
            const newuser = {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                phoneNumber: user.phoneNumber
            }
            this.props.registerUser(newuser);
          });
    }
    signOutFacebookUser = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }
    renderElementRight() {
        const styles = {
            button: {
              margin: 3,
              color: 'rgb(244, 67, 54)'
            }
        };
        return (
            <div>
                <RaisedButton
                    label="Login"
                    backgroundColor={indigoA700}
                    labelPosition="before"
                    style={styles.button}
                    onClick={this.showPopup}
                    >
                </RaisedButton>
                <LoginPopup
                    status={this.state.popupStatus}
                    hidePopup={this.hidePopup}
                    signInFacebookUser={this.signInFacebookUser}
                />
            </div>
        );
    }
    renderUserProfile() {
        const photoURL = this.state.userProfile
                ? this.state.userProfile.photoURL 
                : `img/hieu.jpeg`;
        return (
            <div>
                <IconMenu
                    iconButtonElement={
                    <IconButton>
                        <Avatar
                        src={photoURL}
                        size={30}
                        style={{ margin: 5}}
                        />
                    </IconButton>
                    }
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                <MenuItem primaryText="Settings" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" onClick={() => this.signOutFacebookUser()}/>
                </IconMenu>
            </div>
        );
    }
    render() {
        return (
            <div>
                <AppBar
                className='app-bar'
                title={
                    <Avatar backgroundColor={indigoA700}>T</Avatar>
                }
                showMenuIconButton={false}
                style= {{position: 'fixed' }}
                iconElementRight={
                    this.state.signInStatus 
                    ? this.renderUserProfile() 
                    : this.renderElementRight()
                }
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userProfile: state.UserProfile
    }
}

export default connect(mapStateToProps, { registerUser })(Header);