import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useUserStore = create(
  persist(
    immer((set) => ({
      user: null,
      setUser: (newUser) => set({ user: newUser }),
      updateUser: (updateFields) =>
        set((state) => ({ user: { ...state.user, ...updateFields } })),
    })),
    {
      name: "user-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useUserStore;
