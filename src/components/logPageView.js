import React, { Component } from 'react'
import { analytics } from '../analytics'

const logPageView = WrappedComponent => {
    return class extends Component {
      componentDidMount() {
        analytics.logPageView(this.props.location.pathname);
      }
  
      componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            analytics.logPageView(this.props.location.pathname);
        }
      }
  
      render() {
        return <WrappedComponent {...this.props} />
      }
    }
  }
  
  export default logPageView
  