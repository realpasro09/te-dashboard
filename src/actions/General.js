import {
	CONSTANT_VALUE,
	LIST_PROFILES,
	DELETE_PROFILE,
	CREATE_PROFILE,
	CREATE_PROFILE_SUCEDED,
	GET_CATEGORY,
	CHANGE_CHECKBOX_VALUE,
	GET_PROFILE,
	UPDATE_PROFILE,
	SET_CATEGORIES,
	GET_SOURCES,
	CHANGE_SOURCECHECKBOX_VALUE
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

export function listProfiles() {
	return { type: LIST_PROFILES };
}

export function getCategories() {
	return { type: GET_CATEGORY };
}

export function changeCheckboxvalue(payload) {
	return { type: CHANGE_CHECKBOX_VALUE, payload };
}

export function getProfile(id) {
	return { type: GET_PROFILE, id };
}

export function updateProfile(payload) {
	return { type: UPDATE_PROFILE, payload };
}

export function setCategories(categories) {
	return { type: SET_CATEGORIES, categories };
}

export function deleteProfile(id) {
	return { type: DELETE_PROFILE, id };
}

export function changeSourceCheckboxvalue(payload) {
	return { type: CHANGE_SOURCECHECKBOX_VALUE, payload };
}

export function getSources() {
	return { type: GET_SOURCES };
}
