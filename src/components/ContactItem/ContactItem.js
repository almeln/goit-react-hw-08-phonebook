import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


import css from './ContactItem.module.css';

const ContactItem = ({ name, number, onDelete }) => (
  <>
    <p>
      <span className={css.contactItemName}>{name}:</span>
      <span className={css.contactItemNumber}>{number}</span>
      <Button variant="outline-primary" type="button" onClick={onDelete}>
        Delete
      </Button>
    </p>
  </>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
