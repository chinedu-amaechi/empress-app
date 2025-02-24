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
    <div className="w-fit overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      {/* Product Image with Icons */}
      <div
        className="relative h-56 w-full bg-cover bg-center transition-all duration-300 sm:h-48"
        style={{ backgroundImage: `url(${productImages[currentImage]})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Wishlist Heart Icon */}
        <div className="absolute left-2 top-2 cursor-pointer rounded-full bg-white p-2 shadow-md transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-red-100 sm:left-3 sm:top-3 sm:p-3">
          <FaHeart className="text-sm text-red-500 sm:text-lg" />
        </div>

        {/* Cart Icon */}
        <div className="absolute right-2 top-2 cursor-pointer rounded-full bg-white p-2 shadow-md transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 sm:right-3 sm:top-3 sm:p-3">
          <PiShoppingCartSimpleFill className="text-sm text-gray-700 sm:text-lg" />
        </div>

        {/* Arrows for image switching (only show on hover) */}
        {isHovered && (
          <>
            {/* Left Arrow */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 bg-opacity-50 p-2 text-white transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-opacity-80"
              onClick={prevImage}
            >
              <FaChevronLeft className="text-lg" />
            </button>

            {/* Right Arrow */}
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 bg-opacity-50 p-2 text-white transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-opacity-80"
              onClick={nextImage}
            >
              <FaChevronRight className="text-lg" />
            </button>
          </>
        )}
      </div>

      {/* Rating & Reviews */}
      <div className="mt-3 flex items-center gap-1 px-2">
        {/* Star Rating */}
        {Array.from({ length: 5 }, (_, index) => {
          if (rating >= index + 1)
            return (
              <FaStar
                key={index}
                className="text-sm text-yellow-500 sm:text-lg"
              />
            );
          else if (rating >= index + 0.5)
            return (
              <FaStarHalfAlt
                key={index}
                className="text-sm text-yellow-500 sm:text-lg"
              />
            );
          else
            return (
              <FaRegStar
                key={index}
                className="text-sm text-gray-400 sm:text-lg"
              />
            );
        })}

        {/* Number of Reviews */}
        <p className="ml-2 text-xs text-gray-600 sm:text-sm">
          ({totalReviews} reviews)
        </p>
      </div>

      {/* Product Details */}
      <div className="p-2 sm:p-4">
        <h1 className="text-lg font-semibold text-gray-800 sm:text-xl">
          Bracelet 1
        </h1>
        <p className="mt-1 text-xs text-gray-600 hidden md:block">
          Elegant and stylish bracelet to elevate your look.
        </p>

        {/* Price */}
        <div className="mt-2 flex items-center justify-start sm:mt-3">
          <p className="text-base font-bold text-[#1E96FC] sm:text-lg">$100</p>
        </div>
      </div>
    </div>
  );
}
