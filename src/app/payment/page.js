'use client'
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import OrderSummary from '../ui/ordersummary';
import PaymentDetailForm from '../ui//paymentDetailForm'
import PersonalDetailForm from '../ui/personalDetailForm'
import OrderComplete from '../ui/orderComplete'
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PaymentPage() {
    const [step, setStep] = useState(1);
    const subtotal=100;
    const shippingFee=0;
    const discount=10;

    const routerPaymentPage = useRouter();

    const handleNextStep = () => {
        setStep((prevStep) => prevStep+1);
    }

    return(
        <div className="flex flex-col">
            {/* Cancel bar  */}
            <CancelBar router={routerPaymentPage} step={step}/>



            {/* Progress Bar  */}
            <div className="flex items-center justify-center space-x-3 py-5 font-semibold border-y">
                <ProgressStep step={step} index={1} label={'Personal details'}/>
                <hr className="w-36 border border-gray-600"/>
                <ProgressStep step={step} index={2} label={'Payment details'}/>
                <hr className="w-36 border border-gray-600"/>
                <ProgressStep step={step} index={3} label={'Complete'}/>
            </div>

            
            <div className="flex justify-between bg-gray-100 h-[100vh] overflow-hidden">

                {/* Slide Container */}
                <div className="relative w-full">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                            key={'personal'}
                            initial={{x:'100%', opacity:0}}
                            animate={{x:0, opacity:1}}
                            exit={{x: '-100%', opacity:0}}
                            transition={{duration:0.5, ease:'easeInOut'}}
                            className="absolute w-full p-5">
                                <PersonalDetailForm/>
                            </motion.div>
                        )}
                        {step === 2 && (
                            <motion.div
                            key={'payment'}
                            initial={{x:'100%', opacity:0}}
                            animate={{x:0, opacity:1}}
                            exit={{x: '-100%', opacity:0}}
                            transition={{duration:0.5, ease:'easeInOut'}}
                            className="absolute w-full p-5">
                                <PaymentDetailForm/>
                            </motion.div>
                        )}
                        {step === 3 && (
                            <motion.div
                            key={'complete'}
                            initial={{x:'100%', opacity:0}}
                            animate={{x:0, opacity:1}}
                            exit={{x: '-100%', opacity:0}}
                            transition={{duration:0.5, ease:'easeInOut'}}
                            className="w-full p-5">
                                <OrderComplete/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {step < 3 && (
                    <motion.div
                    initial={{ opacity: 1, x: 0 }} 
                    animate={{ opacity: step === 3 ? 0 : 1, x: step === 3 ? 50 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col w-1/3 mr-20 my-8 space-y-5">
                        <div className="flex flex-col h-fit bg-white px-10 py-5 rounded-xl">
                            <OrderSummary subtotal={subtotal} shippingFee={shippingFee} discount={discount}/>
                        </div>
                        <button
                            className="text-white bg-blue-600 rounded-lg py-2 mx-4 text-lg transition-all duration-200 border-2 border-blue-600 hover:bg-gray-200 hover:text-blue-600 tracking-wider hover:font-semibold"
                            onClick={handleNextStep}
                        >
                            {step === 1 ? "Continue" : "Process Payment"}
                        </button>
                    </motion.div>
                )}

            </div>
        </div>
    )
}

export const CancelBar = ({router, step}) => {

    const handleCancelPayment = () => {
        router.push('/pages/cart')
    }
    return(
        <div className={`flex transition-all ease-in-out duration-1000 ${step!==3 ? 'justify-between' : 'justify-center'} px-24 py-3`}>
            <h1 className="text-3xl font-semibold tracking-wider">empress</h1>
            {step !==3 && (
                <button className="flex border border-gray-300 py-2 items-center space-x-2 px-3 hover:bg-gray-200" onClick={handleCancelPayment}>
                    <RxCross2 size={20} className="text-red-500"/>
                    <p className="font-semibold">Cancel Payment</p>
                </button>
            )}
        </div>
    )
}

const ProgressStep = ({ step, index, label }) => (
    <div className="flex items-center space-x-2">
        <p className={`px-4 py-2 rounded-full text-white font-semibold 
            ${step === index ? "bg-blue-700" : "bg-gray-400"}`}>
            {index}
        </p>
        <p className="text-black">{label}</p>
    </div>
);
