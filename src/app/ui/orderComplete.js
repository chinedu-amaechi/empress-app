import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function OrderComplete () {
    return(
        <div className="flex flex-col w-full justify-center items-center py-10 space-y-5">
            <div>
                <FaCheckCircle size={100} className="text-green-500"/>
            </div>

            {/* Order placed and Reference Number  */}
            <div className="flex flex-col justify-center items-center">
                <p className="text-5xl tracking-wide font-semibold">Order Placed</p>
                <p className="text-sm">Reference Number: #32092024</p>
            </div>

            {/* Continue Shopping Link */}
            <div className="flex py-2">
                <Link href={'/product-store/'} className="flex items-center tracking-wide text-xl text-blue-400 hover:border-b-2 border-blue-400 transition-all duration-75 ">Continue Shopping<FaChevronRight size={30}/></Link>
            </div>


            {/* Suggestion Container 
            <div className="flex flex-col px-1023 items-start justify-start">
                <h1 className="text-xl tracking-wide font-semibold border-b-2 py-2 w-full">Also Check Out</h1>
                <div className="flex justify-start items-start">
                    <BraceletComponent />
                    <BraceletComponent />
                    <BraceletComponent />
                </div>
            </div> */}
        </div>
    )
}