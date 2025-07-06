// copy of combine code
import dbConnect from '@/libs/dbconnection';
import usermodel from '@/models/usermodel';
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function GET() {
  return NextResponse.json({ message: 'Hello rohit kumar its get api' });
}

export async function POST(request) {
  try {
    const { name, phone, email, amount, pan, donate_type, address } = await request.json();
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: amount * 100, // amount in paise
      currency: "INR",
      receipt: "receipt#1", // optional but valid
    };

    const order = await razorpay.orders.create(options);
    const orderid = order.id;
    const receipt = order.receipt;
    await dbConnect();
    const saveduser = await usermodel.create({ name, phone, email, amount, orderid, receipt, pan, donate_type, address });
    return NextResponse.json(saveduser, { status: 200 })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Failed to save user data', error: error.message },
      { status: 500 })
  }
}



















