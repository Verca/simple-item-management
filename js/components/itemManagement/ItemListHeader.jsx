import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';

import { addItemClicked } from '../../actions/actions';

class ItemListHeader extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func
  }

  constructor(props) {
    super(props);

    this.onAddClicked = () => {
      this.props.dispatch(addItemClicked());
    }; 
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className="list_view" id="list_view_header">
        <button id="add-button" onClick={this.onAddClicked}>
          <img src="./assets/img/plus.png" />
          Create product
        </button>
        <h1>Product Library</h1>
      </div>);
  }
}

export default connect()(ItemListHeader);