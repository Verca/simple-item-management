import build from './build';
import * as Actions from '../constants/actions';

export function loadItems() {
  return build(Actions.LOAD_ITEMS);
}

export function displayList(data) {
  return build(Actions.DISPLAY_LIST, data);
}

export function cancelEditView() {
	return build(Actions.CANCEL_EDIT_VIEW);
}

export function addItemClicked() {
	return build(Actions.ADD_ITEM_CLICKED);
}

export function editItemClicked(index) {
	return build(Actions.EDIT_ITEM_CLICKED, index);
}

export function saveItemClicked(data) {
	return build(Actions.SAVE_ITEM_CLICKED, data);
}

export function deleteItemClicked(index) {
	return build(Actions.DELETE_ITEM_CLICKED, index);
}

export function cancelDeleteView() {
	return build(Actions.CANCEL_DELETE_VIEW);
}

export function deleteItemConfirmed() {
	return build(Actions.DELETE_ITEM_CONFIRMED);
}

export function processAjaxError(error) {
	return build(Actions.PROCESS_AJAX_ERROR, error);
}
