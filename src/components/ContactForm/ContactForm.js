import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { addContact } from 'redux/contacts/contacts-operations';
import { getItems } from 'redux/contacts/contacts-selectors';

import css from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getItems);

  const dispatch = useDispatch();

  console.log(name);

  const handleInputChange = event => {
    console.log(number);
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const doubleContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (doubleContact) {
      toast.error(`${name} is alredy in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form className={css.form} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control className={css.formInput}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupNumber">
          <Form.Label>Number</Form.Label>
          <Form.Control className={css.formInput}
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          placeholder="Enter number" />
        </Form.Group>
        <Button type="submit" className={css.formInputBtn}>Add contact</Button>

      </Form>
    </>
  );
}
