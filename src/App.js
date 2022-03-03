import './App.css';
import React from 'react';
import ToDoList from './Components/ToDoList/ToDoList';
import { useObserver } from 'mobx-react';

const App = () => {

  return useObserver(() => ( 
    <div className='App'>
      <ToDoList/>
    </div>
  ));
};

export default App;