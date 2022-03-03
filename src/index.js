import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToDoProvider } from './Context/ToDoContext';

ReactDOM.render(
  <React.StrictMode>
    <ToDoProvider>
      <App />
    </ToDoProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);