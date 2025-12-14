"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TopBar from "..//../components/topbar";
import Sidebar from "..//../components/sidebar";
import Preview from "..//../components/preview";
import Gallery from "..//../components/gallery";

export const dynamic = "force-dynamic";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, [router]);

  return (
    <div className="h-screen flex flex-col">
      <TopBar />

      <div className="flex flex-1">
        <Sidebar />
        <Preview />
      </div>
      {/* <AiSuggestion/> */}
      <Gallery />
    </div>
  );
}
