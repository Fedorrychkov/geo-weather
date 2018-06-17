import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './AppStore';

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
