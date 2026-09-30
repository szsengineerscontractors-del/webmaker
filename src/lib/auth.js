// src/lib/auth.js
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import User from '@/models/User';
import connectDB from '@/lib/db';
import { cache } from 'react';

const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE_NAME = 'szs_token';
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not set in .env.local');
}

// Sign a token for a user
export function signToken(userId) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
}

// Verify a token, returns the payload or null
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

// Set the auth cookie (call from a route handler)
export async function setAuthCookie(token) {
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE,
  });
}

// Clear the cookie
export async function clearAuthCookie() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

// Read the current user from the cookie. Returns null if not logged in.
// src/lib/auth.js
export const getCurrentUser = cache(async () => {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return null;

  const payload = verifyToken(token);
  if (!payload) return null;

  await connectDB();
  const user = await User.findById(payload.userId).lean();
  if (!user || user.isBlocked) return null;

  // 🔑 Convert to a plain, serializable object
  return {
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
    phone: user.phone || '',
    role: user.role,
    isVerified: !!user.isVerified,
    isBlocked: !!user.isBlocked,
    avatarUrl: user.avatarUrl || '',
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
});