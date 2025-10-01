import { NextResponse } from 'next/server';

export async function GET() {
  const password1Exists = !!process.env.PROJECT_PASSWORD;
  const password2Exists = !!process.env.NEXT_PUBLIC_PROJECT_PASSWORD;
  
  return NextResponse.json({ 
    PROJECT_PASSWORD_exists: password1Exists,
    PROJECT_PASSWORD_length: process.env.PROJECT_PASSWORD?.length || 0,
    NEXT_PUBLIC_PROJECT_PASSWORD_exists: password2Exists,
    NEXT_PUBLIC_PROJECT_PASSWORD_length: process.env.NEXT_PUBLIC_PROJECT_PASSWORD?.length || 0
  });
}