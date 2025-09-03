"use client";
import dynamic from "next/dynamic";
import { isAuthenticated } from "@/lib/auth";

const DashboardPage = dynamic(() => import("dashboard/DashboardPage"), {
  ssr: false,
  // loading: () => <div>Loading Dashboard...</div>,
});

export default function DashboardRoute() {
  if (typeof window === "undefined") return null;

  if (!isAuthenticated()) {
    window.location.href = "/";
    return null;
  }

  return <DashboardPage />;
}
