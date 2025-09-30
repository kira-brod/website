import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { password } = await request.json();
    
    const correctPassword = process.env.PROJECT_PASSWORD;
    
    // Temporary debug log
    console.log('Received password length:', password?.length);
    console.log('Expected password exists:', !!correctPassword);
    console.log('Expected password length:', correctPassword?.length);
    
    if (password === correctPassword) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: 'Incorrect password' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}