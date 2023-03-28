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
    // addContacts(state, action) {
    //   state.contacts.unshift(action.payload);
    // },
    // removeContacts(state, action) {
    //   const contactIndex = state.contacts.find(
    //     contact => contact.id !== action.payload
    //   );

    //   state.contacts.splice(contactIndex, 1);
    // },
    setFilterContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchAddContact.pending](state) {
      state.isLoading = true;
    },
    [fetchAddContact.fulfilled](state, action) {
      console.log(action.payload.text);
      state.isLoading = false;
      state.error = null;
      state.contacts.items.push(action.payload);
    },
    [fetchAddContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchRemoveContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchRemoveContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.items.findIndex(
        task => task.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [fetchRemoveContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addContacts, removeContacts, setFilterContacts } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
