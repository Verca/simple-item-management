import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';

import ItemList from './itemManagement/ItemList';

class Application extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
       <ItemList />
      </div>
    );
  }
}

export default connect(
  state => ({
    game: state.get('game'),
  }),
  dispatch => ({})
)(Application);
