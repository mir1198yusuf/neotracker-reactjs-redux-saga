import {put, call} from "redux-saga/effects";

import {isFetchingNEOsTrue, updateDate, updateNEOsDetail, errorFetchNEOsFalse, isFetchingNEOsFalse, errorFetchNEOsTrue} from "./actioncreators.js";

import axios from "axios";

// function that returns axios call to fetch NEOS
const fetchNEOsAxios = (date) => {
	return axios.request({
		method : "get",
		url : `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=DEMO_KEY&detailed=true`
	}).then(res => res.data);
	//axios when called will return promise which will resolve to response object. then it will return res.data
}

function *fetchNEOsAsync(action){

	try{
		// is fetching : true
		yield put(isFetchingNEOsTrue());
		// fetch data from api
		const data = yield call(fetchNEOsAxios, action.newDate);
		// update date
		yield put(updateDate(action.newDate));
		// update neos detail
		yield put(updateNEOsDetail(data));
		// error : false
		yield put(errorFetchNEOsFalse());
		// is fetching : false
		yield put(isFetchingNEOsFalse());
	}
	catch(ex){
		// is fetching : false
		yield put(isFetchingNEOsFalse());
		// error : true
		yield put(errorFetchNEOsTrue());
	}
}

export {fetchNEOsAsync};