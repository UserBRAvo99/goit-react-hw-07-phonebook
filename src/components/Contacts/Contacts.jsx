import { removeContacts } from 'redux/contactSlice';
import { selectContacts } from 'redux/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './contacts.module.scss';

function Contacts() {
  const dispatch = useDispatch();
  const userContactsFilter = useSelector(selectContacts);

  return (
    <ul className={style.list}>
      {userContactsFilter.map(({ name, phone, id }) => {
        return (
          <li key={id} id={id} className={style.item}>
            <span className={style.name}>{name}</span>
            <span className={style.phone}>{phone}</span>
            <button
              className={style.btn}
              type="button"
              onClick={() => {
                dispatch(removeContacts(id));
              }}
              id={id}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Contacts;
