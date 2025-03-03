'use client';
import React, { useState } from "react";
import { FaRegUserCircle, FaBarcode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import PersonalInformation from '../ui/personalinfo';
import OrderHistory from '../ui/orderhistory';
import Billing from "../ui/billingandpayment";

export default function AccountPage() {
    const [activeComponent, setActiveComponent] = useState("personalInfo");

    const handleLinkClick = (component) => {
        setActiveComponent(component);
    };

    return (
        <div className="flex space-x-28 px-[150px] bg-gray-100">
            {/* Left Section */}
            <div className="flex flex-col space-y-10 py-16">
                {/* UserName, email, and photo */}
                <div className="flex flex-col items-center space-y-3 cursor-pointer">
                    <FaRegUserCircle size={150} />
                    <div>
                        <p className="text-3xl font-semibold tracking-wide">John Doe</p>
                        <p className="text-gray-400 text-sm">john.doe@gmail.com</p>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col text-nowrap items-start text-2xl space-y-2 text-gray-500 cursor-pointer">
                    <p
                        className={`hover:text-orange-500 hover:scale-105 ${
                            activeComponent === "personalInfo" ? "text-orange-500" : ""
                        }`}
                        onClick={() => handleLinkClick("personalInfo")}
                    >
                        Personal Information
                    </p>
                    <p className={`hover:text-orange-500 hover:scale-105 ${
                            activeComponent === "billingAndPayments" ? "text-orange-500" : ""
                        }`}
                        onClick={() => handleLinkClick("billingAndPayments")}>Billing and Payments</p>
                    <p
                        className={`hover:text-orange-500 hover:scale-105 ${
                            activeComponent === "orderHistory" ? "text-orange-500" : ""
                        }`}
                        onClick={() => handleLinkClick("orderHistory")}
                    >
                        My Orders
                    </p>
                </div>
                <button className="font-semibold hover:text-red-600 hover:bg-red-100 tracking-wide py-3 bg-red-500 rounded-full text-white border-2 border-red-500">
                    Sign out
                </button>
            </div>

            {/* Right Section */}
            <div className="flex flex-col space-y-3 py-16 w-3/4">
                {/* Barcode Section (Static) */}
                <div className="flex space-x-2 mx-20 justify-center items-center bg-white p-5 rounded-2xl mb-5">
                    <FaBarcode size={150} />
                    <FaBarcode size={150} />
                    <FaBarcode size={150} />
                </div>

                {/* Animated Content Section */}
                <div className="w-full">
                    <AnimatePresence mode="wait">
                        {activeComponent === "personalInfo" && (
                            <motion.div
                                key="personalInfo"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <PersonalInformation />
                            </motion.div>
                        )}
                        {activeComponent === "orderHistory" && (
                            <motion.div
                                key="orderHistory"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <OrderHistory />
                            </motion.div>
                        )}
                        {activeComponent === "billingAndPayments" && (
                            <motion.div
                                key="billingAndPayments"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Billing/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}