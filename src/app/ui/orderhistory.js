import Image from "next/image";
import React from "react";
import BraceletImage from '../../../public/bracelet_ex.png'


function OrderCard() {
    return (
        <div className="flex flex-col bg-white p-5 space-y-4">
            <div>
                <p className="font-semibold tracking-wide text-gray-500">ORDER STATUS</p>
                <p className="text-xl font-semibold ">IT'S ORDERED</p>
                <p className="text-sm font-semibold text-green-500">Estimated delivery 20th February 2025</p>
            </div>
            <Image src={BraceletImage} width={200} alt="Bracelet"/>
            <hr className="w-full border"/>
            <div className="flex justify-between">
                <div className="space-y-2">
                    <p className="font-semibold text-gray-500">Order No.: 2392489</p>
                    <p className="font-semibold text-gray-500">Order Date: 17th February 2025</p>
                </div>
                <div className="mx-20 flex flex-col space-y-2">
                    <button className="border-2 py-2 px-10 font-semibold tracking-wide hover:bg-gray-400 hover:text-white">VIEW ORDER</button>
                    <button className="border-2 py-2 px-10 font-semibold tracking-wide hover:bg-red-500 hover:text-white">CANCEL ORDER</button>
                </div>
            </div>
        </div>
    );
}

export default function OrderHistory() {
    return (
        <div className="flex flex-col space-y-5">
            <div>
                <p className="text-3xl font-semibold tracking-wide mt-3">My Orders</p>
                <p className="text-gray-500">Manage your orders</p>
            </div>
            <div className="space-y-5">
                <OrderCard />
                <OrderCard />
            </div>
        </div>
    );
}
