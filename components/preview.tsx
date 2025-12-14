"use client";

import Image from "next/image";
import { useDesignStore } from "../app/store/customizerstore";

export default function Preview() {
  const { color, material, text } = useDesignStore();

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-100">
      <div className="relative w-[420px] h-[260px]">
        
        <Image src="/shoes.png" alt="Sneaker" fill className="object-contain"/>

        <div className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            backgroundColor: color,
            mixBlendMode: "multiply",
            opacity: material === "Leather" ? 0.85 : 0.6,
          }}
        />

        {text && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/70 px-3 py-1 rounded text-sm font-semibold">{text} </div>
        )}

        
        <div className="absolute top-2 right-2 text-xs bg-black text-white px-2 py-1 rounded">
          {material}
        </div>
      </div>
    </div>
  );
}
