import dbConnect from '@/libs/dbconnection';
import usermodel from '@/models/usermodel';
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request) {
  try {
    const { name, phone, email, outamount, pan, country, pincode, address } = await request.json();
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: outamount * 100, // amount in paise
      currency: "INR",
      receipt: "receipt#1",
    };

    const order = await razorpay.orders.create(options);
    const orderid = order.id;
    const status = order.status;
    await dbConnect();
    const saveduser = await usermodel.create({ name, phone, email, outamount, pan, country, pincode, orderid, status, address });
    console.log({user: saveduser})
    return NextResponse.json(order)
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Failed to save user data', error: error.message },
      { status: 500 })
  }
}
