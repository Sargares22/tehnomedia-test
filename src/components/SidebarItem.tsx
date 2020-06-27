import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarListItem = styled.li`
	font-size: 20px;
	margin: 18px 0;
	a {
		display: block;
		padding: 6px 3px;
		background-color: #bdbdbd73;
		transition: all 0.25s;
		text-align: center;
		border-radius: 6px;
		box-shadow: 2px 2px 3px 2px #9c9c9c;
		&.active {
			background-color: #fff;
			box-shadow: 0px 1px 6px 0px #9c9c9c;
		}
		&:hover {
			background-color: #ccc;
		}
	}
`

type PropsType = {
	title: string
	to: string
	exact: boolean
	handleChangeList: (title: string) => void
}

export const SidebarItem:React.FC<PropsType> = ({ title, to, exact, handleChangeList }) => {

	const props = {
		to: to,
		activeClassName: "active",
		exact: exact,
		onClick: () => handleChangeList(title)
	}

	return <SidebarListItem><NavLink {...props}>{title}</NavLink></SidebarListItem>

}
