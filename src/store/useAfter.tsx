import { create } from "zustand";

type After = {
  after: boolean | null;
  setAfter: (bool: boolean) => void;
};

export const useAfter = create<After>()((set) => ({
  after: null,
  setAfter: (bool) => set(() => ({ after: bool })),
}));
