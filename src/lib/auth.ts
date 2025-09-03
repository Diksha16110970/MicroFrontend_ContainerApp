// lib/auth.ts
"use client";
import Cookies from "js-cookie";

const AUTH_COOKIE = "auth-token";

// Set login cookie
export const login = () => {
  Cookies.set(AUTH_COOKIE, "true", { expires: 1 }); // expires in 1 day
};

// Remove cookie on logout
export const logout = () => {
  Cookies.remove(AUTH_COOKIE);
};

// Check authentication
export const isAuthenticated = () => {
  return Cookies.get(AUTH_COOKIE) === "true";
};
