import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';

import EditItem from './itemManagement/EditItem';
import ItemListView from './itemManagement/ItemListView';
import DeleteModal from './itemManagement/DeleteModal';

class Application extends React.Component {
  static propTypes = {
    isEditing: React.PropTypes.bool,
    deleteIndex: React.PropTypes.number
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  renderModal() {
    const { deleteIndex, isEditing } = this.props;

    if(deleteIndex > -1) {
      return <DeleteModal />;
    }
    else if(isEditing) {
      return <EditItem />
    }
    return false;
  }

  render() {
    return (
        <div>
        {this.renderModal()}
        <ItemListView />
      </div>);
  }
}

export default connect(
  state => ({
    isEditing: state.getIn(['editMode', 'isEditing']),
    deleteIndex: state.getIn(['deleteIndex']),
  }))(Application);
