import Immutable from 'immutable';

export function displayItems(state, action) {
	const data = action.payload || [];
	return state
		.setIn(['errorMsg', 'listView'], '')
		.set('items', Immutable.fromJS(data));
}

export function setAddItemView(state) {
	return state.setIn(['editMode', 'isEditing'], true)
		.setIn(['editMode', 'editIndex'], -1);
}

export function setEditItemView(state, action) {
	const editIndex = action.payload;
	return state.setIn(['editMode', 'isEditing'], true)
		.setIn(['editMode', 'editIndex'], editIndex);
}

export function cancelEditView(state) {
	return state
		.setIn(['errorMsg', 'editView'], '')
		.setIn(['editMode', 'isEditing'], false)
		.setIn(['editMode', 'editIndex'], -1)
}

export function setDeleteMode(state, action) {
	const deleteIndex = action.payload;
	return state
		.set('deleteIndex', deleteIndex);
}

export function cancelDeleteView(state) {
	return state
		.setIn(['errorMsg', 'deleteView'], '')
		.set('deleteIndex', -1);
}
