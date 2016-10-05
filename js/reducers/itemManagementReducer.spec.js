import { expect } from 'chai';

import initialState from '../initialState';
import { displayItems, setAddItemView } from './itemManagementReducer';

describe('displayItems reduction', () => {
  let state;
  let data;
  beforeEach(() => {
    data = [
      {name: '1', price: '9'},
      {name: '2', price: '10'}
    ];
    const action = { type: '', payload: data};
    state = displayItems(initialState, action);
  });
  it('should save inc data into the state', () => {
    expect(state.getIn(['items', 0, 'name'])).to.equal(data[0].name);
    expect(state.get('items').size).to.equal(2);
  });
  it('should reset list view error message', () => {
    expect(state.getIn(['errorMsg', 'listView'])).to.equal('');
  });
});

describe('setAddItemView reduction', () => {
  let state;
  beforeEach(() => {
    const action = { type: '', payload: {}};
    state = setAddItemView(initialState, action);
  });
  it('should set edit mode to true', () => {
    expect(state.getIn(['editMode', 'isEditing'])).to.equal(true);
  });
  it('should reset editing index', () => {
    expect(state.getIn(['editMode', 'editIndex'])).to.equal(-1);
  });
});