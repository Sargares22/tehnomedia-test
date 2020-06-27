import { ThunkAction } from "redux-thunk";

import * as api from "../api";
import { GET_TODOS, INIT_LISTS, SET_ACTIVE_LIST, OPEN_MODAL, CLOSE_MODAL, CREATE_TODO, UPDATE_TODO, DELETE_TODO, DELETE_LIST, CREATE_LIST, REBUILD_TODOS } from "./types";
import { isNewList, isEmptyList, findList } from "../helpers/functions";
import { TodoListType, TodoType } from "../types/todoList";
import { ActionTypes } from "../types/actions";
import { AppStateType } from "./reducers";

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>;
type AsyncThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;


export const getTodos = (): ThunkType => dispatch => {
	setTimeout(() => {
		api.getData().then(data=> {
			dispatch({type: GET_TODOS,	payload: data})
			dispatch(initLists(data))
		})
		.catch(error => {
			console.log(error);
			dispatch({type: GET_TODOS, payload: []})
		})
	}, 400)
}
export const rebuildTodos = (todos: TodoListType): ActionTypes => {
	return {type: REBUILD_TODOS, payload: todos}
}

export const createTodo = (data: TodoType): AsyncThunkType => async (dispatch, getState) => {

	const {lists} = await getState().todoList;
	const {list: currentList} = data;

	return api.createTodo(data).then(result => {
		dispatch({type: CREATE_TODO, payload: result})
		isNewList(lists, currentList) && dispatch(createList(currentList))
		dispatch(closeModal())
	})
	.catch(error => {
		console.log(error);
	})
}
export const updateTodo = (data: TodoType, checked: boolean = false, redirect: any = ()=>{}) => async (dispatch: any, getState: any) => {

	if(checked) {
		api.updateTodo(data).then(result => {
			dispatch({type: UPDATE_TODO, payload: result})
		})
		return
	}
	const {todos, lists} = await getState().todoList;
	const {id, list: currentList} = data;
	const prevList = findList(todos, id)[0];

	api.updateTodo(data).then(result => {
		dispatch({type: UPDATE_TODO, payload: result})
		isNewList(lists, currentList) && dispatch(createList(currentList))
		if(isEmptyList(todos, prevList, currentList)) {
			dispatch(deleteList(prevList))
			redirect('/tehnomedia-test/')
		}
		dispatch(closeModal())
	})
	.catch(error => {
		console.log(error);
	})
}

export const deleteTodo = (data: TodoType, redirect: any = ()=>{}) => async (dispatch: any, getState: any) => {
		
	const {todos} = await getState().todoList;
	const {id} = data;
	const prevList = findList(todos, id)[0]

	return api.deleteTodo(id).then(result => {
		console.log(result);
		
		dispatch({type: DELETE_TODO, payload: result})
		if(isEmptyList(todos, prevList)) {
			dispatch(deleteList(prevList))
			redirect('/tehnomedia-test/')
		}
	})
	.catch(error => {
		console.log(error);
	})
}

export const initLists = (data: TodoListType): ActionTypes => {
	const lists = data
		.reduce((arr: Array<string>, {list}) => {
				return isNewList(arr, list) ? arr.concat([list]) : arr
		},[])
		.filter(item => item)
	return {type: INIT_LISTS, payload: lists}
}
export const deleteList = (title: string | undefined = ''): ActionTypes => {
	return {type: DELETE_LIST, payload: title}
}
export const createList = (title: string | undefined = ''): ActionTypes => {
	return {type: CREATE_LIST, payload: title}
}
export const setActiveList = (title: string): ActionTypes => {
	return {type: SET_ACTIVE_LIST,	payload: title}
}

export const openModal = (params?: TodoType): ActionTypes => {
	return {type: OPEN_MODAL, payload: params}
}
export const closeModal = (): ActionTypes => {
	return {type: CLOSE_MODAL}
}




