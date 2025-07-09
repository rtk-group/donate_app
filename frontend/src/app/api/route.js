// // made by me
// import dbConnect from '@/libs/dbconnection';
// import usermodel from '@/models/usermodel';
// import { NextResponse } from 'next/server';

// export async function GET() {
//   return NextResponse.json({ message: 'Hello rohit kumar its get api' });
// }


// export async function POST(request) {
//   try{
//     const {name, phone, email, amount, pan, donate_type, address} = await request.json();
//   await dbConnect();
//   const saveduser = await usermodel.create({name, phone, email, amount, pan, donate_type, address});
//   return NextResponse.json(saveduser, {status: 200})
//   }catch(error){
//     console.log(error);
//     return NextResponse.json({ message: 'Failed to save user data', error: error.message }, 
//      { status: 500 })
//   }
// }






// import { NextResponse } from 'next/server';
// import Razorpay from 'razorpay';

// export async function POST(request) {
//   if (request.method === 'POST') {
//     const razorpay = new Razorpay({
//       key_id: process.env.RAZORPAY_KEY_ID,
//       key_secret: process.env.RAZORPAY_KEY_SECRET,
//     });

//     const { amount } = request.json();

//     const options = {
//       amount: amount * 100, // Convert to paise
//       currency: 'INR',
//       receipt: 'donation_receipt_' + Date.now(),
//     };

//     try {
//       const order = await razorpay.orders.create(options);
//       NextResponse.status(200).json(order);
//     } catch (error) {
//       console.error(error);
//       NextResponse.status(500).json({ error: 'Order creation failed' });
//     }
//   } else {
//     NextResponse.setHeader('Allow', ['POST']);
//     NextResponse.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
