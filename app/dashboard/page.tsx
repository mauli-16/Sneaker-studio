"use client";

import { useEffect } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import TopBar from "..//../components/topbar";
import Sidebar from "..//../components/sidebar";
import Preview from "..//../components/preview";
import Gallery from "..//../components/gallery";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function DashboardPage() {
  const router = useRouter();

  const cookieStore = await cookies();
  const token = cookieStore.get("token");
   if (!token) {
    redirect("/login");
  }
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
