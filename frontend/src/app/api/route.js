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







