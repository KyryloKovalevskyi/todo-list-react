import {
  ADD_TODO,
  REMOVE_TODO,
  TOOGLE_TODO,
  SHOW_ALERT,
  HIDE_ALERT,
} from '../reducers/types';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

export function toogleTodo(id) {
  return {
    type: TOOGLE_TODO,
    id,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 1000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}
