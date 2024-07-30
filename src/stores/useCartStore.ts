import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ProductType } from '../assets/data';

interface MyState {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
  resetCart: () => void;
}

export const useCartStore = create<MyState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== product.id),
        })),
      resetCart: () => set({ cart: [] }),
    }),
    {
      name: 'cart', // name of item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default the 'localStorage' is used
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);

export const cart = useCartStore.getState().cart;
export const addToCart = useCartStore.getState().addToCart;
export const removeFromCart = useCartStore.getState().removeFromCart;
export const resetCart = useCartStore.getState().resetCart;
