import { put, takeLatest, all } from 'redux-saga/effects';
import { CREATE_PROFILE, CREATE_PROFILE_SUCEDED } from '../constants/ActionTypes';

function* fetchNews() {
	const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
		.then(response => response.json());
	yield put({ type: "CONSTANT_VALUE", json: json.articles.id, });
}
function* actionWatcher() {
	yield takeLatest('GET_NEWS', fetchNews)
}

function* createProfile(action) {
	const json = yield fetch('http://localhost:8081/api/crear-perfil',
		{
			method: 'post',
			body: JSON.stringify(action.profile)
		});
	yield put({ type: CREATE_PROFILE_SUCEDED, createProfileSuceded: json.ok, });
}

function* createProfileWatcher() {
	yield takeLatest(CREATE_PROFILE, createProfile)
}

export default function* rootSaga() {
	yield all([
		actionWatcher(),
		createProfileWatcher(),
	]);
}
