import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import './index.css';

console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// 3.  store.js -> import store from './redux/store';
// console.log(store) -> методы
// - dispatch(action) - экшины доставляет в reduser
// - getState() - ссылка на свойства state
