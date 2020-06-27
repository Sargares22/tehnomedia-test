import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom'
import {useDispatch} from 'react-redux'

import { Sidebar } from './containers/Sidebar/Sidebar';
import { TodoList } from './containers/TodoList/TodoList';
import { getTodos } from './redux/actions';
import { ModalForm } from './containers/ModalForm/ModalForm';
import styled from 'styled-components';
// import {} from 'styled-components/cssprop'

const Container = styled.div`
	height: auto;
	max-width: 1280px;
	margin: 10px auto;
	padding: 10px;
	display: grid;
	grid-template-columns: 0.25fr 1fr;
	box-shadow: 0px 7px 15px 5px grey;
	background-color: #d8d8d8;
	@media (max-width: 1305px) {
		.container {
		margin: 0 5px;
		}
	}
`

function App() {

	const dispatch = useDispatch();

	useEffect(() =>{
		dispatch(getTodos())
	}, [dispatch])

	return (
		<Container>
			<Sidebar />
			<main className="main">
				<Switch>
					<Route
						path={"/"}
						component={TodoList}
					/>
					<Route
						path={"/:list"}
						component={TodoList}
					/>
				</Switch>
			</main>
			<ModalForm/>
		</Container>
	);
}

export default App;
