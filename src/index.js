import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

import store from './AppStore';

const Root = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
