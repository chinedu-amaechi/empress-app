"use client";

import { useState } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaHeart,
  FaCheck,
} from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

export default function ProductCard({ name, price, image, rating, reviews, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false); // State for cart button
  const [isWishlistClicked, setIsWishlistClicked] = useState(false); // State for wishlist button

  const handleCartClick = (event) => {
    event.stopPropagation();
    setIsCartClicked(true); // Change to FaCheck
    setTimeout(() => {
      setIsCartClicked(false); // Revert back to cart icon after 1 second
    }, 1000);
    // Add your cart logic here
    console.log("Add to cart clicked");
  };

  const handleHeartClick = (event) => {
    event.stopPropagation();
    setIsWishlistClicked(true); // Change to FaCheck
    setTimeout(() => {
      setIsWishlistClicked(false); // Revert back to heart icon after 1 second
    }, 1000);
    // Add your wishlist logic here
    console.log("Add to wishlist clicked");
  };

  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl cursor-pointer"
      onClick={onClick} // Opens product modal
    >
      {/* Product Image */}
      <div
        className="relative h-56 w-full bg-cover bg-center transition-all duration-300 sm:h-48"
        style={{ backgroundImage: `url(${image})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Wishlist Icon */}
        <div
          className="absolute left-2 top-2 cursor-pointer rounded-full bg-white p-2 shadow-md hover:scale-110 hover:bg-red-100"
          onClick={handleHeartClick}
        >
          {isWishlistClicked ? (
            <FaCheck className="text-green-500" /> // Show FaCheck when clicked
          ) : (
            <FaHeart className="text-red-500" /> // Show FaHeart by default
          )}
        </div>

        {/* Cart Icon */}
        <div
          className="absolute right-2 top-2 cursor-pointer rounded-full bg-white p-2 shadow-md hover:scale-110 hover:bg-gray-100"
          onClick={handleCartClick}
        >
          {isCartClicked ? (
            <FaCheck className="text-green-500" /> // Show FaCheck when clicked
          ) : (
            <PiShoppingCartSimpleFill className="text-gray-700" /> // Show cart icon by default
          )}
        </div>
      </div>

      {/* Rating & Reviews */}
      <div className="mt-3 flex items-center gap-1 px-2">
        {Array.from({ length: 5 }, (_, index) => {
          if (rating >= index + 1) return <FaStar key={index} className="text-yellow-500" />;
          else if (rating >= index + 0.5) return <FaStarHalfAlt key={index} className="text-yellow-500" />;
          return <FaRegStar key={index} className="text-gray-400" />;
        })}
        <p className="ml-2 text-xs text-gray-600">({reviews} reviews)</p>
      </div>

      {/* Product Details */}
      <div className="p-2 sm:p-4">
        <h1 className="text-lg font-semibold text-gray-800">{name}</h1>
        <p className="mt-1 text-xs text-gray-600 hidden md:block">Elegant and stylish bracelet.</p>

        {/* Price */}
        <p className="mt-2 text-lg font-bold text-[#1E96FC]">${price}</p>
      </div>
    </div>
  );
}