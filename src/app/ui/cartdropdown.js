'use client'
import React, { useState, useRef} from "react";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import ReactDOM from "react-dom";
import BraceletExample from '../../../public/bracelet_ex.png';
import { IoIosArrowForward } from "react-icons/io";
import { useCart } from "./cartcontext";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";


const CartDropdown = ({}) => {
    const routerCart = useRouter();
    
    const navigateTo = (path) => {
        routerCart.push(path);
    };
    
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Product 1", price: 29.99, image: "/bracelet-01.jpg" },
        { id: 2, name: "Product 2", price: 49.99, image: "/bracelet-02.jpg" },
        // Add more items as needed
    ]);

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const updateCartItemCount = (id, count) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, count: count } : item
            )
        );
    };


    const [cartDropdown, setCartDropdown] = useState(false);
    const [cartDropdownPosition, setCartDropdownPosition] = useState({ top: 0, left: 0 });
    const cartIconRef = useRef(null);
    const [dropdownTimer, setDropdownTimer]= useState(null);

    const handleMouseEnter = () => {
        if (cartIconRef.current) {
            const rect = cartIconRef.current.getBoundingClientRect();
            const windowWidth = window.innerWidth;
            const dropdownWidth = 360;

            let left = rect.left + window.scrollX - 25;
            if (left + dropdownWidth > windowWidth) {
                left = windowWidth - dropdownWidth -15;
            }

            setCartDropdownPosition({ top: rect.bottom + window.scrollY + 15, left: left });
        }

        if (dropdownTimer) {
            clearTimeout(dropdownTimer);
        }
        setCartDropdown(true);
    };

    const handleMouseLeave = () => {
        const timer= setTimeout (() => {
            setCartDropdown(false)
        },200);

        setDropdownTimer(timer);
    };

    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const cartDropdownContent = cartDropdown && (
        <div
            className="absolute bg-white border shadow-lg rounded-md w-[360px]"
            style={{ top: cartDropdownPosition.top, left: cartDropdownPosition.left}}
        >
        <div className="max-h-[400px] overflow-auto">
            <ul className="flex flex-col justify-center items-center text-black text-xl text-nowrap p-2">
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <CartItem key={item.id}
                         item={item}
                         onRemove={() => removeFromCart(item.id)}
                         onUpdateCount={(count) => updateCartItemCount(item.id, count)} />
                    </li>
                ))}
                {cartItems.length === 0 && (
                    <ul className="space-y-1 flex flex-col items-center">
                        <li className="text-gray-500 text-xl">Your cart is empty</li>
                        <li className="text-gray-500">
                            <button className="bg-black py-3 px-[80px] text-white hover:bg-gray-800">
                                Continue Shopping
                            </button>
                        </li>
                    </ul>
                )}
            </ul>
        </div>
        {cartItems.length > 0 && (
                <div className="flex items-center justify-center bg-white">
                        <div className="group flex justify-center items-center w-fit p-2 my-1" onClick={() => navigateTo('/cart/')}>
                            <button className="relative text-lg font-semibold">
                                View Cart
                                <span className="absolute left-0 bottom-[2px] h-[2px] w-0 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        </div>
                </div>
            )}
        </div>
    );

    return (
        <div
            className="relative cursor-pointer w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={cartIconRef}
        >
            <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => navigateTo('/cart/')}>
                <IoCartOutline size={24} />
            </div>
            {cartDropdown && ReactDOM.createPortal(cartDropdownContent, document.body)}
        </div>
    );
};

export default CartDropdown;

const CartItem = ({ item, onRemove, onUpdateCount }) => {
    const [count, setCount] = useState(1);
    const [isLiked, setIsLiked] = useState(false)

    const handleLiked = () => {
        setIsLiked((prev) => !prev);
    };

    const handlePlusClick = () => {
        setCount((prevCount) => prevCount + 1);
        onUpdateCount(count+1);
    };

    const handleMinusClick = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
            onUpdateCount(count - 1);
        }
    };

    return (
        <div className="hover:bg-gray-200 cursor-pointer w-full">
            <div className="flex flex-row justify-between px-5">
                    <Image src={item.image} width={150} height={50} alt={item.name} className="py-3"/>
                <div className="flex flex-col py-2">
                    <div className="flex items-center justify-between">
                        <p className="text-wrap text-sm py-4 px-3">{item.name}</p>
                        <button onClick={handleLiked}>
                            {isLiked ? (
                                <FaHeart size={16} className="text-red-500 mx-5"/>
                            ): <FaRegHeart size={16} className="text-red-500 mx-5"/>}
                        </button>
                    </div>
                    <h1 className="text-md px-3 font-semibold">${item.price}</h1>
                    <div className="flex flex-row justify-between text-sm m-2">
                        <div className="flex justify-center items-center">
                            <button
                                className="rounded-full hover:bg-gray-300 px-2 m-2 "
                                onClick={handleMinusClick}
                            >
                                -
                            </button>
                            <p className="border border-gray-300 px-2">{count}</p>
                            <button
                                className=" rounded-full hover:bg-gray-300 px-2 m-2"
                                onClick={handlePlusClick}
                            >
                                +
                            </button>
                        </div>
                        <div className="flex justify-center items-center hover:text-red-600 text-black">
                            <button className="py-4 px-2" onClick={onRemove}>
                                <FaRegTrashCan size={16}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};