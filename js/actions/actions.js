import build from './build';
import * as Actions from '../constants/actions';

export function displayList(data) {
  return build(Actions.DISPLAY_LIST, {data});
}

export function loadItems() {
  return build(Actions.LOAD_ITEMS);
}
