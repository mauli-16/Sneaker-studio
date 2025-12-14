"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-4xl font-bold mb-4">
        Sneaker Studio 👟
      </h1>

      <p className="text-gray-600 mb-8 max-w-md">
        Design your own sneakers. Choose colors, materials, and make it yours.
      </p>

      <Button
        size="lg"
        onClick={() => router.push("/login")}
      >
        Get Started
      </Button>
    </main>
  );
}
