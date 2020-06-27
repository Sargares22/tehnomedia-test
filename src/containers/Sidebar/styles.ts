import styled from 'styled-components';

export const SidebarMain = styled.aside`
	background-color: #fff;
	padding: 15px 10px 0 4%;
	hr {
		margin: 35px 0 30px;
	}
`
export const SidebarTitle = styled.h2`
	margin-bottom: 30px;
`
export const SidebarButton = styled.button`
	cursor: pointer;
	display: block;
	font-size: 20px;
	padding: 6px 3px;
	background-color: #bdbdbd73;
	transition: all 0.25s;
	text-align: center;
	border-radius: 6px;
	box-shadow: 2px 2px 3px 2px #9c9c9c;
	border-color: transparent;
	margin: 0 auto 30px;

	&:hover {
		background-color: #ccc;
	}
`
