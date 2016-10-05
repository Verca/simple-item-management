import { combineEpics } from 'redux-observable';
import loadItemsEpic from './loadItemsEpic';
import saveItemEpic from './saveItemEpic';
import deleteItemEpic from './deleteItemEpic';

export default combineEpics(
  deleteItemEpic,
  loadItemsEpic,
  saveItemEpic,
);
