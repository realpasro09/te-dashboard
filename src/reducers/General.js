import { CONSTANT_VALUE } from 'constants/ActionTypes';

const initialState = {
    newValue: ''
};

const generalState = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANT_VALUE:
            return {
                ...state,
                newValue: action.newValue
            };
        default:
            return state;
    }
};

export default generalState;
