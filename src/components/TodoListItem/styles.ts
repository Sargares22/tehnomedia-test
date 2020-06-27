import styled from 'styled-components';

type Props = {
	complete?: boolean
	deadlineStatus?: string
}

export const TodoItem = styled.li<Props>`
	position: relative;
	margin-bottom: 10px;
	border-bottom: 2px solid #000;
	border-radius: 8px;
	padding: 20px 0;
	display: grid;
	grid-template-columns: repeat(9, 1fr);
	transition: background-color 0.25s;
	grid-template-areas: "checkbox name name name deadline deadline deadline edit delete";
	align-items: center;
	text-align: center;
	opacity: ${props => props.complete ? "0.7" : "1"};
	background-color: ${props => props.complete ? "#a7a7a7" : props.deadlineStatus || "#fff"};
`
export const TodoItemCheckbox = styled.div`
	grid-area: checkbox;
	input {
		display: none;
		+ label {
			display: block;
			cursor: pointer;
		
			&:before {
				content: "\\2714";
				border: 1px solid #000;
				border-radius: 3px;
				display: inline-block;
				width: 16px;
				height: 16px;
				padding: 0 2px 5px;
				vertical-align: bottom;
				color: transparent;
				transition: 0.2s;
			}
			&:active:before {
				transform: scale(0.7);
			}
		}
		&:checked + label:before {
			background-color: #ffffff;
			border-color: #ffffff;
			color: #9c9c9c;
		}
	}
`
export const TodoItemName = styled.div`
	grid-area: name;
	font-size: 20px;
	font-weight: bold;
`
export const TodoItemDeadline = styled.div`
	grid-area: deadline;
	font-size: 20px;
	font-weight: bold;
`


const TodoItemIcon = styled.div`
	display: flex;
	justify-content: center;

	> div {
	cursor: pointer;
	position: relative;
	display: flex;

	&:before {
		content: "";
		position: absolute;
		top: -5px;
		left: -5px;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: rgba(204, 204, 204, 0.5);
		opacity: 0;
		transition: opacity 0.2s ease;
		z-index: 1;
	}

	&:hover:before {
		opacity: 1;
	}

	svg {
		height: 20px;
		width: 20px;
		z-index: 5;
	}
	}
`
export const TodoItemEditIcon = styled(TodoItemIcon)`
	grid-area: edit;
`
export const TodoItemDeleteIcon = styled(TodoItemIcon)`
	grid-area: delete;
`
