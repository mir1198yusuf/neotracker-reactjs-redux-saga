import {takeEvery, all} from "redux-saga/effects";

import {fetchNEOsAsync} from "./sagaworkers.js";

//root saga
function *watchAllSaga(){

	yield all([
		takeEvery("FETCH_NEOS_SAGA", fetchNEOsAsync),
	]);
}

export default watchAllSaga;