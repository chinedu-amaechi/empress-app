"use client";

import { useState } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"; // Import star icons and arrows
import { PiShoppingCartSimpleFill } from "react-icons/pi"; // Better cart icon

export default function ProductCard() {
  const rating = 4.5; // Example rating
  const totalReviews = 120; // Example total reviews
  const productImages = [
    "/bracelet-01.jpg",
    "/bracelet-02.jpg",
    "/bracelet-03.jpg",
    "/bracelet-04.jpg",
    "/bracelet-05.jpg",
    "/bracelet-06.jpg",
    "/bracelet-07.jpg",
    "/bracelet-08.jpg",
    "/bracelet-09.jpg",
    "/bracelet-10.jpg",
    "/bracelet-11.jpg",
  ]; // Array of product images
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };

  return (
    <div className="w-full sm:w-72 md:w-80 lg:w-96 bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-4">
      {/* Product Image with Icons */}
      <div
        className="relative w-full h-56 sm:h-48 bg-cover bg-center transition-all duration-300"
        style={{ backgroundImage: `url(${productImages[currentImage]})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Wishlist Heart Icon */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white p-2 sm:p-3 rounded-full shadow-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-red-100">
          <FaHeart className="text-red-500 text-sm sm:text-lg" />
        </div>

        {/* Cart Icon */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white p-2 sm:p-3 rounded-full shadow-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100">
          <PiShoppingCartSimpleFill className="text-gray-700 text-sm sm:text-lg" />
        </div>

        {/* Arrows for image switching (only show on hover) */}
        {isHovered && (
          <>
            {/* Left Arrow */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition-transform duration-300 ease-in-out hover:scale-110"
              onClick={prevImage}
            >
              <FaChevronLeft className="text-lg" />
            </button>

            {/* Right Arrow */}
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition-transform duration-300 ease-in-out hover:scale-110"
              onClick={nextImage}
            >
              <FaChevronRight className="text-lg" />
            </button>
          </>
        )}
      </div>

      {/* Rating & Reviews */}
      <div className="flex items-center gap-1 mt-3 px-2">
        {/* Star Rating */}
        {Array.from({ length: 5 }, (_, index) => {
          if (rating >= index + 1)
            return (
              <FaStar
                key={index}
                className="text-yellow-500 text-sm sm:text-lg"
              />
            );
          else if (rating >= index + 0.5)
            return (
              <FaStarHalfAlt
                key={index}
                className="text-yellow-500 text-sm sm:text-lg"
              />
            );
          else
            return (
              <FaRegStar
                key={index}
                className="text-gray-400 text-sm sm:text-lg"
              />
            );
        })}

        {/* Number of Reviews */}
        <p className="text-gray-600 text-xs sm:text-sm ml-2">
          ({totalReviews} reviews)
        </p>
      </div>

      {/* Product Details */}
      <div className="p-2 sm:p-4">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
          Bracelet 1
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          Elegant and stylish bracelet to elevate your look.
        </p>

        {/* Price */}
        <div className="flex items-center justify-start mt-2 sm:mt-3">
          <p className="text-[#1E96FC] font-bold text-base sm:text-lg">$100</p>
        </div>
      </div>
    </div>
  );
}
