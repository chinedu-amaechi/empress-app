import React, { useState } from "react";
import Image from "next/image";

export default function Billing() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCardModalOpen, setIsCardModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState("");

    const handleStarClick = (star) => {
        setRating(star);
    };

    const handleSubmitReview = () => {
        // Handle review submission logic here
        console.log("Review Submitted:", { rating, reviewText });
        setIsModalOpen(false); // Close the modal after submission
        setRating(0); // Reset rating
        setReviewText(""); // Clear review text
    };

    return (
        <div className="flex flex-col">
            <div>
                <h1 className="text-3xl font-semibold tracking-wide my-5">Payment Methods</h1>
                <div className="space-y-2">
                    <div className="flex items-center space-x-5 bg-white py-4 px-6 rounded-xl w-2/3 border hover:border-gray-500">
                        <Image src={'/icons/visa.png'} width={60} height={70} alt="Payment Options" />
                        <div className="w-full">
                            <div className="flex items-center justify-between">
                                <p className="text-xl font-semibold tracking-wide">Alex Smith</p>
                                <p className="bg-green-200 text-green-900 text-sm font-semibold px-1.5 py-1 rounded-lg">Primary</p>
                            </div>
                            <p className="text-gray-600">***** ***** ***** 8098</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-5 bg-white py-4 px-6 rounded-xl w-2/3 border hover:border-gray-500">
                        <Image src={'/icons/masterCard.png'} width={70} height={70} alt="Payment Options" />
                        <div className="w-full">
                            <div className="flex items-center justify-between">
                                <p className="text-xl font-semibold tracking-wide">Mark Smith</p>
                            </div>
                            <p className="text-gray-600">***** ***** ***** 0973</p>
                        </div>
                    </div>
                    <div className="flex bg-white hover:border-blue-500 text-sm py-3 px-4 rounded-xl w-fit justify-center border-2 cursor-pointer">
                        <p className="text-blue-700">+ Add New Payment</p>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <h1 className="text-3xl font-semibold tracking-wide my-5">Billing</h1>
                <div className="flex bg-white py-6 px-6 rounded-lg w-4/5 border hover:border-gray-300">
                    <Image src={'/bracelet_ex.png'} width={160} height={100} alt="Bracelet Picture" />
                    <div className="mx-5 space-y-1 w-full text-base">
                        <p className="font-semibold tracking-wide text-xl">Gold Cuff</p>
                        <p className="text-sm text-gray-500">SKU#: 3459875609</p>
                        <p className="text-gray-500">Purchase Date: 2/26/2025</p>
                        <div className="flex justify-between">
                            <p className="text-gray-500">Purchase At: Online Store</p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="text-base border-2 p-2 border-black font-semibold hover:text-white hover:bg-black"
                            >
                                Write Review
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white py-6 px-6 rounded-lg w-4/5 border hover:border-gray-300">
                    <Image src={'/bracelet_ex.png'} width={160} height={100} alt="Bracelet Picture" />
                    <div className="mx-5 space-y-1 w-full text-base">
                        <p className="font-semibold tracking-wide text-xl">Elegant Bracelet</p>
                        <p className="text-sm text-gray-500">SKU#: 4829438602</p>
                        <p className="text-gray-500">Purchase Date: 3/01/2025</p>
                        <div className="flex justify-between">
                            <p className="text-gray-500">Purchase At: Online Store</p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="text-base border-2 p-2 border-black font-semibold hover:text-white hover:bg-black"
                            >
                                Write Review
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg w-1/3">
                        <h2 className="text-2xl font-semibold mb-4">Write a Review</h2>
                        <div className="flex space-x-2 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    onClick={() => handleStarClick(star)}
                                    className={`text-4xl ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                        <textarea
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder="Write your review here..."
                            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                            rows={4}
                        />
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmitReview}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}