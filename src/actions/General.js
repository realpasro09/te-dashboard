import {
    CONSTANT_VALUE,
    LIST_PROFILES
} from 'constants/ActionTypes';

export function setNewValue(newValue) {
    return {type: CONSTANT_VALUE, newValue};
}

export function listProfiles() {
    return {type: LIST_PROFILES};
}