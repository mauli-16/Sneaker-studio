"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useDesignStore } from "@/app/store/customizerstore";
import { json } from "stream/consumers";

export default function TopBar() {
  const router = useRouter();
  const {color,material,text}=useDesignStore();

  const handleLogout=async()=>{
  await fetch("/api/auth/logout", {
    method: "POST",
  });
  router.push("/login");
};


  const handleSave=()=>{
    const design = {id: crypto.randomUUID(),color,material,text };
    const existing=JSON.parse(localStorage.getItem("designs")||"[]");
    const updated=[...existing,design];
    localStorage.setItem("designs",JSON.stringify(updated));
    alert("Design saved");
    
  };

  return (
    <header className="w-full h-16 px-6 flex items-center justify-between border-b bg-white">
    
      <h1 className="text-xl font-bold">Sneaker Studio 👟</h1>

      
      <div className="flex gap-3">
        <Button onClick={handleSave}>
          Save Design
        </Button>

        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
}
