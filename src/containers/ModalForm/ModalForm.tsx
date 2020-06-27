import React from 'react'
import { useDispatch } from 'react-redux';
import isEqual from 'lodash.isequal'
import { useHistory } from "react-router-dom"
import styled from 'styled-components';

import { Portal } from './Portal';
import { TodoForm } from '../../components/TodoFormItem/TodoForm';
import { closeModal, updateTodo, createTodo } from '../../redux/actions';
import { useTypedSelector } from '../../redux/reducers';
import { TodoType } from '../../types/todoList';


const ModalOverlay = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
`	
export const ModalForm: React.FC = () => {

	const dispatch = useDispatch();
	const { isOpen, modalProps } = useTypedSelector((state => (state.modal)))
	const { lists } = useTypedSelector((state => (state.todoList)))
	const {push} = useHistory();

	const hideModal = () => dispatch(closeModal())
	const onSubmit = (event: React.FormEvent<HTMLFormElement>, formData: TodoType) => {
		event.preventDefault();
		if(!isEqual(modalProps, formData)){
			formData.id || +formData.id === 0 ? dispatch(updateTodo(formData, false, push)) : dispatch(createTodo(formData));
		} else {
			hideModal()	
		}
	}

	const formProps = {
		modalProps: modalProps,
		onSubmit: onSubmit,
		hideModal: hideModal,
		lists: lists
	}

	return (
		<>
			{isOpen &&
				<Portal>
					<ModalOverlay>
						<TodoForm {...formProps}/>
					</ModalOverlay>
				</Portal>
			}
		</>
	);
};
