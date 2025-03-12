'use client';
import React, { createContext, useContext, useState } from 'react';
import BraceletExample from '../../../public/bracelet_ex.png'

const CartContext = createContext();
const WishlistContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Bracelet A", price: 30, image: BraceletExample },
    { id: 2, name: "Bracelet B", price: 40, image: BraceletExample },
    { id: 3, name: "Bracelet C", price: 50, image: BraceletExample },
  ]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateCartItemCount = (id, count) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: Math.max(count, 1) } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateCartItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const WishListProvider = ({children}) => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Bracelet D", price: 60, image: BraceletExample },
    { id: 2, name: "Bracelet E", price: 70, image: BraceletExample },
    { id: 3, name: "Bracelet F", price: 80, image: BraceletExample },
    { id: 4, name: "Bracelet G", price: 90, image: BraceletExample },
    { id: 5, name: "Bracelet I", price: 100, image:BraceletExample },
  ]
  );

  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => [...prevItems, item]);
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id))
  };

  const updateWishlistItemCount = (id,count) => {
    setWishlistItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: Math.max(count, 1) } : item
      ))
  };

  return(
    <WishlistContext.Provider value={{wishlistItems, addToWishlist, removeFromWishlist, updateWishlistItemCount}}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export const useWishlist = () => useContext(WishlistContext);

