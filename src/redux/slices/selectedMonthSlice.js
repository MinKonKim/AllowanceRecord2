import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "", label: "" };
const selectedMonthSlice = createSlice({
  name: "selectedMonth",
  initialState,
  reducers: {
    setSelectedMonth: (state, action) => {
      // state를 action.payload로 업데이트합니다.
      return { ...state, ...action.payload };
    },
  },
});

export const { setSelectedMonth } = selectedMonthSlice.actions;
export default selectedMonthSlice.reducer;
