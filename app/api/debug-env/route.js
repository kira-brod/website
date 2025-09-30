import { NextResponse } from 'next/server';

export async function GET() {
  const passwordExists = !!process.env.PROJECT_PASSWORD;
  const passwordLength = process.env.PROJECT_PASSWORD?.length || 0;
  
  return NextResponse.json({ 
    passwordExists,
    passwordLength,
    // Don't expose the actual password!
    firstChar: process.env.PROJECT_PASSWORD?.[0] || 'none'
  });
}