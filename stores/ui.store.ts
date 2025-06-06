// stores/uiStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UIState = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "ui-storage", // localStorage key
    }
  )
);
