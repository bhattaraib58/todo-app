const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          key: action.key,
          name: action.name,
          completed: action.completed,
        }
      ];

    case 'EDIT_TODO':
      let updatedTodo = {
        name: action.name,
        key: action.key,
      };

      return state.map((todo) => {
        if (todo.key === action.key) { return updatedTodo; }
        else { return todo; }
      });

    case 'EDIT_STATUS':
      return state.map((todo) => {
        if (todo.key === action.key) { 
          todo.completed = !todo.completed; 
        }
        return todo;
      });

    case 'REMOVE_TODO':
      return state.filter((todo) => {
        return todo.key !== action.key;
      });

    default:
      return state;
  }
};

export default todos;
