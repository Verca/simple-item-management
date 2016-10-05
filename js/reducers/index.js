import * as ItemManagement from './itemManagementReducer';
import * as ErrorHandling from './errorHandlingReducer';
import * as Actions from '../constants/actions';

export default (state, action) => {
	switch(action.type) {
		case Actions.DISPLAY_LIST:
			return ItemManagement.displayItems(state, action);

		case Actions.ADD_ITEM_CLICKED:
			return ItemManagement.setAddItemView(state, action);

		case Actions.EDIT_ITEM_CLICKED:
			return ItemManagement.setEditItemView(state, action);

		case Actions.CANCEL_EDIT_VIEW:
			return ItemManagement.cancelEditView(state, action);

		case Actions.DELETE_ITEM_CLICKED:
			return ItemManagement.setDeleteMode(state, action);

		case Actions.CANCEL_DELETE_VIEW:
			return ItemManagement.cancelDeleteView(state, action);

		case Actions.PROCESS_AJAX_ERROR:
			return ErrorHandling.handleAjaxError(state, action);

		default:
			return state;
	}
};
