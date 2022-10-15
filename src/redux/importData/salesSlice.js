const { createSlice } = require('@reduxjs/toolkit');

const salesSlice = createSlice({
  name: 'sales',
  initialState: {
    data: [],
  },
  reducers: {
    setFileData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setFileData } = salesSlice.actions;

export const salesReducer = salesSlice.reducer;
