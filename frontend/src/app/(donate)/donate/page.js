"use client"

import Image from 'next/image';
import React from 'react';
import axios from 'axios';
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


export default function DonatePage() {

  const [formdata, setformdata] = React.useState({
    name: '',
    phone: '',
    email: '',
    amount: '',
    pan: '',
    country: '',
    pincode: '',
    address: ''
  });

  const onchangehandler = (e) => {
    const { name, value } = e.target;
    setformdata((data) => ({ ...data, [name]: value }));
  };

  const name = formdata.name;
  const phone = Number(formdata.phone);
  const email = formdata.email
  const outamount = Number(formdata.amount);
  const pan = formdata.pan;
  const country = formdata.country;
  const pincode = Number(formdata.pincode);
  const address = formdata.address;

  // usestate for loading
  const [loading, setLoading] = React.useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleDonate = async (e) => {
    e.preventDefault(); // Prevent page reload

    if (!formdata || isNaN(outamount) || outamount <= 0) {
      alert('Please enter a valid amount and fill all required fields');
      return;
    }

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert('Failed to load Razorpay SDK. Please try again.');
      return;
    }

    setLoading(true);

    const after_payment = async (response) => {

      const rez_orderid = response.razorpay_order_id;
      const rez_paymentid = response.razorpay_payment_id;
      const rez_signature = response.razorpay_signature;
      await axios.put('/api/payment', { email, rez_orderid, rez_paymentid, rez_signature });
      alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
    }

    try {
      const response = await axios.post('/api/payment', { name, phone, email, outamount, pan, country, pincode, address });
      const order = response.data;
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: name,
        description: 'Thank you for your donation!',
        order_id: order.id,
        handler: function (response) {
          after_payment(response)
          setformdata({ name: '', phone: '', email: '', amount: '', pan: '', country: '', pincode: '', address: '' });
        },

        prefill: {
          name: name,
          email: email,
          contact: phone,
        },
        theme: {
          color: '#3399cc',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('something error', error);
      alert('Something went wrong while processing your donation.');
    }

    setLoading(false);
  };

  return (
    <div className='bg-white text-black flex flex-col md:flex-row justify-center '>
      {/* left section */}
      <div className='md:w-[47%] lg:w-[40%] pl-3 py-10'>
        <div className='h-20 flex items-center gap-3 mb-8 font-semibold '>
          <div className='h-20 w-20 rounded-lg shadow-[0_3px_15px_0_gray]'>
            <Image src='/assets/Logo.png' alt='logo' width={600} height={400} className='w-full h-full' />
          </div>
          <p>Quadri Khair Foundation</p>
        </div>

        <p className='text-2xl font-semibold'>Qadri Khair Foundation</p>
        <div className='border border-2 border-pink-950 my-4 w-8'></div>

        <div className='text-sm text-gray-700 pr-12'>
          <p className='font-semibold text-black'>Join us in Our Mission</p>
          <p className='mb-5'>Your support will help a child come out of the vicious cycle of generational poverty through education, health care, and a good upbringing. </p>
          <p className='text-gray-800 font-semibold'>Terms & Conditions:</p>
          <p>Before you donate, please read the following points:</p>
          <p>1. As per the Indian Income Tax Authority Rule: A donor is required to add a PAN number in case the donor wishes to avail of the 80G tax exemption certificate.</p>
          <p>2. Only Indian residents and NRI can donate; we are not accepting donations from any foreign account. NRI can only donate through an NRO account and not their foreign account. </p>
          <p>Donor will get their receipt on their Email ID .</p>
        </div>

        {/* socialmedia icons */}
        <div className='my-7 text-sm'>
          <p className='font-semibold text-black'>Share this on:</p>
          <div className='flex text-2xl gap-2 mt-2'>
            <FaFacebook className='text-blue-600' /> <FaSquareXTwitter className='text-black' /> <FaWhatsappSquare className='text-green-500' />
          </div>
        </div>

        <div className='text-sm'>
          <p className='font-semibold text-black mb-1'>Contact Us:</p>
          <div className='flex gap-3 mb-2'><MdEmail className='mt-1 text-blue-950' /><p>qadrikhairfoundation@gmail.com</p></div>
          <div className='flex gap-3'><FaPhoneAlt className='mt-1 text-sm text-blue-950' /><p>9557940516</p></div>
        </div>

        <div className='pr-12 mt-7 text-sm'>
          <p className='text-black font-semibold'>Terms & Conditions:</p>
          <p className='text-gray-700 '>You agree to share information entered on this page with Qadri Khair Foundation (owner of this page) and Razorpay, adhering to applicable laws.</p>
        </div>

      </div>

      {/* right section */}
      <div className='pb-10 md:py-10 md:w-[47%] lg:w-[40%] px-3'>
        <div className='py-5 px-3 pl-4 rounded-lg max-[768px]:max-w-110 shadow-[0_3px_15px_0_gray]'>
          <p className='font-semibold'>Payment Details</p>
          <div className='border border-2 border-pink-950 my-4 w-8'></div>
          <form onSubmit={handleDonate} className='flex flex-col gap-4 '>
            <div className='flex justify-between text-gray-700'>
              <label htmlFor="name">Name</label>
              <input type="text" onChange={onchangehandler} id="name" name="name" value={formdata.name} className='outline outline-1 outline-gray-300 focus:outline focus:outline-red-800 text-gray-700 w-60 sm:w-70 md:w-60 lg:w-70 h-10 pl-2 rounded-sm' required />
            </div>

            <div className='flex justify-between text-gray-700'>
              <label htmlFor="phone">Phone</label>
              <input type="number" onChange={onchangehandler} id="phone" name="phone" value={formdata.phone} className='outline outline-1 outline-gray-300 focus:outline focus:outline-red-800 text-gray-700 w-60 sm:w-70 md:w-60 lg:w-70 h-10 pl-2 rounded-sm' required />
            </div>

            <div className='flex justify-between text-gray-700'>
              <label htmlFor="email">Email</label>
              <input type="email" onChange={onchangehandler} id="email" name="email" value={formdata.email} className='outline outline-1 outline-gray-300 focus:outline focus:outline-red-800 text-gray-700 w-60 sm:w-70 md:w-60 lg:w-70 h-10 pl-2 rounded-sm' required />
            </div>

            <div className='flex justify-between text-gray-700'>
              <label htmlFor="amount">Amount</label>
              <input type="number" onChange={onchangehandler} id="amount" name="amount" value={formdata.amount} className='outline outline-1 outline-gray-300 focus:outline focus:outline-red-800 text-gray-700 w-60 sm:w-70 md:w-60 lg:w-70 h-10 pl-2 rounded-sm' required />
            </div>

            <div className='flex justify-between text-gray-700'>
              <label htmlFor="pan">PAN</label>
              <input type="text" onChange={onchangehandler} id="pan" name="pan" value={formdata.pan} className='outline outline-1 outline-gray-300 focus:outline focus:outline-red-800 text-gray-800 w-60 sm:w-70 md:w-60 lg:w-70 h-10 pl-2 rounded-sm' required />
            </div>
            {/* select country */}
            <div className='flex justify-between text-gray-700'>
              <label htmlFor="country">Country</label>
              <select id='country' onChange={onchangehandler} name="country" value={country} className='outline outline-1 outline-gray-300 focus:outline focus:outline-red-800 text-gray-800 w-60 sm:w-70 md:w-60 lg:w-70 h-10 pl-2 rounded-sm'>
                <option value=''>Your Country ?</option>
                <option value='india'>India</option>
                <option value='usa'>USA</option>
                <option value='japan'>Japan</option>
                <option value='russia'>Russia</option>
              </select>
            </div>

            <div className='flex justify-between text-gray-700'>
              <label htmlFor="pincode">Pincode</label>
              <input type="number" onChange={onchangehandler} id="pincode" name="pincode" value={formdata.pincode} className='outline outline-1 outline-gray-300 focus:outline focus:outline-red-800 text-gray-700 w-60 sm:w-70 md:w-60 lg:w-70 h-10 pl-2 rounded-sm' required />
            </div>

            <div className='flex justify-between text-gray-700'>
              <label htmlFor="address">Address</label>
              <input type="text" onChange={onchangehandler} id="address" name="address" value={formdata.address} className='outline outline-1 outline-gray-300 focus:outline focus:outline-red-800 text-gray-700 w-60 sm:w-70 md:w-60 lg:w-70 h-10 pl-2 rounded-sm' />
            </div>

            <button type="submit" className='text-white w-30 py-2 mx-auto mt-3 bg-red-950 cursor-pointer rounded-lg relative top-0 hover:-top-2 hover:bg-red-900 duration-300'>
              {loading ? 'Processing...' : 'Donate Now'}
            </button>
          </form>
        </div>
      </div>
    </div>

  );
}
