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
  orderid:{
    type: String
  },
  status:{
    type: String
  },
  address: {
    type: String,
  }
},
{ timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);