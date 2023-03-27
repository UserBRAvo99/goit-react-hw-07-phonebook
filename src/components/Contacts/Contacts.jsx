import { removeContacts } from 'components/redux/contactSlice';
import { selectFilteredContacts } from 'components/redux/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './contacts.module.scss';

function Contacts() {
  const dispatch = useDispatch();
  const userContactsFilter = useSelector(selectFilteredContacts);

  return (
    <ul className={style.list}>
      {userContactsFilter.map(({ name, number, id }) => {
        return (
          <li key={id} id={id} className={style.item}>
            <span className={style.name}>{name}</span>
            <span className={style.number}>{number}</span>
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
