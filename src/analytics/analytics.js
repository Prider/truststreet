//@flow
import ReactGA from 'react-ga'
import config from '../config'

const analyticsFn = () => {
  const initialiseGA = (trackingID, options = {}) => {
    ReactGA.initialize(trackingID, options)
    ReactGA.set({
      appName: config.appName,
      appVersion: config.appVersion,
      appVersion: config.appVersion
    })
  }

  const logPageView = (location) => {
    ReactGA.set({ page: location})
    ReactGA.pageview(location)
  }

  const sendCustomEvent = (args) => {
    ReactGA.ga('send', args)
  }
  return {
    initialiseGA,
    logPageView,
    sendCustomEvent
  }
}


export const analytics = analyticsFn()
