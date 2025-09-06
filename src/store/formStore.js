import { create } from "zustand";

export const useFormStore = create((set) => ({
  form: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  },
  status: "",
  setForm: (newForm) => set({ form: newForm }),
  setStatus: (newStatus) => set({ status: newStatus }),
}));
