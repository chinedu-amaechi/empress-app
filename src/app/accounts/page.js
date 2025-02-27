'use client'
import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa6";
import PersonalInformation from '../ui/personalinfo';
import OrderHistory from '../ui/orderhistory'

export default function AccountPage() {
    const [signedIn, setSignedIn] = useState(false);
    const [step, setStep] = useState(1);

    return(
        <div className="flex space-x-28 px-[150px] bg-gray-100">

            {/* Left Section  */}
            <div className="flex flex-col space-y-10 py-16">

                {/* UserName, email and photo  */}
                <div className="flex flex-col items-center space-y-3 cursor-pointer">
                    <FaRegUserCircle size={150}/>
                    <div>
                        <p className="text-3xl font-semibold tracking-wide">John Doe</p>
                        <p className="text-gray-400 text-sm">john.doe@gmail.com</p>
                    </div>
                </div>

                {/* Links  */}
                <div className="flex flex-col items-start text-2xl space-y-2 text-gray-500 cursor-pointer">
                    <p className="hover:text-orange-500 hover:scale-105">Personal Information</p>
                    <p className="hover:text-orange-500 hover:scale-105">Billing and Payments</p>
                    <p className="hover:text-orange-500 hover:scale-105">My Orders</p>
                    <p className="hover:text-orange-500 hover:scale-105">Gift Cards</p>

                </div>
                <button className=" tracking-wide py-3 bg-red-500 rounded-full text-white">
                    Sign out
                </button>
            </div>

            {/* Right Section  */}
            <div className="flex flex-col space-y-3 py-16">

                {/* Barcode  */}
                <div className="flex space-x-2 mx-20 justify-center items-center bg-white p-5 rounded-2xl mb-5">
                    <FaBarcode size={150}/>
                    <FaBarcode size={150}/>
                    <FaBarcode size={150}/>
                </div>
                <div>
                    <OrderHistory/>
                </div>
            </div>
        </div>)
}