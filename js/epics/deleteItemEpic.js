import { Observable } from 'rxjs';
import { loadItems,cancelDeleteView } from '../actions/actions';
import { DELETE_ITEM_CONFIRMED, PROCESS_AJAX_ERROR } from '../constants/actions';
import { DELETE_ITEM } from '../constants/httpUrls';

// This epic waits for DELETE_ITEM_CONFIRMED and tries to delete it
// from the database. Then it hide the delete modal and loads a fresh
// list of items.
export default (action$, store) => action$
  .ofType(DELETE_ITEM_CONFIRMED)
  .mergeMap(action => {
    //get id from index in the displayed list
    const index = store.getState().get('deleteIndex');
    const items = store.getState().get('items');
    const deleteId = items.getIn([index, '_id']);

    return Observable.ajax.delete(DELETE_ITEM + '/' + deleteId)
      .concatMap(ajaxResult =>
        Observable.of(cancelDeleteView(), loadItems()))
        .catch(error => Observable.of({
          type: PROCESS_AJAX_ERROR,
          payload: error,
          error: true
        }))
  })
  