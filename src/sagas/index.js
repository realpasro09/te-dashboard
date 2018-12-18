import { put, takeLatest, all } from 'redux-saga/effects';
import { LIST_PROFILES_SUCCEEDED, LIST_PROFILES, CREATE_PROFILE, CREATE_PROFILE_SUCEDED } from "../constants/ActionTypes";
import {GET_CATEGORY, 
	GET_CATEGORY_SUCCESS, 
	CHANGE_CHECKBOX_VALUE, 
	CHANGE_CHECKBOX_VALUE_SUCCESS,
	GET_SOURSES,
	GET_SOURSES_SUCCESS,
	CHANGE_SOURCESCHECKBOX_VALUE_SUCCESS,
	CHANGE_SOURCECHECKBOX_VALUE} from 'constants/ActionTypes';

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

function* getCategories(){
    const json = yield fetch('http://localhost:8081/api/listar-categorias')
    .then(response => response.json(), );    
    yield put({ type: GET_CATEGORY_SUCCESS, categories: json, });
}

function* getCategoryWatcher(){
    yield takeLatest(GET_CATEGORY, getCategories)
}

function* changeCheckboxValue(action){
    yield put({ type: CHANGE_CHECKBOX_VALUE_SUCCESS, category: action.payload});
}

function* changeCheckboxValueWatcher(){
    yield takeLatest(CHANGE_CHECKBOX_VALUE, changeCheckboxValue)
}

function* changeSourceCheckboxValue(action){
yield put({ type: CHANGE_SOURCESCHECKBOX_VALUE_SUCCESS, source: action.payload});
}

function* changeSourceCheckboxValueWatcher(){
    yield takeLatest(CHANGE_SOURCECHECKBOX_VALUE, changeSourceCheckboxValue)
}

function* getSourses(){
	const json = yield fetch('https://newsapi.org/v2/sources?apiKey=e16a574134f74d72a50d1ebb7c05b7b5')
    .then(response => response.json(), );    
    yield put({ type: GET_SOURSES_SUCCESS, sources: json, });
}

function* getSourcesWatcher(){
	yield takeLatest(GET_SOURSES, getSourses)
}

export default function* rootSaga() {
	yield all([
		actionWatcher(),
		listProfileWatcher(),
		createProfileWatcher(),
		getCategoryWatcher(),
		changeCheckboxValueWatcher(),
		getSourcesWatcher(),
		changeSourceCheckboxValueWatcher()
	]);
}
