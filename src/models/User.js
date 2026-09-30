// src/models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    passwordHash: { type: String, required: true, select: false },
    phone: String,
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    isVerified: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
    avatarUrl: String,

    // OTP verification
    otpHash: { type: String, select: false },
    otpExpires: { type: Date, select: false },
    otpAttempts: { type: Number, default: 0, select: false },
    otpSentAt: { type: Date, select: false },
    // add to the schema, alongside the otp fields
    resetToken: { type: String, select: false },
    resetExpires: { type: Date, select: false },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', UserSchema);