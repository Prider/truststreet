import React, { Component } from 'react';
import DateTime from 'react-datetime';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { handleSelectDOB } from './action';


const DateContent = styled.div`
  width: 85%;
  float: right;
  margin-top: 13px;
  margin-right: 25px;
`

const DOB = props => {
    return (
      <DateContent>
        <DateTime
          className="date-time__content"
          locale="en"
          dateFormat={'DD/MM/YYYY'}
          defaultValue={props.date === undefined ? new Date() : props.date}
          timeFormat={false}
          onChange={e => props.onChangeDOB(e._d)}
        />
      </DateContent>
    )
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onChangeDOB: date => {
        dispatch(handleSelectDOB(date))
      }
    }
  }
  
  const mapStateToProps = state => {
    return {
      date: state.user.dob.date
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(DOB)
