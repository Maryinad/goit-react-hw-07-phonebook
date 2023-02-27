import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addPhoneContacts,
  deletePhoneContacts,
  fetchContacts,
} from 'services/phoneBookApi';

export const getContacts = createAsyncThunk(
  'phonebook/getContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'phonebook/addContacts',
  async (contact, thunkApi) => {
    try {
      const contacts = await addPhoneContacts(contact);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'phonebook/deleteContacts',
  async (id, thunkApi) => {
    try {
      const contacts = await deletePhoneContacts(id);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
