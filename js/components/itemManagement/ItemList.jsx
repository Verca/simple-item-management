import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import Immutable from 'immutable';

import { editItemClicked, deleteItemClicked } from '../../actions/actions';
const NO_IMG_SRC = './assets/img/noimg.png'
class ItemList extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    items: React.PropTypes.instanceOf(Immutable.List),
    errorMsg: React.PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.onEditClick = (index) => {
      this.props.dispatch(editItemClicked(index));
    }
    this.onDeleteClick = (index) => {
      this.props.dispatch(deleteItemClicked(index));
    }
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

  renderImage(itemImgSrc) {
    const src = itemImgSrc || NO_IMG_SRC;
    return <img src={src} />;
  }

  renderItemRows() {
    const { items } = this.props;

    return items.map((item, index) => (
      <tr key={item.get('_id')}>
        <td>{this.renderImage(item.get('picture'))}</td>
        <td>{item.get('name')}</td>
        <td>€{item.get('price')}</td>
        <td className='edit'>
          <button id="edit-button" onClick={this.onEditClick.bind(this, index)} />
          <button id="delete-button" onClick={this.onDeleteClick.bind(this, index)} />
        </td>
      </tr>
    ));
  }

  render() {
    return (<div className="list_view">
      <table>
        <thead>
          <tr>
            <th>image</th>
            <th>product name</th>
            <th>price</th>
            <th className="edit">edit</th>
          </tr>
        </thead>
        <tbody>
          {this.renderItemRows()}
        </tbody>
      </table>
      {this.renderErrorMessage()}
    </div>);
  }
}

export default connect(
  state => ({
    items: state.get('items'),
    errorMsg: state.getIn(['errorMsg', 'listView']),
  }))(ItemList);
