export const isFetchingNEOsTrue = () => ({
	type : "FETCH_NEOS_TRUE",
	isFetching : true,
});

export const isFetchingNEOsFalse = () => ({
	type : "FETCH_NEOS_FALSE",
	isFetching : false,
});

export const fetchNEOsSaga = (date) => ({
	type : "FETCH_NEOS_SAGA",
	newDate : date,
});

export const updateDate = (date) => ({
	type : "UPDATE_DATE",
	newDate : date,
});

export const updateNEOsDetail = (data) => ({
	type : "UPDATE_NEOS_DETAIL",
	neosDetail : data,
});

export const errorFetchNEOsTrue = () => ({
	type : "ERROR_FETCH_NEOS_TRUE",
	errorFetchingNEOS : true,
});

export const errorFetchNEOsFalse = () => ({
	type : "ERROR_FETCH_NEOS_FALSE",
	errorFetchingNEOS : false,
});