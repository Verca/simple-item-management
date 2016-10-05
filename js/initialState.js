import Immutable from 'immutable';

export default Immutable.fromJS({
	items: [],
	editMode: {
		isEditing: false,
		editIndex: -1
	},
	deleteIndex: -1,
	errorMsg: {
		listView: '',
		editView: '',
		deleteView: ''
	}
});
