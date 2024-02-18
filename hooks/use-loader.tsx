import { create } from "zustand";
interface LoaderState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
export const useLoader = create<LoaderState>((set) => ({
  loading: true,
  setLoading: (loading) => set({ loading }),
}));
