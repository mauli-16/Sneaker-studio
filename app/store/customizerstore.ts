import { create } from "zustand";

type DesignState = {
  color: string;
  text: string;

  setColor: (color: string) => void;
  setText: (text: string) => void;
  reset: () => void;
};

export const useDesignStore = create<DesignState>((set) => ({
  color: "black",
  text: "",

  setColor: (color) => set({ color }),
  setText: (text) => set({ text }),

  reset: () =>
    set({
      color: "black",
      text: "",
    }),
}));
