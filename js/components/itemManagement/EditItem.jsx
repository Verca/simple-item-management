import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import Immutable from 'immutable';

import { saveItemClicked, cancelEditView } from '../../actions/actions';

const NOT_VALID_NUMBER_MSG = 'Must be a positive number like 1 or 1,9.';
const REQUIRED_MSG = 'This is a required field';

class EditItem extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    editIndex: React.PropTypes.number,
    items: React.PropTypes.instanceOf(Immutable.List),
    errorMsg: React.PropTypes.string,
  }

  constructor(props) {
    super(props);
    const { items, editIndex } = props;
    this.state = {
      name: editIndex < 0 ? '': items.get(editIndex).get('name'),
      price: editIndex < 0 ? '': items.get(editIndex).get('price'),
      picture: editIndex < 0 ? '': items.get(editIndex).get('picture'),
      _id: editIndex < 0 ? '': items.get(editIndex).get('_id')
    };

    this.onSaveClicked = (e) => {
      e.preventDefault();
      const item = {
        name: this.state.name.trim(),
        price: this.state.price.trim(),
        picture: this.state.picture.trim(),
        _id: this.state._id
      };

      this.props.dispatch(saveItemClicked(item));
    }; 

    this.onCancelClicked = (e) => {
      if(e.target.className === 'shadow_background' ||
        e.target.value === 'cancel') {
         e.preventDefault();
        this.props.dispatch(cancelEditView());
      }
    }; 

    this.onHandleChange = (event) => {
      const {name, validity} = event.target;
      if(name === 'price' || name === 'name') {
        if(validity.patternMismatch) {
          const message = name === 'name' ? 
            REQUIRED_MSG : NOT_VALID_NUMBER_MSG;
          event.target.setCustomValidity(message);
        } else {
          event.target.setCustomValidity('');
        }
      }
      let obj = {};
      obj[event.target.name] = event.target.value;
      this.setState(obj)
    }; 
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  renderErrorMessage() {
    const { errorMsg } = this.props;
    if(errorMsg) {
      return (<span className="error-msg">{errorMsg}</span>);
    }
    return false;
  }

  render() {
    return <div className="shadow_background" onClick={this.onCancelClicked}>
      <div className="page_modal">
        <form onSubmit={this.onSaveClicked}>
          <header>
            <h1>Edit Item</h1>
          </header>

          <section>

            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={this.state.name}
              onChange={this.onHandleChange} pattern=".*[^ ]+.*" required />

            <label htmlFor="price">Price</label>
            <input type="text" name="price" id="price" value={this.state.price}
              onChange={this.onHandleChange} pattern="^\d+([,]\d+)?" required />

            <label htmlFor="picture">Picture</label>
            <input name="picture" id="picture" value={this.state.picture}
              onChange={this.onHandleChange} />

            {this.renderErrorMessage()}
          </section>

          <footer>
            <button type="submit">Save</button>
            <button value="cancel">Cancel</button>
          </footer>
        </form>

      </div>
    </div>;
  }
}

export default connect(
  state => ({
    items: state.get('items'),
    editIndex: state.getIn(['editMode', 'editIndex']),
    errorMsg: state.getIn(['errorMsg', 'editView']),
  }))(EditItem);