import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import match from './partidas';
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={match}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
