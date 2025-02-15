'use client';
import { createContext, useState, ReactNode } from 'react';
import { Product } from '../types';

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
