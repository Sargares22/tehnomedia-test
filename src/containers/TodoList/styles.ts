import styled from 'styled-components';

type TitleProps = {
	color?: string
}
export const TodoListTitle = styled.h1<TitleProps>`
	font-size: 45px;
	margin: 0 0 10px;
	color: ${props => props.color || "#000"};
	padding: 10px;
	background-color: #fff
`
