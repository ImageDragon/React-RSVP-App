import React from 'react';
import PropTypes from 'prop-types';

const GuestName = props => {
  if(props.isEditing){
    return (
      <input
      type='text'
      value={props.children}
      onChange={props.handleNameEdits} />
    );
  }
  return (
    <span>
      {props.children}
    </span>
  );
};

GuestName.propTypes = {
  isEditing: PropTypes.bool.inRequired,
  handleNameEdits: PropTypes.func.inRequired
}

export default GuestName;
