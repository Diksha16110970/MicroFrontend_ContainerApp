"use client";

import { create } from "zustand";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// Only use localStorage in the browser
const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: () => set({ isAuthenticated: true }),
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? localStorage : undefined as unknown as StateStorage
      ),
    }
  )
);

export { useAuthStore };
