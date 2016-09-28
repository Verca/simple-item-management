import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';

class ItemList extends React.Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    // const game = this.props.game;

    return <div className="">
      THIS IS LIST OF ITEMS
    </div>;
  }
}

export default connect(
  state => ({
    game: state.get('game'),
  }),
  dispatch => ({})
)(ItemList);