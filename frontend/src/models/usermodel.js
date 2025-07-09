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
  amount: {
    type: Number,
    required: true
  },
  orderid: {
    type: String,
    required: true
  },
  receipt: {
    type: String,
    required: true
  },
  pan: {
    type: String,
    required: true,
    uppercase: true
  },
  // donate_type: {
  //   type: String,
  //   enum: ['None_Zakat', 'Zakat'],
  //   default: 'Zakat'
  // },
  address: {
    type: String,
  }
},
{ timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);