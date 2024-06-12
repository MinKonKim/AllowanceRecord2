import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
const useMonthStore = create(
  immer((set) => ({
    selectedMonth: 1,
    setSelectedMonth: (month) =>
      set((state) => {
        state.selectedMonth = month;
      }),
  }))
);

export default useMonthStore;
