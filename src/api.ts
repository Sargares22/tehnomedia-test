import { TodoType } from "./types/todoList";

type todosResponseType = {
    id: string
    title: string
    description: string
    list: string
    complete: false
    deadline: string
}

const url: string = 'https://5ef7767a8566150016a455f9.mockapi.io/data';

export const getData = (): Promise<todosResponseType[]> => {
	
	return fetch(url)
		.then(response => {
			if(!response.ok) throw new Error('atata') 
			return response.json();
		})
		.then((data) => data as todosResponseType[])
}

export const createTodo = (todo: TodoType): Promise<todosResponseType> => {
	
	const requestOptions = {
		method: 'POST',
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*"
		},
		body: JSON.stringify(todo)		
	}

	return fetch(url, requestOptions)
		.then(response => {
			if(!response.ok) throw new Error('atata') 
			return response.json();
		})
		.then((data) => data as todosResponseType)
	
}

export const updateTodo = (todo: TodoType): Promise<todosResponseType> => {

	const requestOptions = {
		method: 'PUT',
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*"
		},
		body: JSON.stringify(todo)		
	}

	return fetch(`${url + '/' + todo.id}`, requestOptions)
		.then(response => {
			if(!response.ok) throw new Error('atata') 
			return response.json();
		})
		.then((data) => {
			return data as todosResponseType
		})  	
	
}

export const deleteTodo = (id: string): Promise<string> => {
	const requestOptions = {
		method: 'DELETE',
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*"
		}		
	}
	return fetch(`${url + '/' + id}`, requestOptions)
		.then(response => {
			if(!response.ok) throw new Error('atata') 
			return response.json();
		})
		.then((res) => {
			return id as string
		})	
}