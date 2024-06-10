import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "../../utils/LocalStorage";
import recordsSlice from "../slices/recordsSlice";
import selectedMonthSlice from "../slices/selectedMonthSlice";
const preloadedState = loadState();
const store = configureStore({
  reducer: {
    records: recordsSlice,
    selectedMonth: selectedMonthSlice,
  },
  preloadedState,
});
store.subscribe(() => {
  saveState(store.getState().records);
});

export default store;
