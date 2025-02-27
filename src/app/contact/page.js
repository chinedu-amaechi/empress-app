'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaXTwitter, FaInstagram, FaYoutube,FaLinkedin } from "react-icons/fa6";

export default function ContactPage() {
    const [query, setQuery] = useState('');

    return(<div className="flex mx-24 my-10">
        <div className="w-1/2 h-full mx-10 bg-gradient-to-b from-blue-800 to-blue-300 text-white rounded-xl px-10 py-10 ">
            <h1 className="py-2 text-2xl font-semibold tracking-wide">
                Find a store
            </h1>

            <div className="bg-white text-black flex items-center justify-center py-24 my-2 rounded-xl">
                Google map
            </div>

            <div className="text-xl py-5 space-y-4">
                <div>
                    <h1 className="text-lg tracking-wide">
                        Visit us
                    </h1>
                    <p className="text-sm">Come say hello to us at our store.</p>
                    <p className="text-sm font-semibold tracking-wide">23 Empress St, Calgary</p>
                </div>
                <div>
                    <h1 className="text-lg tracking-wide">
                        Message us
                    </h1>
                    <p className="text-sm">Our friendly team is here to help.</p>
                    <p className="text-sm font-semibold tracking-wide">support@empress.ca</p>
                </div>
                <div>
                    <h1 className="text-lg tracking-wide">
                        Call us
                    </h1>
                    <p className="text-sm">Mon-Fri 8am to 5pm.</p>
                    <p className="text-sm font-semibold tracking-wide">+1 (322) 3489-3029</p>
                </div>
            </div>

            <div className="text-xl">
                <h1 className='tracking-wide'>Social Media</h1>
                <div className="py-2 text-sm cursor-pointer">
                    <button className="transition delay-150 duration-300 ease-in-out hover:scale-110">
                            <FaXTwitter size={20} />
                        </button>
                        <button className="transition delay-150 duration-300 ease-in-out hover:scale-110">
                            <FaInstagram size={20} className="mx-2.5"/>
                        </button>
                        <button className="transition delay-75 duration-200 ease-in-out hover:scale-110">
                            <FaYoutube size={20} className="mr-2.5"/>
                        </button>
                        <button className="transition delay-150 duration-300 ease-in-out hover:scale-110">
                            <FaLinkedin size={20} className="mr-2.5"/>
                        </button>
                    </div>
            </div>

        </div>
        <div className="flex flex-col space-y-6 mx-20">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <label htmlFor='fistName' className="py-1">First Name</label>
                <input
                type="text"
                placeholder="John"
                id='firstName'
                onChange={(e) => setQuery(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor='lastName' className="py-1">Last Name</label>
                <input
                type="text"
                placeholder="Doe"
                id='lastName'
                className="px-4 py-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
            </div>

            <div className="flex flex-col">
                <label htmlFor='email' className="py-1">Email</label>
                <input
                type="email"
                placeholder="Email"
                id='email'
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            <div className="flex flex-col">
                <label htmlFor='phone' className="py-1">Phone Number</label>
                <input
                type="tel"
                placeholder="(893) 4290-3290"
                id='phone'
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            <div className="flex flex-col">
                <label htmlFor='message' className="py-1">Message</label>
                <textarea
                defaultValue=''
                placeholder="Tell us what we can help you with"
                id='message'
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>

            <div className="flex py-2">
                <input
                type="checkbox"
                placeholder="Tell us what we can help you with"
                id='terms'
                className="focus:outline-none"/>
                <label htmlFor='terms' className="mx-3">I'd like to receive more information about company. I understand and agree to the <Link href={'/'} className="text-blue-400 transition-all ease-in-out duration-200 hover:border-b-2 hover:border-blue-400 text-nowrap">Privacy Policy</Link></label>
            </div>
            <button className="text-white bg-blue-400 rounded-lg py-3 text-lg transition-all duration-200 hover:bg-blue-600 hover:tracking-wide">Send Message</button>
        </div>
    </div>)
}