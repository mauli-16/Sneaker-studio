"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function TopBar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  const handleSave = () => {
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
