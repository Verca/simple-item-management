import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';

import { deleteItemConfirmed, cancelDeleteView } from '../../actions/actions';

class ItemListHeader extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    errorMsg: React.PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.onDeleteClicked = () => {
      this.props.dispatch(deleteItemConfirmed());
    };
    this.onCancelClicked = () => {
      this.props.dispatch(cancelDeleteView());
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  renderErrorMessage() {
    const { errorMsg } = this.props;
    if(errorMsg) {
      return (<p className="error-msg">{errorMsg}</p>);
    }
    return false;
  }

  render() {
    return (
      <div className="shadow_background">
        <div className="page_modal">
        <header>
          <h1>Delete Item</h1>
        </header>
        <section>
          <p>Are you sure you want to delete this item?</p>
          {this.renderErrorMessage()}
        </section>
        <footer>
          <button onClick={this.onDeleteClicked}>Delete</button>
          <button onClick={this.onCancelClicked}>Cancel</button>
        </footer>
        </div>
      </div>);
  }
}

export default connect(
  state => ({
    items: state.get('items'),
    errorMsg: state.getIn(['errorMsg', 'deleteView']),
  }))(ItemListHeader);