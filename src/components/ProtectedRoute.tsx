"use client";
import { useEffect } from "react";
import { isAuthenticated } from "@/lib/auth"; // use your cookie-based check

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!isAuthenticated()) {
      window.location.href = "/";
    }
  }, []);

  return <>{children}</>;
}
