import { TodosAction, TodoActionTypes, TodoState } from '../../types/todos';

const initialState: TodoState = {
  todos: [],
  completedTodos: [],
  loading: false,
  error: null,
  page: 1,
  numberOfTodos: 0,
};

export const todoReducer = (state = initialState, action: TodosAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true, error: null };
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: [...state.todos, ...action.payload.data],
        numberOfTodos: Number(action.payload.totalCount),
      };
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };

    case TodoActionTypes.SET_TODOS_PAGE:
      return { ...state, page: action.payload };

    case TodoActionTypes.DELETE_TODO:
      return { ...state, loading: true, error: null };
    case TodoActionTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TodoActionTypes.DELETE_TODO_ERROR:
      return { ...state, loading: false, error: action.payload };

    case TodoActionTypes.CHANGE_TODOS_LIST:
      return { ...state, todos: [...action.payload] };

    case TodoActionTypes.CHANGE_COMPLETED_TODOS_LIST:
      return { ...state, completedTodos: [...action.payload] };

    default:
      return state;
  }
};
