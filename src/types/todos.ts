export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface Todos {
  todos: Todo[];
}

export interface TodoState {
  todos: Todo[];
  completedTodos: Todo[];
  loading: boolean;
  error: null | string;
  page: number;
  numberOfTodos: number;
}

export enum TodoActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',

  SET_TODOS_PAGE = 'SET_TODOS_PAGE',

  DELETE_TODO = 'DELETE_TODD',
  DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
  DELETE_TODO_ERROR = 'DELETE_TODO_ERROR',

  CHANGE_TODOS_LIST = 'CHANGE_TODOS_LIST',
  CHANGE_COMPLETED_TODOS_LIST = 'CHANGE_COMPLETED_TODOS_LIST',
}

interface FetchTodosAction {
  type: TodoActionTypes.FETCH_TODOS;
}
interface FetchTodosSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: { data: Todo[]; totalCount: string | undefined };
}

interface FetchTodosErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface SetTodosPageAction {
  type: TodoActionTypes.SET_TODOS_PAGE;
  payload: number;
}

interface DeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO;
}
interface DeleteTodoSuccesAction {
  type: TodoActionTypes.DELETE_TODO_SUCCESS;
  payload: number;
}
interface DeleteTodoErrorAction {
  type: TodoActionTypes.DELETE_TODO_ERROR;
  payload: string;
}

interface ChangeTodosList {
  type: TodoActionTypes.CHANGE_TODOS_LIST;
  payload: Todo[];
}

interface ChangeCompletedTodosList {
  type: TodoActionTypes.CHANGE_COMPLETED_TODOS_LIST;
  payload: Todo[];
}

export type TodosAction =
  | FetchTodosAction
  | FetchTodosErrorAction
  | FetchTodosSuccessAction
  | SetTodosPageAction
  | DeleteTodoAction
  | DeleteTodoSuccesAction
  | DeleteTodoErrorAction
  | ChangeTodosList
  | ChangeCompletedTodosList;
