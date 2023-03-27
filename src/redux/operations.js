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

export const addContact = createAsyncThunk(
  'contacts/fetchContacts',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/contact', { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
