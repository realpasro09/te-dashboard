import { CONSTANT_VALUE } from 'constants/ActionTypes';
import { LIST_PROFILES_SUCCEEDED, CREATE_PROFILE_SUCEDED } from 'constants/ActionTypes';

const initialState = {
	newValue: '',
	profiles: [],
	createProfileSuceded: false,
};

const generalState = (state = initialState, action) => {
	switch (action.type) {
		case CONSTANT_VALUE:
			return {
				...state,
				newValue: action.newValue
			};
		case LIST_PROFILES_SUCCEEDED:
			return {
				...state,
				profiles: action.profiles
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
