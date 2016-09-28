import Promise from 'bluebird';
import { Observable } from 'rxjs';
import { fetchItems } from '../services/itemLoader';
import { displayList } from '../actions/actions';
import { LOAD_ITEMS, DISPLAY_LIST } from '../constants/actions';

export default action$ => action$
  .ofType(LOAD_ITEMS)
	.mergeMap(action =>
      Observable.from(fetchItems())
        .map(data => displayList(data))
    );
  //.mapTo(displayList()); //.mapTo({type: DISPLAY_LIST});


  // return action$;
  // .ofType(REQUEST_START_GAME)
  // .mergeMap(action =>
  //   Observable
  //     .fromPromise(Promise.all([tileLoader(), geometryLoader()]))
  //     .map(([tiles, geometry]) => startGame(tiles, geometry))
  // );
