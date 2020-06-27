import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';

import { setActiveList, openModal } from '../../redux/actions';
import { Loader } from '../../components/Loader';
import { SidebarItem } from '../../components/SidebarItem';
import {SidebarMain, SidebarTitle, SidebarButton} from './styles'
import { useTypedSelector } from '../../redux/reducers';
	

export const Sidebar:React.FC = () => {

	const dispatch = useDispatch();
	const { lists, loading } = useTypedSelector(((state) => state.todoList))
	// const showModal = () => dispatch(openModal())	
	const showModal = useCallback(() => dispatch(openModal()), [dispatch])

	const handleChangeList = (list: string) => dispatch(setActiveList(list))

	return (
		<SidebarMain>
			<SidebarTitle>React Todo</SidebarTitle>
			<SidebarItem title={'Все задачи'} to={'/'} exact={true} handleChangeList={handleChangeList}/>
			<hr />
			<SidebarButton onClick={() => showModal()}>Добавить задачу</SidebarButton>
			<hr />
			<div>
				{
					loading ?
						<Loader />
						:
						lists.map((list: string) => {
							return <SidebarItem title={list} to={list} exact={false} key={list} handleChangeList={handleChangeList}/>
						})
				}

				{!loading && !lists.length && <div style={{ fontSize: '20px', textAlign: 'center', }}>Пусто</div>}
			</div>
			
			
		</SidebarMain>
	)
}
