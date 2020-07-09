function dateReducer(state=undefined, action){
	switch (action.type){
		case "UPDATE_DATE" :
			return action.newDate

		default:
			return state
	}
}

function isFetchingNEOsReducer(state=false, action){
	switch(action.type){
		case "FETCH_NEOS_TRUE" :
			return action.isFetching 

		case "FETCH_NEOS_FALSE" :
			return action.isFetching

		default : 
			return state 
	}
}

function errorFetchNEOSReducer(state=false, action){
	switch (action.type){
		case "ERROR_FETCH_NEOS_TRUE" : 
			return action.errorFetchingNEOS

		case "ERROR_FETCH_NEOS_FALSE" : 
			return action.errorFetchingNEOS

		default : 
			return state
	}
}

function neosDetailReducer(state={}, action){
	switch (action.type) {
		case "UPDATE_NEOS_DETAIL":
			return action.neosDetail 

		default : 
			return state 
	}
}

function rootReducer(state={}, action){
	return {
		date : dateReducer(state.date, action),
		isFetchingNEOs : isFetchingNEOsReducer(state.isFetchingNEOs, action),
		errorFetchNEOS : errorFetchNEOSReducer(state.errorFetchNEOS, action),
		neosDetail : neosDetailReducer(state.neosDetail, action),
	}
}

export {rootReducer};