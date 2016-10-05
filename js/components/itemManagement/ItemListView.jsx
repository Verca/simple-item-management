import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';

import ItemList from './ItemList';
import ItemListHeader from './ItemListHeader';

export default class ItemListView extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
       <ItemListHeader />
       <ItemList />
      </div>
    );
  }
}
