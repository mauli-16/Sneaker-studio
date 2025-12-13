"use client";

import { useDesignStore } from "../app/store/customizerstore";

export default function Sidebar() {
  const color = useDesignStore((state) => state.color);
  const setColor = useDesignStore((state) => state.setColor);

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
    </div>
  );
}
