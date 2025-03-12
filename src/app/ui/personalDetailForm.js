import React from "react"

export default function PersonalDetailForm() {
    return(
        <div className="flex flex-col my-3 bg-white rounded-xl p-8 mx-16">
            <h1 className="text-2xl font-semibold tracking-wide">
                Personal Details
            </h1>
            <hr className="w-full
             border border-gray-300 mt-3"/>
                    
            <p className="text-xs font-light text-gray-400 py-2">Please fill out the personal detail form below.</p>
                    
            <div className="flex flex-col space-y-5">
            <div className="flex justify-start space-x-10">
                <div className="flex flex-col">
                    <label htmlFor='fistName' className="py-1">First Name</label>
                    <input
                        type="text"
                        placeholder="John"
                        id='firstName'
                        className="px-4 py-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor='lastName' className="py-1">Last Name</label>
                    <input
                    type="text"
                    placeholder="Doe"
                    id='lastName'
                    className="px-4 py-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                    </div>
                </div>
                    
                <div className="flex justify-start space-x-10">
                    <div className="flex flex-col">
                        <label htmlFor='email' className="py-1">Email</label>
                        <input
                        type="email"
                        placeholder="Email"
                        id='email'
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor='phone' className="py-1">Phone Number</label>
                        <input
                        type="tel"
                        placeholder="(893) 4290-3290"
                        id='phone'
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor='address' className="py-1">Address</label>
                    <input
                    type="text"
                    placeholder="Address Line 1"
                    id='address'
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>

                    <div className="flex space-x-10">
                        <div className="flex flex-col">
                            <label htmlFor='city' className="py-1">City</label>
                            <input
                            type="text"
                            placeholder="Calgary"
                            id='city'
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor='province' className="py-1">Province</label>
                            <input
                            type="text"
                            placeholder="AB"
                            id='province'
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                        </div>
                    </div>

                    <div className="flex space-x-10">
                        <div className="flex flex-col">
                            <label htmlFor='country' className="py-1">Country</label>
                            <input
                            type="text"
                            placeholder="Canada"
                            id='country'
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor='pincode' className="py-1">Pin Code</label>
                            <input
                            type="text"
                            placeholder="T1U 7V8"
                            id='pincode'
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                    </div>

                    </div>
                </div>
    )
}