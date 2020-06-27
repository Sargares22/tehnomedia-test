import React, { useState } from 'react'

import { minDateTomorrow } from '../../helpers/functions';
import {ModalWindow, ModalBody, ModalBodyGroup, ModalInput, ModalLabel, ModalTextarea, ModalFooter, ModalButton} from './styles'
import { ModalPropsType } from '../../types/modal';
import { TodoType } from '../../types/todoList';

type PropsType = {
	modalProps: ModalPropsType
	onSubmit: (event: React.FormEvent<HTMLFormElement>, formData: TodoType) => void
	hideModal: () => void 
	lists: Array<string>
}

export const TodoForm:React.FC<PropsType> = ({ hideModal, onSubmit, modalProps, lists } ) => {

	const [formData, setFormData] = useState({ ...modalProps as TodoType });
	const {title, list, description, deadline} = modalProps;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value.trim()
		});
	};

	return (
		<ModalWindow onSubmit={e => onSubmit(e, formData)}>
			<div className="modal-window__title">{title ? `Редактировать задачу - "${title}"` : 'Добавить задачу'}</div>
			<ModalBody>
				<ModalBodyGroup>
					<ModalInput type="text" placeholder="Моя задача"  name="title" defaultValue={title} onChange={handleChange} required/>
					<hr/>
					<ModalLabel >Название</ModalLabel>
				</ModalBodyGroup>
				<ModalBodyGroup>
					<ModalTextarea placeholder="Мое описание" rows={3} defaultValue={description} name="description" onChange={handleChange} />
					<hr style={{bottom: '5px'}}/>
					<ModalLabel >Описание</ModalLabel>
				</ModalBodyGroup>
				<ModalBodyGroup>
					<ModalInput placeholder="Мой список" type="text"  name="list" list="list" defaultValue={list} onChange={handleChange} />
					<hr/>
					<ModalLabel >Группа</ModalLabel>
					<datalist id="list">
						{lists.map(list => {
							return <option key={list} value={list} />
						})}
					</datalist>
				</ModalBodyGroup>
				<ModalBodyGroup>
					<ModalInput type="date"  min={minDateTomorrow()} defaultValue={deadline} name="deadline" onChange={handleChange}/>
					<hr/>
					<ModalLabel >Срок исполнения</ModalLabel>
				</ModalBodyGroup>
			</ModalBody>
			<ModalFooter>
				<ModalButton className="modal-footer-button" type="submit">Подтвердить</ModalButton>
				<ModalButton className="modal-footer-button" type="button" onClick={hideModal}>Закрыть</ModalButton>
			</ModalFooter>
		</ModalWindow>
	)
}
