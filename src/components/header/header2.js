import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import './styles.css'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <div className="header">
                    <div className="top">
                    <svg className="logo" width="172px" height="55px" viewBox="0 0 172 55" fill="#fff">
                        <text x="5px" y="35px">Logo</text>
                    </svg>
                    <div className="right-wrapper">
                        <div className="app-name-wrapper">
                        <svg className="app-icon" width="17px" height="17px" viewBox="0 0 18 18" fill="#fff">
                            <path d="M9,18c5,0,9-4,9-9s-4-9-9-9S0,4,0,9S4,18,9,18z M14.8,9.8c-0.1,0.1-0.3,0.2-0.5,0.2s-0.4-0.1-0.5-0.2l-0.2-0.2v3.7h-3V9.5h-3v3.8h-3V9.6L4.3,9.8c-0.3,0.3-0.8,0.3-1.1,0s-0.3-0.8,0-1.1L9,3l5.8,5.8C15.1,9.1,15.1,9.5,14.8,9.8z"/>
                        </svg>
                        <span className="app-name">home</span>
                        </div>
                        <div className="profile-pic">
                        <div className="picture"></div>
                        <div className="profile-name">
                            Ivan Sakoman
                        </div>
                        </div>
                        
                        <svg className="app-menu" width="16px" height="16px" viewBox="0 0 26.75 26.75" fill="#fff">
                        <circle cx="3.25" cy="3.25" r="3.25"/>
                        <circle cx="13.38" cy="3.25" r="3.25"/>
                        <circle cx="23.5" cy="3.25" r="3.25"/>
                        <circle cx="3.25" cy="13.38" r="3.25"/>
                        <circle cx="13.38" cy="13.38" r="3.25"/>
                        <circle cx="23.5" cy="13.38" r="3.25"/>
                        <circle cx="3.25" cy="23.5" r="3.25"/>
                        <circle cx="13.38" cy="23.5" r="3.25"/>
                        <circle cx="23.5" cy="23.5" r="3.25"/>
                        </svg>
                    </div>
                    </div>
                </div>        
            </div>
        );
    }
}

export default Header