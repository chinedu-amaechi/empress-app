import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { CiGlobe } from "react-icons/ci";
import { FaLanguage } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function PersonalInformation() {
    return(
        <div>
                {/* Text  */}
                <p className="text-3xl font-semibold tracking-wide mt-3">Personal Information</p>
                <p className="text-gray-500">Manage your personal information, including phone numbers and email add where you can be contacted.</p>

                {/* Information Boxes  */}
                <div className="flex justify-between p-5 space-x-5">

                    {/* Name Box  */}
                    <div className="flex flex-col w-1/2 space-y-1 bg-white p-5 pb-14 rounded-xl">
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-semibold tracking-wide">Name</p>
                            <FaRegUserCircle size={30} className="text-orange-500"/>
                        </div>
                        <p className="text-gray-600">John Doe</p>
                    </div>

                    {/* DOB Box  */}
                    <div className="flex flex-col w-1/2 space-y-2 bg-white p-5 pb-14 rounded-xl">
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-semibold tracking-wide">Date of Birth</p>
                            <SlCalender size={30} className="text-orange-500"/>
                        </div>
                        <p className="text-gray-600">27th July, 2005</p>
                    </div>
                </div>
                <div className="flex justify-between p-5 space-x-5">

                    {/* Country Box  */}
                    <div className="flex flex-col w-1/2 space-y-2 bg-white p-5 pb-14 rounded-xl">
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-semibold tracking-wide">Country, Region</p>
                            <CiGlobe size={30} className="text-orange-500"/>
                        </div>
                        <p className="text-gray-600">Canada</p>
                    </div>

                    {/* Language Box  */}
                    <div className="flex flex-col w-1/2 space-y-2 bg-white p-5 pb-14 rounded-xl">
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-semibold tracking-wide">Language</p>
                            <FaLanguage size={30} className="text-orange-500"/>
                        </div>
                        <p className="text-gray-600">English</p>
                    </div>
                </div>
                <div className="flex justify-between p-5 space-x-5">

                    {/* Contact Email  */}
                    <div className="flex flex-col w-1/2 space-y-2 bg-white p-5 pb-14 rounded-xl">
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-semibold tracking-wide">Contact Email</p>
                            <MdAlternateEmail size={30} className="text-orange-500"/>
                        </div>
                        <p className="text-gray-600">contact@empress.ca</p>
                    </div>
                </div>
        </div>
    )
}