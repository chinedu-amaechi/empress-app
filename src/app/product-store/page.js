"use client";

import { Josefin_Sans } from "next/font/google";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Heading from "../ui/heading";
import ProductCard from "../ui/product-card";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

function ProductStore() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      {/* Banner Section */}
      <div className="flex h-36 w-full items-center bg-[url(/store-banner.jpg)] bg-cover bg-center px-6">
        <Heading
          className={`text-2xl font-bold tracking-wide text-white md:text-4xl md:tracking-widest`}
        >
          Rule With <span className="block text-[#FFDB57]">Elegance</span>
        </Heading>
      </div>

      {/* Search & Filter Section */}
      <div className="flex flex-col items-center justify-center space-y-4 p-6">
        <form className="flex w-full max-w-md items-center space-x-2 rounded-md bg-white p-3 shadow-md">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full rounded-md border border-gray-300 p-2 text-sm outline-none focus:ring-2 focus:ring-[#1E96FC]"
          />
          <button className="rounded-md bg-[#FFCB05] px-4 py-2 font-semibold text-[#11296B] transition hover:bg-[#FFDB57]">
            Search
          </button>
          <button
            type="button"
            className="flex items-center rounded-md border border-gray-300 bg-white p-2 text-[#11296B] transition hover:bg-[#EDEDED]"
            onClick={() => setShowFilters(!showFilters)}
          >
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                showFilters ? "rotate-180" : ""
              }`}
            />
          </button>
        </form>

        {/* Filter Options */}
        {showFilters && (
          <div className="w-full max-w-md rounded-md bg-white p-3 shadow-md">
            <h2 className="mb-2 text-lg font-semibold text-[#11296B]">
              Filters
            </h2>
            <div className="grid grid-cols-3 gap-2">
              <button className="rounded-md bg-[#1E96FC] px-3 py-2 text-white transition hover:bg-[#1573C1]">
                Price
              </button>
              <button className="rounded-md bg-[#FFCB05] px-3 py-2 text-[#11296B] transition hover:bg-[#FFDB57]">
                Category
              </button>
              <button className="rounded-md bg-[#11296B] px-3 py-2 text-white transition hover:bg-[#0D1F56]">
                Rating
              </button>
            </div>
          </div>
        )}

        {/* Example Content */}
        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
          <ProductCard name="Product 1" price="$10" />
          <ProductCard name="Product 2" price="$15" />
          <ProductCard name="Product 3" price="$20" />
          <ProductCard name="Product 4" price="$25" />
          <ProductCard name="Product 5" price="$30" />
        </div>
      </div>
    </>
  );
}

export default ProductStore;
