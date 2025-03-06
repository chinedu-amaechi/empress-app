'use client';
import React from "react";
import Image from "next/image";
import ProductImg from '../../../public/product.png';
import ProfilePic from '../../../public/profile-pic.png';
import LandingBg from '../../../public/landing_page_bg.jpg';
import { FiTarget } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuWrench } from "react-icons/lu";
import { BiStore } from "react-icons/bi";
import { IoHammerOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

// Import Swiper styles and components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function HomePage() {
  const router1 = useRouter();

  const navigateTo = (path) => {
    router1.push(path);
  };

  const products = [
    { id: 1, name: 'Bracelet 1', image: ProductImg, desc: 'Elegant handcrafted bracelet.' },
    { id: 2, name: 'Bracelet 2', image: ProductImg, desc: 'Elegant handcrafted bracelet.' },
    { id: 3, name: 'Bracelet 3', image: ProductImg, desc: 'Elegant handcrafted bracelet.' },
    { id: 4, name: 'Bracelet 4', image: ProductImg, desc: 'Elegant handcrafted bracelet.' },
  ];

  return (
    <div className="container mx-auto">
      {/* Introduction Container */}
      <div
        id="introduction"
        className="flex flex-col text-white text-xl bg-no-repeat bg-cover bg-center justify-start items-center w-dvh h-[91vh] bg-black/20 bg-blend-overlay"
        style={{ backgroundImage: `url(${LandingBg.src})` }}
      >
        <h1 className="mt-[100px] md:mt-[150px] p-4 text-5xl md:text-7xl font-bold tracking-widest text-center">
          EMPRESS
        </h1>
        <p className="w-11/12 md:w-1/2 text-center text-base md:text-xl">
          Welcome to Empress! Discover handcrafted bracelets that add timeless elegance to any look. Find your perfect piece today!
        </p>
        <button
          className="group mt-[100px] md:mt-[200px] px-6 py-3 bg-yellow-400 font-semibold text-gray-50 transition duration-300 ease-in-out cursor-pointer flex items-center justify-center relative overflow-hidden z-40"
          onClick={() => navigateTo('/product-store/')}
        >
          <div className="text-lg md:text-xl px-2 tracking-wider flex items-center transform transition-transform duration-300 ease-in-out group-hover:-translate-x-6 group-hover:scale-90">
            <p>Browse Collections</p>
          </div>
          <div className="flex items-center justify-center w-12 h-full absolute right-[0px] transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 bg-white text-yellow-400">
            <FaArrowRight />
          </div>
        </button>
      </div>

      {/* Products Container */}
      <div className="flex flex-col bg-white text-black text-xl w-dvh h-auto md:h-[85vh] p-4 md:p-8 mt-10">
        <div className="flex items-start justify-start text-3xl md:text-5xl font-semibold">
          <h1>Products</h1>
        </div>
        <div className="w-full mt-6">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                640: { slidesPerView: 1 }, // 1 slide on mobile
                768: { slidesPerView: 2 }, // 2 slides on tablet
                1024: { slidesPerView: 3 }
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex flex-col justify-center items-center p-4">
                  <div className="w-[300px] h-[300px] relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold mt-4">{product.name}</h2>
                  <p className="text-gray-600 text-center mt-2">{product.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* About Us Container */}
      <div className="flex flex-col bg-white text-black text-xl w-dvh h-auto md:h-[85vh] p-4 md:p-8">
        <div className="flex items-start justify-start text-3xl md:text-5xl font-semibold my-6 md:my-10">
          <h1>About Us</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: <FiTarget size={66} />, title: "Quality", desc: "Lorem ipsum dolor sit amet consectetur. Quisque leo et fringilla commodo." },
            { icon: <CiFaceSmile size={65} />, title: "Cost Friendly", desc: "Lorem ipsum dolor sit amet consectetur. Quisque leo et fringilla commodo." },
            { icon: <HiOutlineBolt size={65} />, title: "Fast Delivery", desc: "Lorem ipsum dolor sit amet consectetur. Quisque leo et fringilla commodo." },
            { icon: <LuWrench size={65} />, title: "Build Your Own", desc: "Lorem ipsum dolor sit amet consectetur. Quisque leo et fringilla commodo." },
            { icon: <BiStore size={65} />, title: "In Store Feeling", desc: "Lorem ipsum dolor sit amet consectetur. Quisque leo et fringilla commodo." },
            { icon: <IoHammerOutline size={65} />, title: "Customization", desc: "Lorem ipsum dolor sit amet consectetur. Quisque leo et fringilla commodo." },
          ].map((item, index) => (
            <div key={index} className="flex flex-col justify-start items-start border border-black p-4 m-2">
              <div className="text-yellow-300 my-2">{item.icon}</div>
              <p className="text-2xl md:text-3xl font-semibold mt-1 text-blue-900">{item.title}</p>
              <p className="py-2 text-blue-400 text-base md:text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Container */}
      <div className="flex flex-col bg-white text-black text-xl w-dvh h-auto md:h-[85vh] p-4 md:p-8 mt-10">
        <div className="flex items-start justify-start text-3xl md:text-5xl font-semibold my-6 md:my-10">
          <h1>What Our Customers Say</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-gray-200 p-4">
              <div className="p-4 text-lg md:text-2xl font-semibold">
                <p>"Lorem ipsum dolor sit amet consectetur. Sit leo nulla pulvinar non id."</p>
              </div>
              <div className="flex p-4 items-center">
                <div className="px-3">
                  <Image src={ProfilePic} height={50} width={50} alt="User Profile Pic" />
                </div>
                <div>
                  <p className="font-semibold text-gray-600">Alexa</p>
                  <p className="text-gray-500">12 Jan, 2025</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}