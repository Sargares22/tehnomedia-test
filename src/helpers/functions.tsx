import { TodoListType } from "../types/todoList";

export const filterData = (todos: TodoListType, list: string): TodoListType => {
	if (list) {
		return todos.filter((item) => item.list === list)
	} else {
		return todos
	}
}
export const minDateTomorrow = (): string => {
	const date = new Date()
	date.setDate(date.getDate() + 1)
	return date.toISOString().split("T")[0]
};

export const isNewList = (lists: Array<string | undefined>, list: string | undefined = ''): boolean => !lists.includes(list) ? true: false

type isEmptyListType = {
	todos: TodoListType
	prevList: string
	list: string
}

export const isEmptyList = (todos: TodoListType, prevList: string | undefined, list: string = ''): boolean => {
	return prevList !== list && todos.filter(todo => todo.list === prevList).length === 1 ? true : false
}

export const findList = (todos: TodoListType, id: string): Array<string | undefined> => todos.filter(todo => +todo.id === +id).map(todo => todo.list)