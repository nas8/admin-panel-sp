import { TodosAction, TodoActionTypes, Todo } from '../../types/todos';
import { Dispatch } from 'redux';
import axios from 'axios';

let pages: number[] = [];

export const fetchTodos = (currentPage: number) => {
  return async (dispatch: Dispatch<TodosAction>, getState: () => any) => {
    let isTodoExist = false;

    pages.forEach((page: number) => {
      if (!isTodoExist && page === currentPage) {
        isTodoExist = true;
      }
    });

    if (isTodoExist) {
      return;
    }
    pages.push(currentPage);

    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: { _page: currentPage, _limit: 200 },
      });
      const totalCount = response.headers['x-total-count'];

      console.log({ data: response.data, totalCount });

      dispatch({
        type: TodoActionTypes.FETCH_TODOS_SUCCESS,
        payload: { data: response.data, totalCount },
      });
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: 'Произошла ошибка при загрузке постов',
      });
    }
  };
};

export const setTodosPage = (page: number): TodosAction => {
  return { type: TodoActionTypes.SET_TODOS_PAGE, payload: page };
};

export const changeTodosList = (todos: Todo[]): TodosAction => {
  return { type: TodoActionTypes.CHANGE_TODOS_LIST, payload: todos };
};

export const changeCompletedTodosList = (completedTodos: Todo[]): TodosAction => {
  return { type: TodoActionTypes.CHANGE_COMPLETED_TODOS_LIST, payload: completedTodos };
};

export const deleteTodo = (todoId: number) => {
  return async (dispatch: Dispatch<TodosAction>) => {
    try {
      dispatch({ type: TodoActionTypes.DELETE_TODO });
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/Todos/${todoId}`);
      dispatch({ type: TodoActionTypes.DELETE_TODO_SUCCESS, payload: todoId });
    } catch (e) {
      dispatch({
        type: TodoActionTypes.DELETE_TODO_ERROR,
        payload: 'Произошла ошибка при удалении поста',
      });
    }
  };
};
