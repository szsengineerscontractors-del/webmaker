// src/app/api/upload/route.js
import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';
import { getCurrentUser } from '@/lib/auth';

// Max file size (5 MB)
const MAX_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

export async function POST(request) {
  try {
    // Auth: only logged-in users can upload
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { ok: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json(
        { ok: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { ok: false, error: 'Only JPG, PNG, WebP, and GIF are allowed' },
        { status: 400 }
      );
    }

    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { ok: false, error: 'Image must be under 5 MB' },
        { status: 400 }
      );
    }

    // Convert File → Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream(
        {
          folder: `szsdomains/sites/${user._id}`,   // organize by user
          resource_type: 'image',
          transformation: [
            { quality: 'auto', fetch_format: 'auto' },   // auto-optimize
          ],
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      upload.end(buffer);
    });

    return NextResponse.json({
      ok: true,
      url: result.secure_url,
      publicId: result.public_id,
      width: result.width,
      height: result.height,
    });
  } catch (err) {
    console.error('[POST /api/upload]', err);
    return NextResponse.json(
      { ok: false, error: 'Upload failed' },
      { status: 500 }
    );
  }
}