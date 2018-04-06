import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  -webkit-padding-start: 0;
  height: 4px;

  > li {
    &:not(:first-child) {
      margin-left: 2px;
    }
    &:not(:last-child) {
      margin-right: 2px;
    }
    &.active {
      background-color: #00008F;
    }
  }
`
const Item = styled.li`
  display: inline-block;
  width: 100%;
  background-color: #A7C4E8;
`

const StepBar = ({ ...props}) => {
  const renderSteps = () => {
    let { maxSteps = 5, currentStep = 1} = props;
    let stepItem = [];
    for(let i=1; i <= maxSteps; i++) {
        stepItem.push(
          <Item key={i} className={currentStep == i ? 'active': ''} />
        )
    }
    return (
      <Container>{stepItem}</Container>
    )
  } 
  return (
    <div>
    {renderSteps()}
    </div>
  )
}
export default StepBar;
