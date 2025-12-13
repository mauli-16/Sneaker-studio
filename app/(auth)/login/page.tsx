"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function LoginPage() {
    const router=useRouter()
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const handleSubmit=async(e: React.FormEvent)=>{
        e.preventDefault();
        const res=await fetch("/api/auth/login", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({email,password}), 
        })
          if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Invalid credentials");
        return;
      }
      const data = await res.json();
      localStorage.setItem("token", data.token);
   

      router.push("/dashboard");
    }

    
    return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20 space-y-4">
      <h1 className="text-2xl font-bold">LOGIN</h1>

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
}