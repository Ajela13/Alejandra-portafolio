import { create } from "zustand";

const useNavbarStore = create((set) => ({
  menuOpen: false,
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
}));

export default useNavbarStore;
