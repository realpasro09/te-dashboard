import { CONSTANT_VALUE } from 'constants/ActionTypes';
import {
	LIST_PROFILES_SUCCEEDED,
	CREATE_PROFILE_SUCEDED,
	GET_CATEGORY_SUCCESS,
	CHANGE_CHECKBOX_VALUE_SUCCESS,
	GET_PROFILE_SUCEDED,
	SET_CATEGORIES,
	DELETE_PROFILE_SUCCEEDED,
	GET_SOURCES_SUCCESS,
	CHANGE_SOURCESCHECKBOX_VALUE_SUCCESS
} from 'constants/ActionTypes';

const initialState = {
	newValue: '',
	profiles: [],
	createProfileSuceded: false,
	categories: [],
	profile: null,
	sources: []
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
		case GET_CATEGORY_SUCCESS:
			const newcategories = [];
			action.categories.forEach(element => {
				newcategories.push({ nombre: element, seleccionado: false });
			});
			return {
				...state,
				categories: newcategories
			};
		case CHANGE_CHECKBOX_VALUE_SUCCESS:
			const newCategories = [];
			state.categories.forEach(element => {
				if (element.nombre === action.category.nombre) {
					newCategories.push({
						nombre: element.nombre,
						seleccionado: action.category.seleccionado
					});
				} else {
					newCategories.push({
						nombre: element.nombre,
						seleccionado: element.seleccionado
					});
				}
			});
			return {
				...state,
				categories: newCategories
			};
		case GET_SOURCES_SUCCESS:
			const newSources = [];
			action.sources.sources.forEach(element => {
				newSources.push({ name: element, selected: false });
			});
			return {
				...state,
				sources: newSources.slice(1, 6)
			};
		case CHANGE_SOURCESCHECKBOX_VALUE_SUCCESS:
			const new_Sources = [];
			state.sources.forEach(element => {
				if (element.name === action.source.name) {
					new_Sources.push({
						name: element.name,
						selected: action.source.selected
					});
				} else {
					new_Sources.push({
						name: element.name,
						selected: element.selected
					});
				}
			});
			return {
				...state,
				sources: new_Sources
			};
		case GET_PROFILE_SUCEDED:
			return {
				...state,
				profile: action.profile
			}
		case SET_CATEGORIES:
			return {
				...state,
				categories: action.categories
			}
		case DELETE_PROFILE_SUCCEEDED:
			return {
				...state,
				id: action.id
			}
		default:
			return state;
	}
}
export default generalState;
