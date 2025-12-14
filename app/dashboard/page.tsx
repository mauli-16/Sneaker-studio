"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TopBar from "..//../components/topbar";
import Sidebar from "..//../components/sidebar";
import Preview from "..//../components/preview";
import Gallery from "..//../components/gallery";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function DashboardPage() {
  const router = useRouter();

 

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
