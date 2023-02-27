const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filterData',

  initialState: {
    filter: '',
  },

  reducers: {
    setFilterAction(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilterAction } = filterSlice.actions;
// Редюсер слайса
export const filterReducer = filterSlice.reducer;
