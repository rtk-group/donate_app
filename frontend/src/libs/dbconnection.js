// lib/dbConnect.js
import mongoose from 'mongoose';


async function dbConnect() {

  await mongoose.connect(process.env.MONGODB_URI);

  const db = mongoose.connection

  db.on('connected', ()=>{
    console.log('DB connected successfully')
  })
  db.on('disconnected', ()=>{
    console.log('Disconnected from DataBase')
  })
  db.on('error', (error)=>{
    console.log(error);
  })

}

export default dbConnect;