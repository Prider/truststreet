import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import logPageView from '../logPageView';

// material-ui components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import '../../styles/register.css';
import { signInFacebookUser } from '../../actions'; 

// loader styling
const style = {
    container: {
        position: 'absolute',
    },
    refresh: {
        display: 'inline-block',
        position: 'absolute',
    },
    hide: {
        display: 'none',
        position: 'absolute',
    },
};

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            load: false
        };
    }
    handleUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} md={4} mdOffset={4}>
                        <div style={{ 'textAlign': 'center' }}>
                            <h3>Sign In</h3>
                            <br />
                            <div style={{ 'margin': '0 auto!important' }}>
                                <TextField
                                    hintText="provide identification name"
                                    floatingLabelText="Username"
                                    onChange={(event) => this.handleUsername(event)}
                                />
                            </div>
                            <br />
                            <RefreshIndicator
                                className='css-loader'
                                size={80}
                                left={70}
                                top={0}
                                loadingColor="#ADD8E6"
                                status="loading"
                                style={(this.state.load === false) ? style.hide : style.refresh}
                            />
                            <br />
                            <RaisedButton className='register-button' onClick={this.handleFacebookLogin} label="SignIn" primary={true} style={{ 'margin': 16 }} />
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        regData: state.regData
    }
}

export default connect(mapStateToProps, { signInFacebookUser })(logPageView(SignIn));