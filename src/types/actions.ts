import { GET_TODOS, INIT_LISTS, SET_ACTIVE_LIST, OPEN_MODAL, CLOSE_MODAL, CREATE_TODO, UPDATE_TODO, DELETE_TODO, DELETE_LIST, CREATE_LIST, REBUILD_TODOS } from "../redux/types";
import { TodoListType, TodoType } from "./todoList";

type getTodosType = {
	type: typeof GET_TODOS
	payload: TodoListType
}
type initListsType = {
	type: typeof INIT_LISTS
	payload: Array<string>
}
type deleteListType = {
	type: typeof DELETE_LIST
	payload: string
}
type createListType = {
	type: typeof CREATE_LIST
	payload: string
}
type setActiveListType = {
	type: typeof SET_ACTIVE_LIST
	payload: string
}
type openModalType = {
	type: typeof OPEN_MODAL
	payload: TodoType | undefined
}
type closeModalType = {
	type: typeof CLOSE_MODAL
}
type rebuildTodosType = {
	type: typeof REBUILD_TODOS,
	payload: TodoListType
}
type createTodo = {
	type: typeof CREATE_TODO,
	payload: TodoType
}
type updateTodo = {
	type: typeof UPDATE_TODO,
	payload: TodoType
}
type deleteTodo = {
	type: typeof DELETE_TODO,
	payload: number
}

export type ActionTypes = getTodosType | initListsType | deleteListType | createListType | setActiveListType | openModalType | closeModalType | rebuildTodosType | createTodo | updateTodo | deleteTodo