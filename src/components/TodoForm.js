import React, { useState } from 'react';
import { connect } from 'react-redux';
import Alert from './Alert';
import { addTodo, showAlert } from '../actions/actions';

const TodoForm = ({ addTodo, showAlert, alert }) => {
  const [value, setValue] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const newTodo = {
      value,
      id: Date.now().toString(),
    };

    if (!value.trim()) {
      return showAlert("Todo can't be empty!");
    }

    addTodo(newTodo);
    setValue('');
  };

  const inputHandler = (event) => {
    event.persist();
    const target = event.target.value;
    setValue(target);
  };

  return (
    <form className='todo-form' onSubmit={submitHandler}>
      {alert && <Alert text={alert} />}
      <input
        className='todo-form__input'
        type='text'
        value={value}
        onChange={(event) => inputHandler(event)}
        placeholder='What do you need to get done?'
      />
      <button className='todo-form__submit' type='submit'>
        Add Todo
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  addTodo: addTodo,
  showAlert: showAlert,
};

const mapStateToProps = (state) => ({
  alert: state.app.alert,
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
