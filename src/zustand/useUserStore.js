import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
const useUserStore = create(
  immer((set) => ({
    user: {},
    setUser: (newUser) => set({ user: newUser }),
    updateUser: (updateFields) =>
      set((state) => ({ user: { ...state.user, ...updateFields } })),
  })),
  {
    // 로컬 스토리지에 저장
    name: "expenses-store",
  }
);

export default useUserStore;
