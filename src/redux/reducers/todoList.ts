import { INIT_LISTS, SET_ACTIVE_LIST, GET_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO, DELETE_LIST, CREATE_LIST, REBUILD_TODOS } from "../types";
import { TodoListType } from "../../types/todoList";
import { ActionTypes } from "../../types/actions";


const initState = {
	todos: [] as TodoListType,
	lists: [] as Array<string>,
	currentList: '',
	loading: true,
}

type initialStateType = typeof initState;

export const todoList = (state = initState, action: ActionTypes): initialStateType => {
	switch(action.type){
		case GET_TODOS:
			return {...state, todos: action.payload, loading: false}
		case REBUILD_TODOS:
			return {...state, todos: action.payload}
		case CREATE_TODO:
			return {...state, todos: [...state.todos, action.payload]}
		case UPDATE_TODO:
			return {...state, todos: state.todos.map(todo => {
				return todo.id === action.payload.id ? {...todo, ...action.payload}	: todo
			})}
		case DELETE_TODO:
			return {...state, todos: state.todos.filter(todo => +todo.id !== action.payload)}
		case INIT_LISTS:
			return {...state, lists: action.payload}
		case SET_ACTIVE_LIST:
			return {...state, currentList: action.payload}
		case DELETE_LIST:			
			return {...state, lists: state.lists.filter(list => list !== action.payload), currentList: ''}
		case CREATE_LIST:
			const newList = action.payload ? [...state.lists, action.payload] : [...state.lists]
			return {...state, lists: newList}
		default:
			return state
	}
};