import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddContact,
  fetchContacts,
  fetchRemoveContacts,
} from './operations';

export const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'CONTACTS',
  initialState,
  reducers: {
    // фільтрація контакті по імені
    setFilterContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    // отримую контакти по запиту на бек

    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    // додаю контакт до беку

    [fetchAddContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchAddContact.fulfilled](state, action) {
      console.log(action.payload.text);
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [fetchAddContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    //видаляю контакт з беку

    [fetchRemoveContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchRemoveContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        task => task.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [fetchRemoveContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

export const { addContacts, removeContacts, setFilterContacts } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
