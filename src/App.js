import React from 'react';
import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Header from './components/Header';

function App() {
  return (
    <div className='container'>
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
