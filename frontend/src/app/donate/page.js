"use client"
// import React from 'react'

// function Page() {

//   const [formdata, setformdata] = React.useState({
//     name:'',
//     phone:'',
//     email:'',
//     amount:'',
//     pan:'',
//     // donate_type:'',
//     address:''
//   })

//   const onchangehandler =(e)=>{
//       const name = e.target.name
//       const value = e.target.value
//       setformdata(data=>({...data, [name]:value}))
//   }

//   console.log(formdata)

  
//   return (
//     <div className='border flex '>
//       {/* left section */}
//       <div className='border w-[50%]'>left section</div>

//       {/* right section */}
//       <div className='border py-10 border w-[50%] px-7'>

//       <form action="/submit" method="POST" className='flex flex-col gap-4'>
//       <div className='flex justify-between border'>
//           <label for="name">Name:</label>
//         <input type="text" onChange={onchangehandler} id="name" name="name" value={formdata.name} className='border w-70 h-10' required />
//       </div>

//       <div className='flex justify-between border'>
//           <label for="phone">Phone:</label>
//         <input type="number" onChange={onchangehandler} id="phone" name="phone" value={formdata.phone} className='border w-70 h-10' required />
//       </div>
//       <div className='flex justify-between border'>
//           <label for="email">Email:</label>
//         <input type="email" onChange={onchangehandler} id="email" name="email" value={formdata.email} className='border w-70 h-10' required />
//       </div>
//       <div className='flex justify-between border'>
//           <label for="amount">Amount:</label>
//         <input type="number" onChange={onchangehandler} id="amount" name="amount" value={formdata.amount} className='border w-70 h-10' required />
//       </div>

//       <div className='flex justify-between border'>
//           <label for="pan">PAN:</label>
//         <input type="text" onChange={onchangehandler} id="pan" name="pan" value={formdata.pan} className='border w-70 h-10' required />
//       </div>

//       {/* <div className='flex justify-between border'>
//           <label for="donate_type">Donate Type:</label>
//           <select id='donate_type' className='border w-70 h-10'>
//             <option value=''>--Select--</option>
//             <option value='Zakat'>Zakat</option>
//             <option value='None-Zakat'>None-Zakat</option>
//           </select>
//       </div> */}

//       <div className='flex justify-between border'>
//           <label for="address">Address:</label>
//         <input type="text" onChange={onchangehandler} id="address" name="address" value={formdata.address} className='border w-70 h-10'  />
//       </div>
        
//         <button type="submit" className='border w-40 mx-auto'>Submit</button>
//       </form>

//     </div>
//     </div>
//   )
// }

// export default Page










// // payment ui right code by gpt
// 'use client';

// import React, { useState } from 'react';
// import axios from 'axios';

// export default function DonatePage() {
//   const [amount, setAmount] = useState('');

//   const [loading, setLoading] = useState(false);

//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handleDonate = async () => {
//     if (!amount || isNaN(amount)) {
//       alert('Please enter a valid amount');
//       return;
//     }

//     const scriptLoaded = await loadRazorpayScript();
//     if (!scriptLoaded) {
//       alert('Failed to load Razorpay SDK. Please try again.');
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post('/api/payment', {amount: Number(amount),});

//       const order = response.data;

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Must be defined in your .env
//         amount: order.amount,
//         currency: order.currency,
//         name: 'Donate App',
//         description: 'Thank you for your donation!',
//         order_id: order.id,
//         handler: function (response) {
//           alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
//           setAmount('');
//         },
//         prefill: {
//           name: 'Donor',
//           email: 'donor@example.com',
//           contact: '9999999999',
//         },
//         theme: {
//           color: '#3399cc',
//         },
//       };

//       const paymentObject = new window.Razorpay(options);
//       paymentObject.open();
//     } catch (error) {
//       console.error(error);
//       alert('Something went wrong while processing your donation.');
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col justify-center items-center h-screen bg-gray-100 px-4 text-black">
//       <h1 className="text-3xl font-semibold mb-4">Donate to Support</h1>
//       <input
//         type="number"
//         placeholder="Enter amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         className="border border-gray-300 p-2 mb-4 rounded w-full max-w-sm"
//       />
//       <button
//         onClick={handleDonate}
//         disabled={loading}
//         className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded w-full max-w-sm disabled:opacity-50"
//       >
//         {loading ? 'Processing...' : 'Donate Now'}
//       </button>
//     </div>
//   );
// }








// combine by me
// 'use client';

// import React, { useState } from 'react';
// import axios from 'axios';

// export default function DonatePage() {

//   const [formdata, setformdata] = React.useState({
//     name:'',
//     phone:Number(''),
//     email:'',
//     amount:Number(''),
//     pan:'',
//     address:''
//   })

//   const onchangehandler =(e)=>{
//       const name = e.target.name
//       const value = e.target.value
//       setformdata(data=>({...data, [name]:value}))
//   }

//   const outamount = formdata.amount;

//   const [loading, setLoading] = useState(false);

//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handleDonate = async () => {
//     if (!formdata || isNaN(outamount)) {
//       alert('Please enter a valid amount or complete the form');
//       return;
//     }

//     const scriptLoaded = await loadRazorpayScript();
//     if (!scriptLoaded) {
//       alert('Failed to load Razorpay SDK. Please try again.');
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post('/api/payment', {outamount});

//       const order = response.data;

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Must be defined in your .env
//         amount: order.amount,
//         currency: order.currency,
//         name: formdata.name,
//         description: 'Thank you for your donation!',
//         order_id: order.id,
//         handler: function (response) {
//           alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
//           setformdata({})
//         },
//         prefill: {
//           name: formdata.name,
//           email: formdata.email,
//           contact: formdata.phone,
//         },
//         theme: {
//           color: '#3399cc',
//         },
//       };

//       const paymentObject = new window.Razorpay(options);
//       paymentObject.open();
//     } catch (error) {
//       console.error(error);
//       alert('Something went wrong while processing your donation.');
//     }

//     setLoading(false);
//   };

//   return (
//     <div className='border flex '>
//       {/* left section */}
//       <div className='border w-[50%]'>left section</div>

//       {/* right section */}
//       <div className='border py-10 border w-[50%] px-7'>

//       <form onSubmit={handleDonate} className='flex flex-col gap-4'>
//       <div className='flex justify-between border'>
//           <label for="name">Name:</label>
//         <input type="text" onChange={onchangehandler} id="name" name="name" value={formdata.name} className='border w-70 h-10' required />
//       </div>

//       <div className='flex justify-between border'>
//           <label for="phone">Phone:</label>
//         <input type="number" onChange={onchangehandler} id="phone" name="phone" value={formdata.phone} className='border w-70 h-10' required />
//       </div>
//       <div className='flex justify-between border'>
//           <label for="email">Email:</label>
//         <input type="email" onChange={onchangehandler} id="email" name="email" value={formdata.email} className='border w-70 h-10' required />
//       </div>
//       <div className='flex justify-between border'>
//           <label for="amount">Amount:</label>
//         <input type="number" onChange={onchangehandler} id="amount" name="amount" value={formdata.amount} className='border w-70 h-10' required />
//       </div>

//       <div className='flex justify-between border'>
//           <label for="pan">PAN:</label>
//         <input type="text" onChange={onchangehandler} id="pan" name="pan" value={formdata.pan} className='border w-70 h-10' required />
//       </div>

     



//       <div className='flex justify-between border'>
//           <label for="address">Address:</label>
//         <input type="text" onChange={onchangehandler} id="address" name="address" value={formdata.address} className='border w-70 h-10'  />
//       </div>
        
//         <button type="submit" className='border w-40 mx-auto'>{loading ? 'Processing...' : 'Donate Now'}</button>
//       </form>

//     </div>
//     </div>
//   );
// }






    // donate_type:''

//  {/* <div className='flex justify-between border'>
//           <label for="donate_type">Donate Type:</label>
//           <select id='donate_type' className='border w-70 h-10'>
//             <option value=''>--Select--</option>
//             <option value='Zakat'>Zakat</option>
//             <option value='None-Zakat'>None-Zakat</option>
//           </select>
//       </div> */}












// 'use client';

import React from 'react';
import axios from 'axios';

export default function DonatePage() {
  const [formdata, setformdata] = React.useState({
    name: '',
    phone: '',
    email: '',
    amount: '',
    pan: '',
    address: ''
  });

  const onchangehandler = (e) => {
    const { name, value } = e.target;
    setformdata((data) => ({ ...data, [name]: value }));
  };

  const outamount = Number(formdata.amount); // Ensure it's a number

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
      const response = await axios.post('/api/payment', { outamount });
      const order = response.data;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: formdata.name,
        description: 'Thank you for your donation!',
        order_id: order.id,
        handler: function (response) {
          alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
          setformdata({
            name: '',
            phone: '',
            email: '',
            amount: '',
            pan: '',
            address: ''
          });
        },
        prefill: {
          name: formdata.name,
          email: formdata.email,
          contact: formdata.phone,
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
      <div className='border w-[50%]'>left section</div>

      <div className='border py-10 w-[50%] px-7'>
        <form onSubmit={handleDonate} className='flex flex-col gap-4'>
          {[
            ['name', 'Name', 'text'],
            ['phone', 'Phone', 'number'],
            ['email', 'Email', 'email'],
            ['amount', 'Amount', 'number'],
            ['pan', 'PAN', 'text'],
            ['address', 'Address', 'text']
          ].map(([id, label, type]) => (
            <div key={id} className='flex justify-between border'>
              <label htmlFor={id}>{label}:</label>
              <input
                type={type}
                id={id}
                name={id}
                value={formdata[id]}
                onChange={onchangehandler}
                className='border w-70 h-10'
                required={id !== 'address'}
              />
            </div>
          ))}
          <button type="submit" className='border w-40 mx-auto'>
            {loading ? 'Processing...' : 'Donate Now'}
          </button>
        </form>
      </div>
    </div>
  );
}
