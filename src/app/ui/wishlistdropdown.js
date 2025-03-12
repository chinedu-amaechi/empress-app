'use client'
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import ReactDOM from "react-dom";
import { FaRegTrashCan } from "react-icons/fa6";

const WishlistDropdown = () => {
    const routerWishlist = useRouter();

    const navigateTo = (path) => {
        routerWishlist.push(path)
    }

    const [wishlistItems, setWishlistItems] = useState([
        { id: 1, name: "Product 1", image: "/bracelet-01.jpg" },
        { id: 2, name: "Product 2", image: "/bracelet-02.jpg" },
    ]);

    const removeFromWishlist = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    }

    const [wishlistDropdown, setWishlistDropdown] = useState(false);
    const [wishlistDropdownPosition, setWishlistDropdownPosition] = useState({top:0, left:0})
    const wishlistIconRef = useRef(null)
    const [dropdownTimer, setDropdownTimer]= useState(null);

    const handleMouseEnter =() => {
        if(wishlistIconRef.current) {
            const rect= wishlistIconRef.current.getBoundingClientRect();
            const windowWidth = window.innerWidth;
            const dropdownWidth = 300;

            
            let left = rect.left + window.scrollX - 25;
            if (left + dropdownWidth > windowWidth) {
                left = windowWidth - dropdownWidth -20
            }

            setWishlistDropdownPosition({top: rect.bottom + window.scrollY+15, left})
        }
        
        if (dropdownTimer) {
            clearTimeout(dropdownTimer)
        }
        setWishlistDropdown(true);
    }

    const handleMouseLeave = () => {
        const timer= setTimeout (() => {
            setWishlistDropdown(false)
        },200);

        setDropdownTimer(timer);
    }


    return(<div className="relative cursor-pointer w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={wishlistIconRef}>
        <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => navigateTo('/wishlist/')}>
        <FaRegHeart size={20}/>
        </div>
        {wishlistDropdown && ReactDOM.createPortal(
            <div className="absolute bg-white border shadow-lg w-72 p-3 rounded" style={{top: wishlistDropdownPosition.top, left: wishlistDropdownPosition.left}}>
                <ul className="text-black text-lg max-h-[300px] overflow-auto">
                    {wishlistItems.length > 0 ? (
                        wishlistItems.map((item) => (
                            <li key={item.id} className="flex justify-between items-center p-2 border-b">
                                <Image src={item.image} width={75} height={75} alt={item.name} className="rounded"/>
                                <p className="text-sm">
                                    {item.name}
                                </p>
                                <button onClick={() => removeFromWishlist(item.id)} className=" hover:text-red-500 px-2">
                                    <FaRegTrashCan size={18}/>
                                </button>
                            </li>
                        ))
                    ) : (
                        <li className="text-gray-500 text-center text-xl">Your Favorites is empty</li>
                    )}
                </ul>
                {wishlistItems.length > 0 && (
                        <div className="flex items-center justify-center bg-white">
                            <div className="group flex justify-center items-center w-fit p-2" onClick={() => navigateTo('/wishlist/')}>
                                <button className="relative text-lg font-semibold">
                                    View Favorites
                                    <span className="absolute left-0 bottom-[2px] h-[2px] w-0 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            </div>
                        </div>
                    )}
            </div>, document.body)}
    </div>)
}

export default WishlistDropdown;