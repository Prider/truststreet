import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'

import Header from '../../components/header/header';
import TextField from 'material-ui/TextField';


import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';

import Gender from './Gender'
import DatePicker from 'material-ui/DatePicker';
import MaritalStatus from './MaritalStatus';

import './styles.css'


function disableWeekends(date) {
  return date.getDay() === 0 || date.getDay() === 6;
}

class UserInfo extends Component {

  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      disableYearSelection: false,
    };
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStep = (stepIndex) => {
    if(stepIndex <= this.state.stepMax){
        const text = `National ${stepIndex} ID :`;
        return (
          <Grid fluid>
            <TextField
              hintText={text}
              errorText="This field is required"
              floatingLabelText="National ID"
            />
          </Grid>
        )
    }
  }


  render() {
    const DOBStyles = {
      "font-size": "16px",
      "width": "256px",
      "display": "inline-block",
      "position": "relative",
      "background-color": "transparent",
      "font-family": "Poppins, sans-serif",
      "transition": "height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
      "cursor": "auto"
    }
    return (
      <div className="container">
        <h1>Your Info</h1>
        <form className="cf">

          <section className="plan cf">
            <span className="monthly-label four col">Gender:</span>
            <Gender className="monthly-label four col" />
          </section>

          <section className="plan cf">
            <span className="monthly-label four col">DOB:</span>
            <div>
            {
              // <DatePicker
              //   style={DOBStyles}
              //   floatingLabelText="Your Date of Birth"
              //   autoOk={this.state.autoOk}
              //   minDate={this.state.minDate}
              //   maxDate={this.state.maxDate}
              // />
            }

            </div>
          </section>

          <section className="payment-type cf">
            <span className="monthly-label four col">Material Status:</span>
            <MaritalStatus />
          </section>	

        </form>
      </div>
    );
  }
}

export default UserInfo;