import { create } from "zustand";
import usersData from "../../constants/usersData";

type Login = {
  user: {
    id: 1;
    nick: string;
    password: string;
    name: string;
    orderer: boolean;
  } | null;
  authorizeLogin: (id: number) => void;
};
export const useUser = create<Login>()((set) => ({
  user: usersData[0],
  authorizeLogin: (id: number) => set(() => ({ user: usersData[id - 1] })),
}));
