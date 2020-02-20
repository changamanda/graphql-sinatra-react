import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

window.onload = () => {
  ReactDOM.render(<List />, document.getElementById('container'));
};