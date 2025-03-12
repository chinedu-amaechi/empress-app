
'use client';
import React, { useState } from "react";
import Image from "next/image";
import { FaRegTrashCan } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { FaHeartBroken } from "react-icons/fa";

export default function WishlistPage() {
  const router = useRouter();

  // Local wishlist data array
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Product 1", price: 29.99, image: "/bracelet-01.jpg" },
    { id: 2, name: "Product 2", price: 49.99, image: "/bracelet-02.jpg" },
    // Add more items as needed
  ]);

  // Local cart data array
  const [cartItems, setCartItems] = useState([]);

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, count: 1 }]);
  };

  // Move item from wishlist to cart
  const moveToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  return (
    <div className="w-full px-5">
      <div className="flex flex-col justify-center text-gray-700 items-center my-10">
        <h1 className="text-4xl font-bold tracking-wide">Favorites</h1>
      </div>
      <div className="my-5">
        <div className="flex space-x-[250px] w-3/5 mx-[250px] items-center font-bold">
          <p>Product Name</p>
          <p>Unit Price</p>
          <p>Stock Status</p>
        </div>
        <hr className="border border-black my-2" />

        {wishlistItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-500 py-20">
            <FaHeartBroken size={80} />
            <p className="text-3xl">Your wishlist is empty.</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {wishlistItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center bg-white p-4 shadow rounded-lg">
                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-600 hover:text-red-800 mx-8"
                >
                  <FaRegTrashCan size={24} />
                </button>
                {/* Image */}
                <div className="w-28 h-28 flex justify-center items-center">
                  <Image src={item.image} width={100} height={100} alt={item.name} className="rounded-lg" />
                </div>

                {/* Name, Price, Stock, Add to cart */}
                <div className="flex flex-1 space-x-[285px] px-10 text-nowrap">
                  <p className="text-lg font-medium">{item.name}</p>
                  <h1 className="text-xl font-semibold">${item.price}</h1>
                  <h1 className="text-xl text-green-500">In Stock</h1>
                  <button
                    className="cursor-pointer px-4 py-2 font-semibold text-blue-500 border-2 border-blue-500 rounded-full transition-all duration-200 hover:bg-blue-500 hover:text-white"
                    onClick={() => moveToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

