import { ADD_TODO, REMOVE_TODO, TOOGLE_TODO } from './types';

let initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat([action.payload]),
        completed: false,
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };

    case TOOGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    //   return {
    //     ...state,
    //     todos: state.todos.map((todo) =>
    //       todo.id === action.id ? todo.completed = !todo.completed : todo
    //     ),
    //   };

    default:
      return state;
  }
};
