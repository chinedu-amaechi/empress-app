"use client";

import { useState } from "react";
import { FaChevronDown, FaTimes, FaHeart, FaStar, FaChevronUp } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import Image from "next/image";
import Heading from "../ui/heading";
import ProductCard from "../ui/product-card";

function ProductStore() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const products = [
    { id: 1, name: "Luxury Bracelet", image: "/bracelet-01.jpg", price: 30, rating: 4.5, reviews: 10 },
    { id: 2, name: "Elegant Chain", image: "/bracelet-02.jpg", price: 40, rating: 4.8, reviews: 12 },
    { id: 3, name: "Classic Bangle", image: "/bracelet-03.jpg", price: 25, rating: 4.2, reviews: 8 },
    { id: 4, name: "Gold Cuff", image: "/bracelet-04.jpg", price: 50, rating: 4.7, reviews: 15 },
  ];

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Store Banner */}
      <div className="flex h-36 w-full items-center bg-[url(/store-banner.jpg)] bg-cover bg-center px-6">
        <Heading className="text-3xl font-bold tracking-wide text-white md:text-5xl md:tracking-widest">
          Rule With <span className="block text-[#FFDB57]">Elegance</span>
        </Heading>
      </div>

      {/* Search & Filters */}
      <div className="flex w-full  flex-col items-center justify-center space-y-6 p-8">
        <form className="flex bg-white w-3/4 items-center space-x-3 rounded-lg  p-4 shadow-md">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full rounded-md border border-gray-300 p-3 text-md outline-none focus:ring-2 focus:ring-[#1E96FC]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Handle input change
          />
          <button
            type="button"
            className="rounded-lg bg-[#FFCB05] px-5 py-3 text-lg font-semibold text-[#11296B] transition hover:bg-[#FFDB57]"
            onClick={(e) => e.preventDefault()} // Prevent form submission
          >
            Search
          </button>
          <button
            type="button"
            className="flex items-center rounded-lg border border-gray-300 bg-white p-3 text-[#11296B] transition hover:bg-[#EDEDED]"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaChevronDown className={`h-6 w-6 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </button>
        </form>

        {/* Product Grid */}
        <div className="grid grid-cols-2 w-full gap-6 p-6 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                rating={product.rating}
                reviews={product.reviews}
                className="w-full max-w-xs"
                onClick={() => setSelectedProduct(product)}
              />
            ))
          ) : (
            <p className="text-gray-500 text-lg">No products found.</p>
          )}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && <ProductModal product={selectedProduct} setSelectedProduct={setSelectedProduct} />}
    </>
  );
}

const ProductModal = ({ product, setSelectedProduct }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [productCareOpen, setProductCareOpen] = useState(false);
  const [otherDetailsOpen, setOtherDetailsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-fit relative animate-fadeIn">
        {/* Close Button */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold tracking-wide my-5">{product.name}</h1>
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            onClick={() => setSelectedProduct(null)}
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="flex space-x-10">
          {/* Product Image */}
          <div className="m-5">
            <Image src={product.image} width={300} height={500} alt={product.name} className="rounded-md" />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-start">
            <p className="text-gray-600 my-5">Stylish and elegant jewelry piece.</p>

            {/* Price */}
            <h1 className="text-3xl font-bold text-blue-500 mt-2 tracking-wide">${product.price}</h1>

            {/* Rating */}
            <div className="flex items-center my-2">
              <FaStar className="text-yellow-400" />
              <p className="ml-2 font-semibold">{product.rating}</p>
              <p className="text-gray-500 text-sm ml-1">({product.reviews} reviews)</p>
            </div>

            <div className="flex items-center gap-2 text-blue-500 my-2 cursor-pointer">
              <p className="hover:border-b tracking-wide border-blue-500">Customize</p>
              <FaPenToSquare size={15} />
            </div>

            <div className="flex items-center">
              {/* Quantity Selector  */}
              <div className="flex items-center px-4 py-2 border border-black space-x-4">
                <button
                  className="text-2xl font-bold px-3 border border-black hover:bg-gray-300 rounded-full"
                  onClick={() => handleQuantityChange("decrement")}
                >
                  -
                </button>
                <p className="text-lg px-4">{quantity}</p>
                <button
                  className="text-2xl font-bold px-2.5 border border-black hover:bg-gray-300 rounded-full"
                  onClick={() => handleQuantityChange("increment")}
                >
                  +
                </button>
              </div>
              {/* Add to Cart Button */}
              <button className="bg-blue-800 text-white px-5 py-3 hover:bg-white hover:text-blue-800 border-2 border-blue-800 font-semibold">
                Add to Cart
              </button>
              <FaHeart className="text-red-500 cursor-pointer mx-5" size={28} />
            </div>
              {/* Product Details Dropdown */}
              <div className="my-6">
                <div className="flex items-center space-x-3 cursor-pointer p-3 rounded-md"
                  onClick={() => setDetailsOpen(!detailsOpen)}>
                    <span className="font-semibold text-2xl border-b-2 border-blue-800 text-blue-800">Product Details</span>
                      {detailsOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              {detailsOpen && (
                <div className="mt-2 p-3 rounded-md">
                    <div className="flex space-x-2 items-center cursor-pointer p-2 bg-white rounded-md text-blue-800 text-xl text-nowrap"
                      onClick={() => setProductCareOpen(!productCareOpen)}>
                                    <span className="font-medium border-b-2 border-blue-800">Product Care</span>
                  {productCareOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {productCareOpen && <p className="text-gray-600 p-2 text-sm">Avoid water & chemicals.</p>}

                <div className="flex space-x-2 items-center cursor-pointer p-2 bg-white rounded-md mt-2 text-blue-800 text-xl text-nowrap"
                  onClick={() => setOtherDetailsOpen(!otherDetailsOpen)}>
                <span className="font-medium border-b-2 border-blue-800">Other Details</span>
                {otherDetailsOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              {otherDetailsOpen && <p className="text-gray-600 p-2 max-w-[400px] text-sm">Lorem ipsum dolor sit amet consectetur. Est massa tellus at vel vitae id cursus arcu ante. Mollis donec placerat nisl pharetra eu pharetra sollicitudin aenean urna. Congue nulla nibh cum eu arcu egestas sollicitudin arcu amet.</p>}
            </div>
          )}
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductStore;
