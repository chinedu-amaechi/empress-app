'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import UserDropdown from './userdropdown';
import CartDropdown from './cartdropdown';
import EmpressLogo from '../../../public/empress_logo1.png';
import WishlistDropdown from './wishlistdropdown';
import { IoCallOutline } from 'react-icons/io5';

export default function Navbar() {
  const router1 = useRouter();
  const [scrolledIntro, setScrolledIntro] = useState(false);

  const navigateTo = (path) => {
    router1.push(path);
  };

  const handleScroll = () => {
    const introHeight = (document.getElementById('introduction').offsetHeight)-200;

    if (window.scrollY > introHeight) {
      setScrolledIntro(true);
    }
    else {
      setScrolledIntro(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])

  return (
    <div className={`py-2 transition-colors duration-300 ${scrolledIntro ? 'bg-white' : 'bg-transparent'}`}>
      <nav className="flex justify-between items-center px-4 h-[50px]">
        {/* Contact Us */}
        <div
          className="flex items-center cursor-pointer hover:bg-gray-900 py-2 rounded-full"
          onClick={() => navigateTo('/contact/')} // Navigate to the contact page
        >
          <IoCallOutline size={22} className={`mx-2 cursor-pointer ${scrolledIntro ? 'text-black' : 'text-white'}`} />
        </div>

        {/* Empress Logo */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => navigateTo('/')}
        >
          <Image src={EmpressLogo} width={70} height={70} alt="Empress Logo" />
        </div>

        {/* Icons Section */}
        <div className="flex items-center text-xl space-x-10 mx-2">
          <div
            className={`cursor-pointer ${scrolledIntro ? 'text-black' : 'text-white'}`}
          >
            <WishlistDropdown />
          </div>
          <div
            className={`cursor-pointer ${scrolledIntro ? 'text-black' : 'text-white'}`}
            onClick={() => navigateTo('/accounts/')}
          >
            <UserDropdown />
          </div>
          <div
            className={`cursor-pointer ${scrolledIntro ? 'text-black' : 'text-white'}`}
          >
            <CartDropdown />
          </div>
        </div>
      </nav>
    </div>
  );
}
