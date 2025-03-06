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
  const [searchQuery, setSearchQuery] = useState("");
  const [showSizeModal, setShowSizeModal] = useState(false); // State for Size Modal

  const products = [
    { id: 1, name: "Luxury Bracelet", image: "/bracelet-01.jpg", price: 30, rating: 4.5, reviews: 10 },
    { id: 2, name: "Elegant Chain", image: "/bracelet-02.jpg", price: 40, rating: 4.8, reviews: 12 },
    { id: 3, name: "Classic Bangle", image: "/bracelet-03.jpg", price: 25, rating: 4.2, reviews: 8 },
    { id: 4, name: "Gold Cuff", image: "/bracelet-04.jpg", price: 50, rating: 4.7, reviews: 15 },
  ];

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
      <div className="flex w-full flex-col items-center justify-center space-y-6 p-8">
        <form className="flex w-3/4 items-center space-x-3 rounded-lg bg-white p-4 shadow-md">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full rounded-md border border-gray-300 p-3 text-md outline-none focus:ring-2 focus:ring-[#1E96FC]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="button"
            className="rounded-lg bg-[#FFCB05] px-5 py-3 text-lg font-semibold text-[#11296B] transition hover:bg-[#FFDB57]"
            onClick={(e) => e.preventDefault()}
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
        <div className="grid w-full grid-cols-2 gap-6 p-6 md:grid-cols-3 lg:grid-cols-4">
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
            <p className="text-lg text-gray-500">No products found.</p>
          )}
        </div>
      </div>

      {/* Product Modal and Size Modal */}
      {selectedProduct && (
        <div className="fixed w-full inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex items-center justify-center transition-transform duration-300 space-x-8" style={{
          transform:showSizeModal ? 'translateX(0%)' : 'translateX(0)',
        }}>
            {/* Product Modal */}
            <ProductModal
              product={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              setShowSizeModal={setShowSizeModal}
            />

            {/* Size Modal */}
            {showSizeModal && (
              <SizeModal
                product={selectedProduct}
                setShowSizeModal={setShowSizeModal}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

const ProductModal = ({ product, setSelectedProduct, setShowSizeModal }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [productCareOpen, setProductCareOpen] = useState(false);
  const [otherDetailsOpen, setOtherDetailsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  }
  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className=" bg-white p-8 rounded-lg shadow-lg animate-fadeIn">
      {/* Close Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold tracking-wide my-5">{product.name}</h1>
        <button
          className="text-gray-500 hover:text-red-500"
          onClick={() => {
            setSelectedProduct(null);
            setShowSizeModal(false)
          }}
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
        <div className="flex flex-col justify-start space-y-3">
          <p className="text-gray-600 my-5">Stylish and elegant jewelry piece.</p>

          {/* Price */}
          <h1 className="text-3xl font-bold text-blue-500 mt-2 tracking-wide">${product.price}</h1>

          {/* Rating */}
          <div className="flex items-center my-2">
            <FaStar className="text-yellow-400" />
            <p className="ml-2 font-semibold">{product.rating}</p>
            <p className="text-sm text-gray-500 ml-1">({product.reviews} reviews)</p>
          </div>

          <div className="flex items-center gap-2 text-blue-500 my-2 cursor-pointer">
            <p className="text-sm my-1 tracking-wide hover:border-b border-blue-500">Customize</p>
            <FaPenToSquare size={15} />
          </div>
          
          {/* Size Selection  */}
          <div className="flex justify-between space-x-3">
          <button
            className={`border px-4 py-1 rounded-full transition-colors ${
              selectedSize === "XXS" ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => handleSizeSelection("XXS")}
          >
            XXS
          </button>
          <button
            className={`border px-4 py-1 rounded-full transition-colors ${
              selectedSize === "XS" ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => handleSizeSelection("XS")}
          >
            XS
          </button>
          <button
            className={`border px-4 py-1 rounded-full transition-colors ${
              selectedSize === "S" ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => handleSizeSelection("S")}
          >
            S
          </button>
          <button
            className={`border px-4 py-1 rounded-full transition-colors ${
              selectedSize === "M" ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => handleSizeSelection("M")}
          >
            M
          </button>
          <button
            className={`border px-4 py-1 rounded-full transition-colors ${
              selectedSize === "L" ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => handleSizeSelection("L")}
          >
            L
          </button>
          <button
            className={`border px-4 py-1 rounded-full transition-colors ${
              selectedSize === "XL" ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => handleSizeSelection("XL")}
          >
            XL
          </button>
          <button
            className={`border px-4 py-1 rounded-full transition-colors ${
              selectedSize === "XXL" ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => handleSizeSelection("XXL")}
          >
            XXL
          </button>
          </div>

          <div className="flex justify-between items-center">
            {/* Quantity Selector */}
            <div className="flex items-center w-fit px-2 border border-gray-400 rounded-full">
              <button
                className="px-2.5 my-1 font-bold hover:bg-gray-300 rounded-full"
                onClick={() => handleQuantityChange("decrement")}
              >
                -
              </button>
              <p className="px-4 text-sm">{quantity}</p>
              <button
                className="px-2 my-1 font-bold hover:bg-gray-300 rounded-full"
                onClick={() => handleQuantityChange("increment")}
              >
                +
              </button>
            </div>
            <p
              className="text-xs my-1 px-1 cursor-pointer hover:bg-gray-200 border-b border-black"
              onClick={() => setShowSizeModal(true)}
            >
              Find my size
            </p>
          </div>

          <div className="flex items-center">
            {/* Add to Cart Button */}
            <button className="w-full px-5 py-3 font-semibold text-white bg-blue-800 border-2 border-blue-800 rounded-full hover:bg-white hover:text-blue-800">
              Add to Cart
            </button>
            <FaHeart className="mx-5 text-red-500 cursor-pointer" size={28} />
          </div>

          {/* Product Details Dropdown */}
          <div className="my-6">
            <div
              className="flex items-center p-3 space-x-3 cursor-pointer rounded-md"
              onClick={() => setDetailsOpen(!detailsOpen)}
            >
              <span className="text-2xl font-semibold text-blue-800 border-b-2 border-blue-800">Product Details</span>
              {detailsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {detailsOpen && (
              <div className="p-3 mt-2 rounded-md">
                <div
                  className="flex items-center p-2 space-x-2 cursor-pointer text-blue-800 bg-white rounded-md text-xl"
                  onClick={() => setProductCareOpen(!productCareOpen)}
                >
                  <span className="font-medium border-b-2 border-blue-800">Product Care</span>
                  {productCareOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {productCareOpen && <p className="p-2 text-sm text-gray-600">Avoid water & chemicals.</p>}

                <div
                  className="flex items-center p-2 mt-2 space-x-2 cursor-pointer text-blue-800 bg-white rounded-md text-xl"
                  onClick={() => setOtherDetailsOpen(!otherDetailsOpen)}
                >
                  <span className="font-medium border-b-2 border-blue-800">Other Details</span>
                  {otherDetailsOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {otherDetailsOpen && (
                  <p className="p-2 text-sm text-gray-600 max-w-[400px]">
                    Lorem ipsum dolor sit amet consectetur. Est massa tellus at vel vitae id cursus arcu ante. Mollis donec placerat nisl pharetra eu pharetra sollicitudin aenean urna. Congue nulla nibh cum eu arcu egestas sollicitudin arcu amet.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SizeModal = ({ product, setShowSizeModal }) => {
  const [wristSize, setWristSize] = useState("");
  const [selectedFit, setSelectedFit] = useState(null);
  const [calculatedSize, setCalculatedSize] = useState("");

  const sizeChart = [
    { wristCm: 14, braceletCm: 16, size: "XXS" },
    { wristCm: 15, braceletCm: 17, size: "XS" },
    { wristCm: 16, braceletCm: 18, size: "S" },
    { wristCm: 17, braceletCm: 19, size: "M" },
    { wristCm: 18, braceletCm: 20, size: "L" },
    { wristCm: 19, braceletCm: 21, size: "XL" },
    { wristCm: 20, braceletCm: 22, size: "XXL" },
  ];

  const handleFitSelection = (fit) => {
    setSelectedFit(fit);

    if (wristSize) {
      const wristCm = parseFloat(wristSize); // Wrist size is already in cm
      let braceletCm;

      switch (fit) {
        case "Snug":
          braceletCm = wristCm + 1;
          break;
        case "Comfort":
          braceletCm = wristCm + 2;
          break;
        case "Loose":
          braceletCm = wristCm + 3;
          break;
        default:
          braceletCm = wristCm;
      }

      const size = sizeChart.find(
        (item) => braceletCm >= item.braceletCm - 0.5 && braceletCm <= item.braceletCm + 0.5
      )?.size;

      setCalculatedSize(size || "Not found");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg animate-fadeIn">
      {/* Close Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold tracking-wide my-5">Find Your Size</h1>
        <button
          className="text-gray-500 hover:text-red-500"
          onClick={() => setShowSizeModal(false)}
        >
          <FaTimes size={20} />
        </button>
      </div>

      <div className="mt-4">
        <p className="font-semibold tracking-wide text-gray-600">Enter your wrist size (in cm):</p>
        <p className="text-xs text-gray-400">1 Inch = 2.54 cm</p>
        <input
          type="text"
          placeholder="e.g., 16"
          className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          value={wristSize}
          onChange={(e) => setWristSize(e.target.value)}
        />
        <p className="my-2 font-semibold tracking-wide text-gray-600">Choose your fit:</p>
        <div className="flex space-x-2 justify-between">
          <button
            className={`border px-4 py-1 rounded-full transition-colors ${
              selectedFit === "Snug" ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => handleFitSelection("Snug")}
          >
            Snug
          </button>
          <button
            className={`border px-4 py-1 rounded-full transition-colors ${
              selectedFit === "Comfort" ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => handleFitSelection("Comfort")}
          >
            Comfort
          </button>
          <button
            className={`border px-4 py-1 rounded-full transition-colors ${
              selectedFit === "Loose" ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => handleFitSelection("Loose")}
          >
            Loose
          </button>
        </div>
        {calculatedSize && (
          <div className="border rounded p-2 my-4">
            <div className="flex text-sm font-semibold tracking-wide text-green-500 space-x-2 items-center">
              <p>Your Size is:</p>
              <p className="text-lg">{calculatedSize}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductStore;