import {
    CONSTANT_VALUE
} from 'constants/ActionTypes';

export function setNewValue(newValue) {
    return {type: CONSTANT_VALUE, newValue};
}
