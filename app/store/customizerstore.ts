import { create } from "zustand";

type DesignState = {
  color: string;
  text: string;
  material:'Leather'|'Canvas'

  setColor: (color: string) => void;
  setText: (text: string) => void;
  setMaterial: (material:'Leather'|'Canvas')=>void;
  reset: () => void;
};

export const useDesignStore = create<DesignState>((set) => ({
  color: "black",
  text: "",
  material:"Leather",

  setColor: (color) => set({color}),
  setText: (text) => set({text}),
  setMaterial:(material)=>set({material}),

  reset: () =>
    set({
      color: "black",
      text: "",
    }),
}));
