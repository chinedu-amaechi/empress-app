
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Visa from '../../../public/icons/visa.png';
import MasterCard from '../../../public/icons/masterCard.png';
import PayPal from '../../../public/icons/paypal.png';
import ApplePay from '../../../public/icons/applePay.png';
import { FaRegSadTear } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useWindowSize } from 'react-use';
import ReactConfetti from 'react-confetti';
import { IoCartOutline } from "react-icons/io5";
import OrderSummary from '../ui/ordersummary';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  // Local cart data array
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 29.99, image: "/bracelet-01.jpg", count: 1 },
    { id: 2, name: "Product 2", price: 49.99, image: "/bracelet-02.jpg", count: 1 },
    // Add more items as needed
  ]);

  const [deliveryOption, setDeliveryOption] = useState('Standard');
  const [promoCode, setPromoCode] = useState('');
  const [isConfetti, setIsConfetti] = useState(false);
  const [message, setMessage] = useState('');
  const { width, height } = useWindowSize();
  const [subtotal, setSubtotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(0);

  const validPromoCodes = ['manjot12', 'empress20', 'bracelet15'];

  const routerCart = useRouter();

  const navigateTo = (path) => {
    routerCart.push(path);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update item count in cart
  const updateCartItemCount = (id, count) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: count } : item
      )
    );
  };

  // Calculate subtotal whenever cartItems change
  useEffect(() => {
    const newSubTotal = cartItems.reduce((acc, item) => acc + item.price * (item.count || 1), 0);
    setSubtotal(newSubTotal);
  }, [cartItems]);

  // Calculate shipping fee based on delivery option
  useEffect(() => {
    let newShippingFee = 0;
    if (deliveryOption === 'Preferred') newShippingFee = 5;
    else if (deliveryOption === 'Express') newShippingFee = 10;
    setShippingFee(newShippingFee);
  }, [deliveryOption]);

  // Calculate discount based on discount percentage
  useEffect(() => {
    if (discountPercent > 0) {
      const newDiscount = subtotal * (discountPercent / 100);
      setDiscount(newDiscount);
    } else {
      setDiscount(0);
    }
  }, [subtotal, shippingFee, discountPercent]);

  // Handle delivery option change
  const handleDeliveryChange = (event) => {
    setDeliveryOption(event.target.value);
  };

  // Handle promo code submission
  const handlePromoSubmit = () => {
    const trimmedCode = promoCode.trim().toLowerCase();

    if (validPromoCodes.includes(trimmedCode)) {
      const match = trimmedCode.match(/\d{2}$/);

      if (match) {
        const discountPercentage = parseInt(match[0]);

        if (discountPercentage > 0 && discountPercentage <= 99) {
          setDiscountPercent(discountPercentage);
          setIsConfetti(true);
          setMessage(`🎉 ${discountPercentage}% Discount Applied !! 🎉`);
        }
      }

      setTimeout(() => {
        setIsConfetti(false);
      }, 5000);
    } else {
      setMessage('Sorry, Try Another Code!');
    }
    setPromoCode('');
  };

  // ItemsDisplay component
  const ItemsDisplay = () => {
    return (
      <div className='w-full mx-2 px-5 py-2'>
        {cartItems.length > 0 ? (
          <ul className="space-y-4 overflow-auto">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center space-x-4 p-4">
                <div className='flex items-center justify-between w-full'>
                  <div className='flex items-center space-x-5 text-xl font-semibold'>
                    <Image src={item.image} width={200} height={100} alt={item.name} className='rounded-xl' />
                    <p>{item.name}</p>
                  </div>
                  <div className='flex items-center justify-center text-xl space-x-5'>
                    <button
                      onClick={() => updateCartItemCount(item.id, Math.max(1, (item.count || 1) - 1))}
                      className='hover:bg-gray-200 px-3 rounded-full'
                    >
                      -
                    </button>
                    <span className='border border-gray-200 px-3 rounded'>{item.count || 1}</span>
                    <button
                      onClick={() => updateCartItemCount(item.id, (item.count || 1) + 1)}
                      className='hover:bg-gray-200 px-2 rounded-full'
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:bg-red-500 hover:text-white p-2 rounded"
                  >
                    <FaRegTrashCan />
                  </button>
                  <p className='text-2xl font-semibold'>${item.price}.00</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className='flex flex-col justify-center items-center w-full h-full space-y-3'>
            <FaRegSadTear size={'150px'} className='text-gray-500' />
            <p className='text-3xl font-semibold text-gray-700'>Your cart is empty</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='mx-[100px] relative'>
      {isConfetti && (
        <ReactConfetti
          width={width}
          height={height}
          numberOfPieces={400}
          gravity={0.3}
          wind={0.02}
          recycle={false}
          opacity={0.9}
          tweenDuration={5000}
        />
      )}
      <div className='flex justify-between items-center text-sm tracking-wide py-7'>
        <button className='border rounded border-gray-400 px-4 py-3' onClick={() => navigateTo('/product-store/')}>CONTINUE SHOPPING</button>
        <button
          className={`rounded px-4 py-3 text-white ${cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'}`}
          disabled={cartItems.length === 0}
          onClick={() => navigateTo('/payment/')}
        >
          CHECKOUT NOW
        </button>
      </div>
      <hr className='border border-gray-300'></hr>
      <div className='flex justify-between'>
        <ItemsDisplay />

        {/* Right Section */}
        <div className='rounded-lg w-1/4'>
          {/* Promo Code Section */}
          <div className='px-4 py-2 bg-gray-100 my-4 rounded'>
            <h1 className='text-xl tracking-wider font-semibold py-2'>PROMO CODE</h1>
            <div className='flex justify-center my-2'>
              <input
                type='text'
                placeholder='Enter Promo Code'
                className='p-2'
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button className='bg-black text-white tracking-wide text-sm py-2 px-4' onClick={handlePromoSubmit}>
                Submit
              </button>
            </div>
            {message && <p className='text-sm'>{message}</p>}
          </div>

          {/* Shipping Section */}
          <div className='px-4 py-2 bg-gray-100 my-6 rounded'>
            <h1 className='text-xl tracking-wider font-semibold py-2'>SHIPPING</h1>
            <select
              id='delivery'
              value={deliveryOption}
              onChange={handleDeliveryChange}
              className="py-3 my-2 px-4 w-full rounded cursor-pointer"
            >
              <option value='Standard'>Standard (Free)</option>
              <option value='Preferred'>Preferred ($5.00)</option>
              <option value='Express'>Express ($10.00)</option>
            </select>
          </div>

          {/* Order Summary Section */}
          <div className='flex flex-col bg-gray-100 justify-between px-4 py-3 rounded'>
            <OrderSummary subtotal={subtotal} shippingFee={shippingFee} discount={discount} />
            <button
              className={`rounded px-4 py-3 text-white ${cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'}`}
              disabled={cartItems.length === 0}
              onClick={() => navigateTo('/payment/')}
            >
              CHECKOUT NOW
            </button>
          </div>

          {/* Payment Method Text */}
          <div className='flex my-5 mx-3 items-center justify-between'>
            <p className='text-sm font-semibold'>Payment methods</p>
            <div className='flex w-25 space-x-1'>
              <Image src={Visa} width={30} height={30} alt='Visa' />
              <Image src={MasterCard} width={40} height={40} alt='Master Card' />
              <Image src={PayPal} width={40} height={40} alt='Paypal' />
              <Image src={ApplePay} width={30} height={30} alt='Apple Pay' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
