import { combineEpics } from 'redux-observable';
import loadItemsEpic from './loadItemsEpic';

export default combineEpics(
  loadItemsEpic,
);
