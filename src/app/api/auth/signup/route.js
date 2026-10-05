// src/app/api/auth/signup/route.js
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/db';
import User from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE_NAME = 'szs_token';

export async function POST(request) {
  try {
    await connectDB();

    const { name, email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { ok: false, error: 'Email and password required.' },
        { status: 400 }
      );
    }

    if (String(password).length < 6) {
      return NextResponse.json(
        { ok: false, error: 'Password must be at least 6 characters.' },
        { status: 400 }
      );
    }

    const cleanEmail = String(email).toLowerCase().trim();

    const existing = await User.findOne({ email: cleanEmail }).lean();
    if (existing) {
      return NextResponse.json(
        { ok: false, error: 'An account with this email already exists.' },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: (name || '').trim() || 'User',
      email: cleanEmail,
      passwordHash,
      role: 'user',
      isVerified: true,     // skip verification for prototype
      isBlocked: false,
    });

    const token = jwt.sign(
      { userId: user._id.toString(), role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const res = NextResponse.json({ ok: true });
    res.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch (err) {
    console.error('[POST /api/auth/signup]', err);
    return NextResponse.json(
      { ok: false, error: 'Signup failed.' },
      { status: 500 }
    );
  }
}