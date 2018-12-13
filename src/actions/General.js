import {
	CONSTANT_VALUE,
	CREATE_PROFILE,
	CREATE_PROFILE_SUCEDED
} from 'constants/ActionTypes';

export function setNewValue(newValue) {
	return { type: CONSTANT_VALUE, newValue };
}

export function createProfile(profile) {
	return { type: CREATE_PROFILE, profile };
}

export function setCreateProfileSuceded(value) {
	return { type: CREATE_PROFILE_SUCEDED, createProfileSuceded: value };
}
