// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  outamount: {
    type: Number,
    required: true
  },
  pan: {
    type: String,
    required: true,
    uppercase: true
  },
  country: {
    type: String,
    enum: ['india', 'usa', 'russia'],
    default: 'india'
  },
  pincode: {
    type: Number,
    required: true
  },
  // orderid:{
  //   type: String
  // },
  address: {
    type: String,
  },
  rez_orderid: {
    type: String,
    default: ""
  },
  rez_paymentid: {
    type: String,
    default: ""
  },
  rez_signature: {
    type: String,
    default: ""
  },
  payment_status: {
    type: String,
    enum: ['fail', 'success'],
    default: 'fail'
  }
},
{ timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);