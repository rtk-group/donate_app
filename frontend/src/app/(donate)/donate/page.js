"use client"


import React from 'react';
import axios from 'axios';

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

  // console.log(formdata);

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
          alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
          setformdata({name: '', phone: '', email: '', amount: '', pan: '', country: '', pincode: '', address: ''});
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
      console.error(error);
      alert('Something went wrong while processing your donation.');
    }

    setLoading(false);
  };

  return (
    <div className='border flex'>
      {/* left section */}
      <div className='border w-[50%]'>left section</div>

      {/* right section */}
      <div className='border py-10 border w-[50%] px-7'>
        <form onSubmit={handleDonate} className='flex flex-col gap-4'>
          <div className='flex justify-between border'>
            <label htmlFor="name">Name:</label>
            <input type="text" onChange={onchangehandler} id="name" name="name" value={formdata.name} className='border w-70 h-10' required />
          </div>

          <div className='flex justify-between border'>
            <label htmlFor="phone">Phone:</label>
            <input type="number" onChange={onchangehandler} id="phone" name="phone" value={formdata.phone} className='border w-70 h-10' required />
          </div>

          <div className='flex justify-between border'>
            <label htmlFor="email">Email:</label>
            <input type="email" onChange={onchangehandler} id="email" name="email" value={formdata.email} className='border w-70 h-10' required />
          </div>

          <div className='flex justify-between border'>
            <label htmlFor="amount">Amount:</label>
            <input type="number" onChange={onchangehandler} id="amount" name="amount" value={formdata.amount} className='border w-70 h-10' required />
          </div>

          <div className='flex justify-between border'>
            <label htmlFor="pan">PAN:</label>
            <input type="text" onChange={onchangehandler} id="pan" name="pan" value={formdata.pan} className='border w-70 h-10' required />
          </div>

          {/* select country */}
          <div className='flex justify-between border'>
            <label htmlFor="country">Country</label>
            <select id='country' className='border w-70 h-10' onChange={onchangehandler} name="country" value={country}>
              <option value=''>Your Country ?</option>
              <option value='india'>India</option>
              <option value='usa'>USA</option>
              <option value='russia'>Russia</option>
            </select>
          </div>

          <div className='flex justify-between border'>
            <label htmlFor="pincode">City Pincode:</label>
            <input type="number" onChange={onchangehandler} id="pincode" name="pincode" value={formdata.pincode} className='border w-70 h-10' required />
          </div>

          <div className='flex justify-between border'>
            <label htmlFor="address">Address:</label>
            <input type="text" onChange={onchangehandler} id="address" name="address" value={formdata.address} className='border w-70 h-10' />
          </div>

          <button type="submit" className='border w-40 mx-auto'>
            {loading ? 'Processing...' : 'Donate Now'}
          </button>
        </form>
      </div>
    </div>

  );
}
