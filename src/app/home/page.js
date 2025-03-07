'use client';
import React, { useState } from "react";
import Image from "next/image";
import ProductImg from '../../../public/product.png';
import ProfilePic from '../../../public/profile-pic.png';
import LandingBg from '../../../public/landing_page_bg.jpg';
import EtherealBg from '../../../public/ethereal_collection_bg.jpg';
import DivineBg from '../../../public/divine-collection-bg.jpg';
import HeritageBg from '../../../public/heritage-collection-bg.jpg';
import CelestialBloomBg from '../../../public/celestialBloom-collection-bg.jpg';
import { FiTarget } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuWrench } from "react-icons/lu";
import { BiStore } from "react-icons/bi";
import { IoHammerOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Autoplay } from "swiper/modules";

// Import Swiper styles and components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function HomePage() {
  const router1 = useRouter();
  const [email, setEmail] = useState('')

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
    <div className="overflow-x-clip">
      {/* Introduction Container */}
      <div
        id="introduction"
        className="flex flex-col text-white text-xl bg-no-repeat bg-cover bg-center justify-between items-center w-dvh h-[100vh] bg-black/60 bg-blend-overlay py-10 -mt-[66px]"
        style={{ backgroundImage: `url(${LandingBg.src})` }}
      >
        <h1 className="p-4 text-5xl md:text-6xl w-full tracking-widest md:tracking-[20px] text-center"
        style={{ 
            transform: 'scaleY(2.5) scaleX(2.5)', 
            lineHeight: '300px', 
            fontFamily: 'var(--font-playfair-display)',
            fontWeight: 700 
        }}>
          EMPRESS
        </h1>
        <div className="flex flex-col justify-center items-center space-y-4 mb-[50px] md:mb-[50px]">
            <button
            className="group px-6 py-3 bg-white font-semibold text-gray-50 transition duration-300 ease-in-out cursor-pointer flex items-center justify-center relative overflow-hidden z-40"
            onClick={() => navigateTo('/product-store/')}
            >
            <div className="text-lg md:text-xl text-black px-2 tracking-wider flex items-center transform transition-transform duration-300 ease-in-out group-hover:-translate-x-6 group-hover:scale-90">
                <p>Browse the Collection</p>
            </div>
            <div className="flex items-center justify-center w-12 h-full absolute right-[0px] transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 bg-black text-white">
                <FaArrowRight />
            </div>
            </button>
        </div>
      </div>

      {/* Products Container */}
      <div className="flex flex-col bg-white text-black text-xl w-dvh h-auto md:h-[85vh] p-4 md:p-8 mt-10">
        <div className="flex items-start font-semibold justify-center text-3xl md:text-3xl ">
          <h1>CURATED FOR YOU</h1>
        </div>
        <div className="w-full mt-6">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true} // Enable infinite loop
                centeredSlides={true} // Center the active slide
                breakpoints={{
                640: { slidesPerView: 1 }, // 1 slide on mobile
                768: { slidesPerView: 3 }, // 2 slides on tablet
                1024: { slidesPerView: 3 }, // 3 slides on desktop
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => {
                // Add scaling effect to the middle slide
                swiper.slides.forEach((slide) => {
                    slide.style.transform = 'scale(0.6)'; // Scale down side slides
                    slide.style.transition = 'transform 0.5s ease';
                });
                if (swiper.slides[swiper.activeIndex]) {
                    swiper.slides[swiper.activeIndex].style.transform = 'scale(1.1)'; // Scale up middle slide
                }
                }}
                style={{
                    '--swiper-pagination-color': '#666', // Active bullet color
                    '--swiper-pagination-bullet-size': '5px', // Bullet size
                    '--swiper-pagination-bullet-horizontal-gap': '5px', // Space between bullets
                    '--swiper-navigation-color' : '#000'
                }}
            >
                {products.map((product) => (
                <SwiperSlide key={product.id}>
                    <div className="flex flex-col justify-center items-center p-4 my-20">
                    <div className="w-[300px] h-[300px] relative">
                        <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        onClick={()=>navigateTo('/product-store/')}
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

    {/* DIVINE Collection  */}
      <div
        className="flex flex-col text-white text-base bg-no-repeat bg-cover bg-center justify-center items-center w-dvh h-[95vh] bg-black/60 bg-blend-overlay py-10 space-y-6"
        style={{ backgroundImage: `url(${DivineBg.src})` }}
      >
        <p className="font-semibold">INTRODUCING BRACELETS WITH STRENGTH AND SPIRITUAL BALANCE</p>
        <p className="font-bold text-3xl tracking-wider">Divine Collection</p>
        <button className="relative overflow-hidden group py-4 px-6 border border-white hover:scale-95">
            {/* Blurred Background */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg"></div>
            
            {/* Text */}
            <p className="relative z-10 text-sm font-bold tracking-wider">
                DISCOVER MORE +
            </p>
        </button>
      </div>

    {/* ALL Collections  */}
    <div className="flex flex-col w-dvw h-[90vh] justify-center items-center my-20">
        {/* TOP 2 */}
        <div className="flex">
        {/* Ethereal Collection */}
        <div className="relative group">
            <Image src={EtherealBg} width={500} height={500} alt="Ethereal Collection" className="transition-transform group-hover:scale-95" />
  
            {/* Text Overlay (Visible by default, hidden on hover) */}
            <div className="absolute inset-0 flex justify-center items-center opacity-100 group-hover:opacity-0 transition-opacity">
            <p className="text-white text-2xl font-bold bg-black/40 p-2">Ethereal Collection</p>
            </div>
  
            {/* Button (Hidden by default, visible on hover) */}
            <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="relative overflow-hidden py-4 px-6 border border-white">
            {/* Blurred Background */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg"></div>
                {/* Text */}
                <p className="relative z-10 text-white text-sm font-bold tracking-wider">
                DISCOVER MORE +
                </p>
            </div>
            </button>
        </div>

        {/* Divine Collection */}
        <div className="relative group">
            <Image src={DivineBg} width={500} height={500} alt="Divine Collection" className="transition-transform group-hover:scale-95" />
  
            {/* Text Overlay (Visible by default, hidden on hover) */}
            <div className="absolute inset-0 flex justify-center items-center opacity-100 group-hover:opacity-0 transition-opacity">
            <p className="text-white text-2xl font-bold bg-black/40 p-2">Divine Collection</p>
            </div>
  
            {/* Button (Hidden by default, visible on hover) */}
            <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="relative overflow-hidden py-4 px-6 border border-white">
            {/* Blurred Background */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg"></div>
                {/* Text */}
                <p className="relative z-10 text-white text-sm font-bold tracking-wider">
                DISCOVER MORE +
                </p>
            </div>
            </button>
        </div>
        </div>

        {/* BOTTOM 2 */}
        <div className="flex">

        {/* Celestial Bloom Collection */}
        <div className="relative group">
            <Image src={CelestialBloomBg} width={500} height={500} alt="Celestial Bloom Collection" className="transition-transform group-hover:scale-95" />
  
            {/* Text Overlay (Visible by default, hidden on hover) */}
            <div className="absolute inset-0 flex justify-center items-center opacity-100 group-hover:opacity-0 transition-opacity">
            <p className="text-white text-2xl font-bold bg-black/40 p-2">Celestial Bloom Collection</p>
            </div>
  
            {/* Button (Hidden by default, visible on hover) */}
            <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="relative overflow-hidden py-4 px-6 border border-white">
            {/* Blurred Background */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg"></div>
                {/* Text */}
                <p className="relative z-10 text-white text-sm font-bold tracking-wider">
                DISCOVER MORE +
                </p>
            </div>
            </button>
        </div>

        {/* Heritage Collection */}
        <div className="relative group">
            <Image src={HeritageBg} width={500} height={500} alt="Heritage Collection" className="transition-transform group-hover:scale-95" />
  
            {/* Text Overlay (Visible by default, hidden on hover) */}
            <div className="absolute inset-0 flex justify-center items-center opacity-100 group-hover:opacity-0 transition-opacity">
            <p className="text-white text-2xl font-bold bg-black/40 p-2">Heritage Collection</p>
            </div>
  
            {/* Button (Hidden by default, visible on hover) */}
            <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="relative overflow-hidden py-4 px-6 border border-white">
            {/* Blurred Background */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg"></div>
                {/* Text */}
                <p className="relative z-10 text-white text-sm font-bold tracking-wider">
                DISCOVER MORE +
                </p>
            </div>
            </button>
        </div>
        </div>
    </div>
      {/* We Offer Container */}
      <div className="flex flex-col bg-white text-black text-xl w-dvh h-auto md:h-[85vh] p-4 md:p-8">
        <div className="flex items-start justify-start text-3xl md:text-5xl font-semibold my-10">
          <h1>We Offer</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 scale-90">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 scale-90">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-gray-200 p-4">
              <div className="p-4 text-lg md:text-2xl font-semibold">
                <p>"Great Quality Products, fast Delivery and afforable price"</p>
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
    <div className="flex flex-col items-center justify-center bg-black text-white text-xl w-dvh h-auto md:h-[50vh] p-4 md:p-8 mt-10 space-y-8">
        <p className="font-semibold tracking-wide">SIGN UP FOR UPDATES</p>
        <p className="text-3xl w-2/3 text-center">Get exclusive updates on the collection's launch, personalized communication and the Empress's latest news.</p>
        <div className="flex flex-col space-y-2">
            <input
            type="text"
            placeholder="jon.doe@gmail.com"
            className=" px-2 py-1 mt-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-base text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <button className="text-sm hover:border border-white p-2">Subscribe</button>
        </div>
    </div>
    </div>
  );
}