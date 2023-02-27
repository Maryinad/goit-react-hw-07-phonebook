import { createSlice } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContacts,
  getContacts,
} from './phoneBookOperations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
};

const phonebookSlice = createSlice({
  // Имя слайса
  name: 'phonebook',
  // Начальное состояние редюсера слайса
  initialState: initialState,
  // Объект редюсеров.

  extraReducers: builder =>
    builder
      .addCase(getContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // add contact

      .addCase(addContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [action.payload, ...state.contacts];
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // delete contact
      .addCase(deleteContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

// Генераторы экшенов
// export const {
//   addContactsAction,
//   deleteContactsAction,
//   setInputContacts,
//   setIsLoading,
//   setError,
// } = phonebookSlice.actions;
// Редюсер слайса
export const phoneReducer = phonebookSlice.reducer;
