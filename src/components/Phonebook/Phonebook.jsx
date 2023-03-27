import React from 'react';
import { useState } from 'react';

import shortid from 'shortid';

import Filter from 'components/Filter';
import FormPhonebook from 'components/FormPhonebook';
import Contacts from 'components/Contacts';

import style from './phonebook.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'components/redux/selectors';
import { addContacts } from 'components/redux/contactSlice';

function Phonebook() {
  const userContacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;

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

  const formOnSubmitBtn = event => {
    event.preventDefault();

    if (userContacts.find(elem => elem.name === name)) {
      alert(`${name} is already in contacts`);
      resetFormInput();
      return;
    }

    dispatch(
      addContacts({
        name: name.trim(),
        number: number.trim(),
        id: shortid(),
      })
    );
    resetFormInput();
  };

  const resetFormInput = () => {
    setName('');
    setNumber('');
  };
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Phonebook</h2>
      <FormPhonebook
        submit={formOnSubmitBtn}
        name={name}
        number={number}
        change={handleInputChange}
      />
      <div>
        <h2 className={style.title}>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    </div>
  );
}

export default Phonebook;
