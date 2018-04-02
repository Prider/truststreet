import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';

import { BrowserRouter, Route } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import { analytics } from './analytics/index';
import config from './config';

analytics.initialiseGA(config.gaTrackingID);

const store = createStore(
    reducers,
    applyMiddleware(logger, ReduxPromise)
);

const muiTheme = getMuiTheme({
    fontFamily: 'Poppins,sans-serif',
    palette: {
        textColor: Colors.darkBlack,
        primary1Color: Colors.white,
        primary2Color: Colors.indigo700,
        accent1Color: Colors.redA200,
        pickerHeaderColor: Colors.darkBlack,
    },
    appBar: {
      height: 65,
      position: "fixed"
    }
});


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Route path='/' component={App} />
                </MuiThemeProvider>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();