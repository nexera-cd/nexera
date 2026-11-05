import { NextResponse } from 'next/server';

const LOGO_URL =
  'https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/Nexera/1792945147233.jpg';

export async function GET() {
  try {
    const response = await fetch(LOGO_URL, {
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      return NextResponse.redirect(LOGO_URL, 308);
    }

    const buffer = await response.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch {
    return NextResponse.redirect(LOGO_URL, 308);
  }
}
