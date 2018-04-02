const GA_TRACKING_ID = process.env.GA_TRACKING_ID || 'UA-102907230-1'
const config = {
  gaTrackingID: GA_TRACKING_ID,
  appName: process.env.appName || 'TrustStreet',
  appVersion: process.env.appVersion || '0.1.0'
}

export default Object.freeze(Object.assign({}, config))