import { create } from "zustand";

export type Design={
    id:string,
    color:string,
    text:string,
    material:'Leather'|'Canvas'
}
type DesignState = {
  color: string;
  text: string;
  material:'Leather'|'Canvas'

  setColor: (color: string) => void;
  setText: (text: string) => void;
  setMaterial: (material:'Leather'|'Canvas')=>void;
  loadDesign:(design:Design)=>void;
  reset: () => void;
};


export const useDesignStore = create<DesignState>((set) => ({
  color: "black",
  text: "",
  material:"Leather",

  setColor: (color) => set({color}),
  setText: (text) => set({text}),
  setMaterial:(material)=>set({material}),
  loadDesign:(design)=>set({
    color:design.color,
    text:design.text,
    material:design.material
  }),

  reset: () =>
    set({
      color: "black",
      text: "",
    }),
}));
