import { put, takeLatest, all } from 'redux-saga/effects';
import {LIST_PROFILES_SUCCEEDED, LIST_PROFILES} from "../constants/ActionTypes"

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

export default function* rootSaga() {
	yield all([
		actionWatcher(),
		listProfileWatcher()
	]);
}
