import { create } from 'zustand';

interface MyState {
  currentCatIndex: number;
  currentCatIndexAction: (cat: number) => void;
}

export const useCategory = create<MyState>()((set) => ({
  currentCatIndex: 0,
  currentCatIndexAction: (cat) => set({ currentCatIndex: cat }),
}));

export const currentCatIndex = useCategory.getState().currentCatIndex;
export const currentCatIndexAction =
  useCategory.getState().currentCatIndexAction;
