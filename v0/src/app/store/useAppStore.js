import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAppStore = create(
  persist(
    (set) => ({
      // Theme
      theme: "light",

      setTheme: (theme) => set({ theme }),

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),

      // Activity data
      activities: [],

      addActivity: (activity) =>
        set((state) => ({
          activities: [
            {
              ...activity,
              id: crypto.randomUUID(),
              createdAt: new Date().toISOString(),
            },
            ...state.activities,
          ],
        })),

      // Selected activity
      selectedActivity: null,

      selectActivity: (activity) => set({ selectedActivity: activity }),

      clearSelectedActivity: () => set({ selectedActivity: null }),
    }),
   {
  name: "whats-today-app",
  storage: createJSONStorage(() => localStorage),
  skipHydration: true,
  partialize: (state) => ({
    theme: state.theme,
    activities: state.activities,
  }),
}
  ),
);