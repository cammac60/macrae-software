import React from 'react';
import ReactDOM from 'react-dom';
import './Index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

const router = (
  <BrowserRouter>
    <App text='hey'/>
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
