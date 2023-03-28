import React from 'react';

import style from './filter.module.scss';
import { useDispatch } from 'react-redux';
import { setFilterContacts } from 'redux/contactSlice';

function Filter() {
  const dispatch = useDispatch();

  const inputFilterContacts = event => {
    dispatch(setFilterContacts(event.currentTarget.value.toLowerCase().trim()));
  };
  return (
    <div className={style.box}>
      <p className={style.title}>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        onInput={inputFilterContacts}
      />
    </div>
  );
}

export default Filter;
