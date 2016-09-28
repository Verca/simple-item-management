import * as Reducers from './itemManagementReducer';
import * as Actions from '../constants/actions';

export default (state, action) => {
	switch(action.type) {
		case Actions.DISPLAY_LIST:
			return Reducers.displayItems(state, action);

		case Actions.LOAD_ITEMS:
			return Reducers.loadItems(state, action);

		default:
			return state;
	}
};
