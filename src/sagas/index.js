import { put, takeLatest, all } from 'redux-saga/effects';
import { LIST_PROFILES_SUCCEEDED, LIST_PROFILES, CREATE_PROFILE, CREATE_PROFILE_SUCEDED, GET_PROFILE, GET_PROFILE_SUCEDED, UPDATE_PROFILE } from "../constants/ActionTypes";
import { GET_CATEGORY, GET_CATEGORY_SUCCESS, CHANGE_CHECKBOX_VALUE, CHANGE_CHECKBOX_VALUE_SUCCESS } from 'constants/ActionTypes';

function* fetchNews() {
	const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
		.then(response => response.json());
	yield put({ type: "CONSTANT_VALUE", json: json.articles.id, });
}
function* actionWatcher() {
	yield takeLatest('GET_NEWS', fetchNews)
}

function* fetchListProfiles() {
	const json = yield fetch('http://localhost:8081/api/listar-perfiles')
		.then(response => response.json());
	yield put({ type: LIST_PROFILES_SUCCEEDED, profiles: json, });
}

function* listProfileWatcher() {
	yield takeLatest(LIST_PROFILES, fetchListProfiles);
}

function* createProfile(action) {
	const json = yield fetch('http://localhost:8081/api/crear-perfil',
		{
			method: 'post',
			body: JSON.stringify(action.profile)
		});
	yield put({ type: CREATE_PROFILE_SUCEDED, createProfileSuceded: json.ok, })
};

function* createProfileWatcher() {
	yield takeLatest(CREATE_PROFILE, createProfile)
}

function* getCategories() {
	const json = yield fetch('http://localhost:8081/api/listar-categorias')
		.then(response => response.json());
	yield put({ type: GET_CATEGORY_SUCCESS, categories: json, });
}

function* getCategoryWatcher() {
	yield takeLatest(GET_CATEGORY, getCategories)
}

function* changeCheckboxValue(action) {
	yield put({ type: CHANGE_CHECKBOX_VALUE_SUCCESS, category: action.payload });
}

function* changeCheckboxValueWatcher() {
	yield takeLatest(CHANGE_CHECKBOX_VALUE, changeCheckboxValue)
}

function* getProfile(action) {
	let json;
	yield fetch('http://localhost:8081/api/listar-perfiles/' + action.id)
		.then(response => response.json())
		.then(responseJSON => json = responseJSON);
	yield put({ type: GET_PROFILE_SUCEDED, profile: json });
};

function* getProfileWatcher() {
	yield takeLatest(GET_PROFILE, getProfile);
};

function* updateProfile(action) {
	console.log(action);
	const json = yield fetch('http://localhost:8081/api/editar-perfil/' + action.payload.id,
		{
			method: 'post',
			body: JSON.stringify(action.payload.profile)
		});
	yield put({ type: CREATE_PROFILE_SUCEDED, createProfileSuceded: json.ok, })
};

function* updateProfileWatcher() {
	yield takeLatest(UPDATE_PROFILE, updateProfile)
}

export default function* rootSaga() {
	yield all([
		actionWatcher(),
		listProfileWatcher(),
		createProfileWatcher(),
		getCategoryWatcher(),
		changeCheckboxValueWatcher(),
		getProfileWatcher(),
		updateProfileWatcher()
	]);
}
