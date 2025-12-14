"use client";

import { useEffect, useState } from "react";
import { useDesignStore, type Design } from "@/app/store/customizerstore";
import { Button } from "@/components/ui/button";

export default function Gallery() {

  const loadDesign = useDesignStore((state) => state.loadDesign);
  const [designs, setDesigns] = useState<Design[]>([]);

  const [colorFilter, setColorFilter] = useState("all");
  const [materialFilter, setMaterialFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);


  const filteredDesigns = designs.filter((d) => {
    const colorMatch =
      colorFilter === "all" || d.color === colorFilter;
    const materialMatch =
      materialFilter === "all" || d.material === materialFilter;

    return colorMatch && materialMatch;
  });

  useEffect(() => {
    const saved = localStorage.getItem("designs");
    if (saved) setDesigns(JSON.parse(saved));
  }, []);

  useEffect(() => {
  setVisibleCount(6);
}, [colorFilter, materialFilter]);

useEffect(() => {
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      setVisibleCount((prev) =>
        Math.min(prev + 6, filteredDesigns.length)
      );
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [filteredDesigns.length]);


  const deleteDesign = (id: string) => {
    const updated = designs.filter((d) => d.id !== id);
    setDesigns(updated);
    localStorage.setItem("designs", JSON.stringify(updated));
  };

  return (
    <>
    <div className="flex gap-4 mb-4 mt-4">
  <select
    value={colorFilter}
    onChange={(e) => setColorFilter(e.target.value)}
    className="border px-2 py-1 rounded"
  >
    <option value="all">All Colors</option>
    <option value="black">Black</option>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
  </select>

  <select
    value={materialFilter}
    onChange={(e) => setMaterialFilter(e.target.value)}
    className="border px-2 py-1 rounded"
  > 
    <option value="all">All Materials</option>
    <option value="Leather">Leather</option>
    <option value="Canvas">Canvas</option>
  </select>
  </div> 
    <div className="p-4 border-t">
      <h2 className="font-semibold mb-3">Saved Designs</h2>

      {designs.length === 0 && (
        <p className="text-sm text-gray-500">No saved designs</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredDesigns.slice(0, visibleCount).map((design) => (
          <div
            key={design.id}
            className="border rounded p-3 space-y-2"
          >
            <div
              className="h-16 rounded"
              style={{ backgroundColor: design.color }}
            />

            <p className="text-xs">{design.material}</p>
            <p className="text-xs italic">{design.text || "No text"}</p>

            <Button
              size="sm"
              onClick={() => loadDesign(design)}
              className="w-full"
            >
              Load
            </Button>

            <Button
              size="sm"
              variant="destructive"
              onClick={() => deleteDesign(design.id)}
              className="w-full"
            >
              Delete
            </Button>
          </div>
        ))}
        
      </div>
    </div>
    </>
  );
}
