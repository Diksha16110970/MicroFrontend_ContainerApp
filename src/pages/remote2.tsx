"use client";

import dynamic from "next/dynamic";
import { isAuthenticated } from "@/lib/auth";

const RemotePage = dynamic(() => import("remote2/RemotePage"), {
  ssr: false,
  // loading: () => <div>Loading Remote 2...</div>,
});

export default function Remote2Route() {
  if (typeof window === "undefined") return null;

  if (!isAuthenticated()) {
    window.location.href = "/";
    return null;
  }

  return <RemotePage />;
}
