import Razorpay from 'razorpay';

export async function POST(req) {
  const body = await req.json();
  const { outamount } = body;

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const options = {
    amount: outamount * 100, // in paise
    currency: 'INR',
    receipt: `donation_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    return Response.json(order);
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Order creation failed' }), {
      status: 500,
    });
  }
}
