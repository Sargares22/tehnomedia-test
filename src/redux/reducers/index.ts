import { combineReducers } from 'redux'
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import {todoList} from './todoList'
import {modal} from './modal'

export const rootReducer = combineReducers({
	todoList: todoList,
	modal: modal,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector;