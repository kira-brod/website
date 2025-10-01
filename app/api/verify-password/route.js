import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { password } = await request.json();
    
    // Check both variable names
    const correctPassword = process.env.PROJECT_PASSWORD || 
                           process.env.NEXT_PUBLIC_PROJECT_PASSWORD;
    
    console.log('Checking password...');
    console.log('PROJECT_PASSWORD exists:', !!process.env.PROJECT_PASSWORD);
    console.log('NEXT_PUBLIC_PROJECT_PASSWORD exists:', !!process.env.NEXT_PUBLIC_PROJECT_PASSWORD);
    console.log('Using password exists:', !!correctPassword);
    
    if (!correctPassword) {
      return NextResponse.json(
        { success: false, message: 'Server configuration error - no password set' },
        { status: 500 }
      );
    }
    
    if (password === correctPassword) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: 'Incorrect password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Error in verify-password:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}