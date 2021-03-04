import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddColorForm.scss';
import { delay } from '../../helpers/settings';
import { Loader } from '../loaders/Loader.jsx';


const AddColorForm = ({onNewColor = f => f}) => {
  let _title, _color;
  const submit  = async (e) => {
    e.preventDefault();
    onNewColor(_title.value, _color.value);
    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  }

  return (
    <form onSubmit={submit} className="form-block">
      <input type="text"
              placeholder="color title..."
              className="color-input"
              ref={input => _title = input}
              required/>
      <input  type="color"
              className="color-btn"
              ref={input => _color = input}
              required/>
      <button>Add</button>
    </form>
  )
}


AddColorForm.propTypes = {
  onNewColor: PropTypes.func 
}

AddColorForm.defaultProps = {
  onNewColor: f=>f
}

export { AddColorForm };
