"use client";

import { useDesignStore } from "../app/store/customizerstore";

export default function Sidebar() {
   const { color, material, text, setColor, setMaterial, setText } =
    useDesignStore();
  return (
    <div className="w-64 p-4 border-r space-y-4">
      <h2 className="text-lg font-semibold">Customizer</h2>

      <div>
        <label className="block text-sm mb-1">Sneaker Color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full h-10 cursor-pointer"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Material</label>
        <div className="flex gap-2">
          <button
            onClick={() => setMaterial("Leather")}
            className={`flex-1 p-2 rounded border ${
              material === "Leather" ? "bg-black text-white" : ""
            }`}
          >
            Leather
          </button>
          <button
            onClick={() => setMaterial("Canvas")}
            className={`flex-1 p-2 rounded border ${
              material === "Canvas" ? "bg-black text-white" : ""
            }`}
          >
            Canvas
          </button>
        </div>
      </div>

      
      <div>
        <label className="block text-sm mb-1">Engraving Text</label>
        <input
          type="text"
          placeholder="My Custom Kick"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
    
    </div>
  );
}
