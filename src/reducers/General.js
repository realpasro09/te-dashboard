import { CONSTANT_VALUE } from 'constants/ActionTypes';
import { CREATE_PROFILE_SUCEDED } from '../constants/ActionTypes';

const initialState = {
	newValue: '',
	createProfileSuceded: false,
};

const generalState = (state = initialState, action) => {
	switch (action.type) {
		case CONSTANT_VALUE:
			return {
				...state,
				newValue: action.newValue
			};
		case CREATE_PROFILE_SUCEDED:
			return {
				...state,
				createProfileSuceded: action.createProfileSuceded
			};
		default:
			return state;
	}
};

export default generalState;
