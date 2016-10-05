import * as HttpUrls from '../constants/httpUrls';

export function handleAjaxError(state, action) {
	const requestURL = action.payload && action.payload.request.url;
	let msg;
	switch(requestURL){
		case HttpUrls.GET_LIST:
			console.error('Ajax error: cannot get list');
			msg = 'Error occurred while loading the list of items. Please try again.	';
			return state.setIn(['errorMsg', 'listView'], msg);
		case HttpUrls.EDIT_ITEM:
			console.error('Ajax error: cannot save the item');
			msg = 'Error occurred while saving the item. Please try again.';
			return state.setIn(['errorMsg', 'editView'], msg);
		case HttpUrls.DELETE_ITEM:
			console.error('Ajax error: cannot delete the item');
			msg = 'Error occurred while deleting the item. Please try again.';
			return state.setIn(['errorMsg', 'deleteView'], msg);
		default:
			console.error('Ajax error: unhandled type of error. Please specify it in errorHandlingReducer.');
	}
	return state;
}
