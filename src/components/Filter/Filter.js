import React from 'react';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'

import { changeFilter } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
    <Form.Label>Find contacts by name</Form.Label>
    <InputGroup>
      <Form.Control
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}>
      </Form.Control>
    </InputGroup>
    </>
  );
};

export default Filter;
