export const addTodo = name => ({
  type: 'ADD_TODO',
  key: Date.now(),
  completed: false,
  name,
});

export const editTodo = (key, updatedName) => ({
  type: 'EDIT_TODO',
  key,
  name: updatedName,
});

export const editStatus = (key) => ({
  type: 'EDIT_STATUS',
  key,
});

export const removeTodo = key => ({
  type: 'REMOVE_TODO',
  key
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_PENDING: 'SHOW_PENDING',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
};
