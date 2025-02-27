import React from 'react';

const OrderSummary = ({subtotal, shippingFee, discount}) => {
    const total = subtotal + shippingFee - discount

    return(
        <div >
        <h1 className='text-xl tracking-wider font-semibold py-2'>Order Summary</h1>
        <hr className='border border-gray-300'/>
        <div className='flex justify-between py-2'>
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className={`flex justify-between py-2 ${discount > 0 ? 'text-green-500 font-bold' : 'text-black'}`}>
          <p>Discounts Applied</p>
          <p>${discount.toFixed(2)}</p>
        </div>
        <div className='flex justify-between py-2'>
          <p>Shipping & Fees</p>
          <p>${shippingFee.toFixed(2)}</p>
        </div>
        <div className='flex justify-between py-3 font-semibold'>
          <p>Estimated Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>
    )
}

export default OrderSummary;