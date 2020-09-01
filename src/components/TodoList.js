import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { removeTodo, toogleTodo } from '../actions/actions';

const TodoList = ({ todos, removeTodo, toogleTodo }) => {
  return (
    <div>
      <p className='todos-left'>Todos left: {todos.length}</p>
      <ul className='list'>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} removeTodo={removeTodo} toogleTodo={toogleTodo} />
        ))}
      </ul>
    </div>
  );
};

const mapDispatchToProps = {
  removeTodo: removeTodo,
  toogleTodo: toogleTodo,
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
