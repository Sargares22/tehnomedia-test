import React from 'react'
import { Draggable, DraggableProvided, DraggableStateSnapshot, DraggableId, NotDraggingStyle, DraggingStyle } from 'react-beautiful-dnd';

import {TodoItem, TodoItemCheckbox, TodoItemName, TodoItemDeadline, TodoItemEditIcon, TodoItemDeleteIcon} from './styles'
import { ReactComponent as TrashIcon } from '../../assets/bin.svg';
import { ReactComponent as EditIcon } from '../../assets/cog.svg';
import { TodoType } from '../../types/todoList.js';

type PropsType = {
	compareDate: (date: string | undefined) => string
	toggleComplete: (todo: TodoType, event: React.ChangeEvent<HTMLInputElement>) => void
	removeTodo: (todo: TodoType) => void 
	showModal: (todo: TodoType) => void 
	todo: TodoType
	ind: number 
	getStyle: (style: DraggingStyle | NotDraggingStyle | undefined, snapshot: DraggableStateSnapshot) => any
}


export const TodoListItem:React.FC<PropsType> = ({ compareDate, toggleComplete, removeTodo, showModal, todo, ind, getStyle }) => {

	const { id, title, deadline, complete } = todo;
	const deadlineStatus: string = compareDate(deadline)
	const dragId: DraggableId = id.toString();

	return (
		<Draggable
			draggableId={dragId}
			index={ind}
		>
			{(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
				<TodoItem
					complete={complete}
					deadlineStatus={deadlineStatus}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					style={getStyle(provided.draggableProps.style, snapshot)}
				>
					<TodoItemCheckbox>
						<input onChange={(e) => toggleComplete(todo, e)} type="checkbox" id={`checkbox-${id}`} name="complete" checked={complete ? true : false} />
						<label htmlFor={`checkbox-${id}`}></label>
					</TodoItemCheckbox>
					<TodoItemName>{title}</TodoItemName>
					<TodoItemDeadline>{deadline ? `до ${deadline}` : "Без срока исполнения."}</TodoItemDeadline>
					<TodoItemEditIcon><div onClick={() => showModal(todo)}><EditIcon /></div></TodoItemEditIcon>
					<TodoItemDeleteIcon ><div onClick={() => removeTodo(todo)}><TrashIcon /></div></TodoItemDeleteIcon>
				</TodoItem>

			)}
		</Draggable>
	)
}
