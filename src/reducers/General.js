import { CONSTANT_VALUE } from 'constants/ActionTypes';
import { LIST_PROFILES_SUCCEEDED, 
  CREATE_PROFILE_SUCEDED, GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  CHANGE_CHECKBOX_VALUE_SUCCESS } from 'constants/ActionTypes';

const initialState = {
	newValue: '',
	profiles: [],
  createProfileSuceded: false,
  categories: []
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
		default:
			return state;
  }
}

export default generalState;
