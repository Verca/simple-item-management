//require("babel-polyfill");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'rxjs';
	
//bootstap file must file relative to index.html
import './polyfills';
import store from './store';
import Application from './components/Application';

import '../node_modules/normalize.css/normalize.css';
import '../assets/styl/itemManagementPage.styl';

ReactDOM.render((
  <Provider store={store}>
    <Application/>
  </Provider>
), document.getElementById('app'));
