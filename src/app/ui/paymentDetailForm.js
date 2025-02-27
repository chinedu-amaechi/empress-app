import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentDetailForm () {
    return(
        <div className="flex flex-col px-16">
            <div className="flex flex-col bg-white p-5 rounded-xl my-3">
            <h1 className="text-2xl font-semibold tracking-wide">
                    Your Information
            </h1>
            <hr className="w-full border border-gray-300 my-3"/>
            <div className="flex items-center space-x-2 p-4 bg-green-200 rounded-lg text-sm tracking-wide">
                <FaCheckCircle size={25} className=" text-green-500"/>
                <p>Congratulations! We got your information.</p>
            </div>

            <div className="flex justify-between mx-10 mt-5">
                <div className="flex flex-col text-center">
                    <h1 className="text-gray-400 text-sm">Full Name</h1>
                    <p className="text-lg font-semibold tracking-wide">John Doe</p>
                </div>

                <div className="flex flex-col text-center">
                    <h1 className="text-gray-400 text-sm">Email</h1>
                    <p className="text-lg font-semibold tracking-wide">john.doe@gmail.com</p>
                </div>

                <div className="flex flex-col text-center">
                    <h1 className="text-gray-400 text-sm">Phone Number</h1>
                    <p className="text-lg font-semibold tracking-wide">+1 (234) 5678-9012</p>
                </div>
            </div>
            </div>


            <div className="flex flex-col bg-white p-5 rounded-xl mb-8">
            <h1 className="text-2xl font-semibold tracking-wide">
                Payment Details
            </h1>
            <hr className="w-full
             border border-gray-300 mt-3"/>
                    
            <p className="text-xs font-light text-gray-400 py-2">Please fill out the form below. Enter your cart account details.</p>
                    
            <div className="flex flex-col space-y-5">
                <div className="flex flex-col">
                    <label htmlFor='cardNumber' className="py-1">Cart Number</label>
                    <input
                        type="text"
                        placeholder="xxxx xxxx xxxx xxxx"
                        id='cardNumber'
                        className="px-4 py-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"
                        maxLength={19} 
                        required/>
                </div>
                    
                <div className="flex justify-start space-x-10">
                    <div className="flex flex-col">
                        <label htmlFor='expiryDate' className="py-1">Expiry Date</label>
                        <div>
                            <input
                            type="text"
                            placeholder="12"
                            id='expiryDate'
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-3"
                            maxLength="2" 
                            required/>
                            <input
                            type="text"
                            placeholder="1234"
                            id='expiryDate'
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            maxLength={4}
                            required/>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor='cvv' className="py-1">CVV/CVC</label>
                        <input
                        type="text"
                        placeholder="123"
                        id='cvv'
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        maxLength={3} 
                        required/>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor='nameOnCard' className="py-1">Name on Card</label>
                    <input
                    type="text"
                    placeholder="John Doe"
                    id='nameOnCard'
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
            </div>
        </div>

        </div>
    )
}