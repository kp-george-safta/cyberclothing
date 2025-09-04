import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        // increase quantity if already in cart
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        // new product → start at quantity 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === id);
      if (existing && existing.quantity > 1) {
        // decrease quantity
        return prev.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        );
      }
      // remove completely if only 1 left
      return prev.filter((p) => p.id !== id);
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
