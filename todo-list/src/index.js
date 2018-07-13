import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList.js';
import registerServiceWorker from './registerServiceWorker';

var toDos = ["Get a job", "Be good at the job", "Try not to cry", "Cry"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root'));
registerServiceWorker();
