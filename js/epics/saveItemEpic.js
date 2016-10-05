import { Observable } from 'rxjs';
import { cancelEditView, loadItems } from '../actions/actions';
import { SAVE_ITEM_CLICKED, PROCESS_AJAX_ERROR } from '../constants/actions';
import { EDIT_ITEM } from '../constants/httpUrls';

// This epic gets data from SAVE_ITEM_CLICKED and tries to save it
// into the database. Then it cancels the edit view and loads a fresh
// list of items.
export default (action$, store) => action$
  .ofType(SAVE_ITEM_CLICKED)
	.mergeMap(action => 
    Observable.ajax.post(EDIT_ITEM, action.payload).concatMap(ajaxResult =>
    Observable.of(cancelEditView(), loadItems()))
    .catch(error => Observable.of({
          type: PROCESS_AJAX_ERROR,
          payload: error,
          error: true }))
    )