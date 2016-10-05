import { Observable } from 'rxjs';
import { displayList } from '../actions/actions';
import { LOAD_ITEMS, PROCESS_AJAX_ERROR } from '../constants/actions';
import { GET_LIST } from '../constants/httpUrls';

// This epic handles LOAD_ITEMS action: calls 
// ajax get request and processes data or errors
export default action$ => action$
  .ofType(LOAD_ITEMS)
	.mergeMap(action => 
    // new date is to prevent caching the request by ie
    Observable.ajax.getJSON(GET_LIST + '/' + (new Date()).getTime())
      .map(data => displayList(data))
      .catch(error => Observable.of({
          type: PROCESS_AJAX_ERROR,
          payload: error,
          error: true
      }))
    );
