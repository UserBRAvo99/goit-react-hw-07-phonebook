import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6421a8b034d6cd4ebd78e8ca.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/fetchAddContact',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', text);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRemoveContacts = createAsyncThunk(
  'contacts/fetchRemoveContacts',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
  {
    //  condition - запобігає помилкам при швидких/постійних запитах на бек
    condition: (_, { getState }) => {
      const loading = getState().contacts.isLoading;
      if (loading) {
        return false;
      }
    },
  }
);
