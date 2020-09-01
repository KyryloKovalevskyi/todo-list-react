import React from 'react';

const Todo = ({ todo, removeTodo, toogleTodo }) => {
  return (
    <li onClick={() => toogleTodo(todo.id)} className='todo'>
      <div className='todo__body'>
        <div className='todo__buttons'>
          <button className='todo__delete' onClick={() => removeTodo(todo.id)}>
            <i className='fas fa-trash'></i>
          </button>
        </div>
        <p className={todo.completed ? 'done' : 'todo__text'}>{todo.value}</p>
        <div className='todo__date'>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </li>
  );
};

export default Todo;
