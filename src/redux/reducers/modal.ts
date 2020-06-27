import { OPEN_MODAL, CLOSE_MODAL } from "../types";
import { ActionTypes } from "../../types/actions";

const initState = {
	isOpen: false,
	modalProps: {
		complete: false,
		description: '',
		list: '',
		title: '',
		deadline: ''
	},
}

type initialStateType = typeof initState;

export const modal = (state = initState, action: ActionTypes): initialStateType => {
	switch(action.type){
		case OPEN_MODAL:
			const props = !action.payload ? initState.modalProps : action.payload;
			return {...state, modalProps: props, isOpen: true}
		case CLOSE_MODAL:
			return {...state, isOpen: false}
		default:
			return state
	}
};