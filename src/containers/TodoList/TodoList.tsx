import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, DropResult, DraggableStateSnapshot, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';
import dayjs from 'dayjs'
import { RouteComponentProps } from 'react-router-dom'

import {TodoListTitle} from './styles'
import { Loader } from '../../components/Loader';
import { TodoListItem } from '../../components/TodoListItem/TodoListItem';
import { filterData } from '../../helpers/functions';
import { openModal, deleteTodo, updateTodo } from '../../redux/actions';
import { TodoType, TodoListType } from '../../types/todoList.js';
import { AppStateType } from '../../redux/reducers/index.js';

export const TodoList = ({location, history}: RouteComponentProps) => {

	const dispatch = useDispatch();
	const { todos, loading } = useSelector(((state: AppStateType) => (state.todoList)))
	const listTitle: string = location.pathname.replace('/tehnomedia-test/','');

	console.log(listTitle);
	

	const data: TodoListType = filterData(todos, listTitle) || [];

    const removeTodo = (todo: TodoType) => dispatch(deleteTodo(todo, history.push));
    const showModal = (todo: TodoType) => dispatch(openModal(todo))
    const toggleComplete = (todo: TodoType, event: React.ChangeEvent<HTMLInputElement>) => {
		const data = {...todo, complete: event.target.checked}
		dispatch(updateTodo(data, true))
	}
	const compareDate = (date: string | undefined): string => {
		if(date) {
			const today = dayjs().format('YYYY MM DD')
			const deadline = dayjs(date).diff(today, 'day')
			if(deadline <= 3 && deadline >= 0) return 'yellow'
			if(deadline < 0) return 'red'
		}
		return ''
	}

	/*TODO: 
		1. add option to rebuild todos, then drag end, independently of data
		2. realize pt.1 with redux store
		2. realize pt.2 with api
	*/

    const reorder = (list: TodoListType, startIndex: number, endIndex: number) => {
		const [removed] = list.splice(startIndex, 1);
		list.splice(endIndex, 0, removed)
        return list
	};
	
	const onDragEnd = (result: DropResult) => {
		const {destination, source} = result
		if(!destination) return
		if(destination.droppableId === source.droppableId && destination.index === source.index) return

		reorder(data, source.index, destination.index)
	}

	const getStyle = (style: DraggingStyle | NotDraggingStyle | undefined, snapshot: DraggableStateSnapshot) => {
		if (snapshot.isDropAnimating) {
			return {
				...style,
				transition: style?.transition + ", box-shadow .5s",
			}
		}		
		if (snapshot.isDragging){
			return {
				...style,
				boxShadow: "2px 2px 9px 7px #fff",
				transform: style?.transform + "scale(1.005)",
				borderBottom: '2px solid transparent'
			};
		} 
		return {...style};
	}

	return (
		<>
			{
				loading ?
					<>
						<TodoListTitle>{listTitle || 'Данные загружаются'}</TodoListTitle>
						<Loader />
					</>
					:
					<>
						<DragDropContext
							onDragEnd={onDragEnd}
						>
							<TodoListTitle >{listTitle || 'Все задачи'}</TodoListTitle>
							<Droppable droppableId="droppable">
								{provided => (
									<ul ref={provided.innerRef} {...provided.droppableProps} style={{marginLeft: '20px'}}>
										{data.map((item, index) => {
											return <TodoListItem compareDate={compareDate} ind={index} toggleComplete={toggleComplete} removeTodo={removeTodo} showModal={showModal} todo={item} key={item.id} getStyle={getStyle}/>
										})}
										{!loading && !data.length && <div style={{ fontSize: '20px', textAlign: 'center', }}>Пусто</div>}
										{provided.placeholder}
									</ul>
								)}
							</Droppable>
						</DragDropContext>
					</>
			}
		</>
	)
}
