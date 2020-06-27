import styled from 'styled-components';

export const ModalWindow = styled.form`
	box-sizing: border-box;
	background-color: #fff;
	min-height: 200px;
	width: 600px;
	border-radius: 10px;
	.modal-window__title {
		font-size: 25px;
		padding: 30px 0 20px 20px;
		border-bottom: 1px solid #000;
	}
`	
export const ModalBody = styled.div`
	margin: 20px 0 0;
	padding: 0 10px;
	padding-bottom: 20px;
	display: grid;
	grid-template: 1fr/1fr;
	border-bottom: 1px solid #000;
`	
export const ModalBodyGroup = styled.div`
	position: relative;
	padding: 0;
	margin: 10px 5px;
	border: none;
	overflow: visible;

	hr {
		content: "";
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 2px;
		border: none;
		background: #999;
		font-size: 1px;
		will-change: transform, visibility;
		transition: all 200ms ease-out;
		transform: scaleX(0);
		visibility: hidden;
		z-index: 10;
	}
`	
export const ModalInput = styled.input`
	box-sizing: border-box;
	width: 100%;
	padding: 10px 5px 5px;
	border: none;
	border-radius: 0;
	box-shadow: none;
	border-bottom: 1px solid #9999;
	font-size: 17px;
	outline: none;
	cursor: text;

	&:focus ~ hr {
		transform: scaleX(1);
		visibility: visible;
	}
`	
export const ModalTextarea = styled.textarea`
	box-sizing: border-box;
	width: 100%;
	padding: 10px 5px 5px;
	border: none;
	border-radius: 0;
	box-shadow: none;
	border-bottom: 1px solid #9999;
	resize: none;
	font-family: inherit;
	font-size: inherit;	outline: none;
	cursor: text;
	&:focus ~ hr {
		transform: scaleX(1);
		visibility: visible;
	}
`	
export const ModalLabel = styled.label`
	position: absolute;
	top: 10px;
	left: 5px;
	font-size: 20px;
	color: #000;
	background: #fff;
	transform-origin: 0 -150%;
	transition: transform 300ms ease;
	pointer-events: none;
	transform: scale(0.6);
`	
export const ModalFooter = styled.div`
	margin: 20px 40px;
	display: grid;
	justify-content: center;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20px;
`	
export const ModalButton = styled.button`
	cursor: pointer;
	font-size: 20px;
	padding: 6px 3px;
	background-color: #bdbdbd73;
	transition: all 0.25s;
	text-align: center;
	border-radius: 6px;
	box-shadow: 2px 2px 3px 2px #9c9c9c;
	border-color: transparent;
	&:hover {
		background-color: #ccc;
	}
`	