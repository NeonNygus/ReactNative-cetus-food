import { create } from "zustand";

type Login = {
  logged: boolean;
  logIn: () => void;
  logOut: () => void;
};
export const useLogin = create<Login>()((set) => ({
  logged: true,
  logIn: () => set(() => ({ logged: true })),
  logOut: () => set(() => ({ logged: false })),
}));
