import dbConnect from '@/libs/dbconnection';
import usermodel from '@/models/usermodel';
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request) {
  try {
    const { name, phone, email, outamount, pan, country, pincode, address, rez_payment_id, rez_signatures, rez_order_id } = await request.json();
    const rez_orderid = rez_order_id;
    const rez_paymentid = rez_payment_id
    const rez_signature = rez_signatures

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

    await dbConnect();
    const saveduser = await usermodel.create({ name, phone, email, outamount, pan, country, pincode, address, rez_orderid, rez_paymentid, rez_signature });
    return NextResponse.json(order, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Failed to save user data', error: error.message },
      { status: 500 })
  }
};



export async function PUT(request) {
  try {
    const { email, rez_orderid, rez_paymentid, rez_signature } = await request.json();
    await dbConnect()

    if (!email) {
      return NextResponse.json({ error: 'User Email is required' }, { status: 400 });
    }

    if (!rez_orderid || !rez_paymentid || !rez_signature) {
      return NextResponse.json({ error: 'Missing required payment verification data' }, { status: 400 });
    }

    const findeduser = await usermodel.findOneAndUpdate({ email }, { rez_orderid, rez_paymentid, rez_signature, payment_status: 'success' }, { new: true });
    return NextResponse.json({ message: "User update Successfully" });

  } catch (error) {
    console.error('Error in POST route:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message }, { status: 500 }
    );
  }
}
