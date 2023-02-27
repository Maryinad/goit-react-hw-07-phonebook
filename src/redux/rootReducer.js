import { combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filterSlice';
import { phoneReducer } from './phoneBook/phoneSlice';

export const rootReducer = combineReducers({
  phonebook: phoneReducer,
  filterData: filterReducer,
});
