
export type TodoType = {
	id: string,
	title: string
	description: string
	complete: boolean
	deadline: string
	list: string
}


export type TodoListType = Array<TodoType>
