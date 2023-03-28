import React, { useEffect } from 'react';
import { useState } from 'react';

import Filter from 'components/Filter';
import FormPhonebook from 'components/FormPhonebook';
import Contacts from 'components/Contacts';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectLoading } from 'redux/selectors';
import { fetchAddContact, fetchContacts } from 'redux/operations';

import style from './phonebook.module.scss';
import Loader from 'components/Loader';

function Phonebook() {
  const userContacts = useSelector(selectContacts);

  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
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
      fetchAddContact({
        name: name.trim(),
        phone: phone.trim(),
      })
    );
    resetFormInput();
  };

  const resetFormInput = () => {
    setName('');
    setPhone('');
  };
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Phonebook</h2>
      <FormPhonebook
        submit={formOnSubmitBtn}
        name={name}
        phone={phone}
        change={handleInputChange}
      />
      <div>
        <h2 className={style.title}>Contacts</h2>
        <Filter />
        {isLoading && <Loader />}
        <Contacts />
      </div>
    </div>
  );
}

export default Phonebook;
