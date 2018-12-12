import { CONSTANT_VALUE } from 'constants/ActionTypes';
import { LIST_PROFILES_SUCCEEDED } from 'constants/ActionTypes';

const initialState = {
    newValue: '',
    profiles: []
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
        default:
            return state;
    }
};

export default generalState;
