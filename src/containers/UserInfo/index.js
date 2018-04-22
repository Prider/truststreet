import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'

import Header from '../../components/header/header';
import TextField from 'material-ui/TextField';
import StepBar from '../../components/stepBar';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


import Gender from './Gender'
import DOB from './DOB'

const Wrapper = styled.div`
  position:fixed;
  top: 30%;
  left: 50%;
  width:30em;
  height:18em;
  margin-top: -9em; /*set to a negative number 1/2 of your height*/
  margin-left: -15em; /*set to a negative number 1/2 of your width*/
  border: 1px solid #ccc;
  background-color: #f3f3f3;
`

class UserInfo extends Component {

  state = {
    finished: false,
    stepIndex: 1,
    stepMax: 5
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
    const contentStyle = {margin: '0 16px'};
    const ButtonStyle = {background: '#00008F'};

    const {finished, stepIndex, stepMax} = this.state;
    return (
      <div>
          <StepBar stepMax={stepMax} currentStep={stepIndex}/>
          <Wrapper>
            <h3>{ stepIndex }</h3>
  
            <Gender />

            <DOB />

            {
            /*<div style={{marginTop: 12}}>
              <FlatButton
                label="Back"
                disabled={stepIndex === 1}
                onClick={this.handlePrev}
                style={{marginRight: 12}}
              />
              <RaisedButton
                style={ButtonStyle}
                label={ stepIndex === 2 ? 'Finish' : 'Next'}
                disabled={stepIndex > stepMax}
                primary={true}
                onClick={this.handleNext}
              />
            </div>
            */
            }

          </Wrapper>
      </div>
    );
  }
}

export default UserInfo;