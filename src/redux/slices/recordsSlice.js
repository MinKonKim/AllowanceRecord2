import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../utils/LocalStorage";

const initialState = loadState() || [];

const recordsSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    addRecord: (state, action) => {
      state.push(action.payload);
    },
    updateRecord: (state, action) => {
      const index = state.findIndex(
        (record) => record.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteRecord: (state, action) => {
      return state.filter((record) => record.id !== action.payload.id);
    },
  },
});

export const { addRecord, updateRecord, deleteRecord } = recordsSlice.actions;
export default recordsSlice.reducer;
