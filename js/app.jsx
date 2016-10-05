import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'rxjs';
	
import store from './store';
import Application from './components/Application';

import '../node_modules/normalize.css/normalize.css';
import '../assets/css/general.css';
import '../assets/css/itemManagementPage.css';
import '../assets/css/modals.css';

ReactDOM.render((
  <Provider store={store}>
    <Application/>
  </Provider>
), document.getElementById('app'));
