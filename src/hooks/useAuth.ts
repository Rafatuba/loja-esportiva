import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  setUsername: (usuario: string) => void;
  setUserEmail: (email: string) => void;
  setToken: (token: string) => void;
  logout: () => void;
  username: string;
  email: string;
  token: string;
}

export const useAuth = create<State>()(
  persist(
    (set) => ({
      username: "",
      email: "",
      token: "",

      setUsername: (usuario) =>
        set((state) => ({ ...state, username: usuario })),
      setUserEmail: (email) => set((state) => ({ ...state, email: email })),
      setToken: (token) => set((state) => ({ ...state, token: token })),
      logout: () =>
        set((state) => ({ ...state, username: "", email: "", token: "" })),
    }),
    {
      name: "auth-storage",
    }
  )
);
