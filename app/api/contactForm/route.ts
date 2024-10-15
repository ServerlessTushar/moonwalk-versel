import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  try {
    const { name, phone } = await request.json();

    const response = await axios.post(
      'https://script.google.com/macros/s/AKfycbxFirxGqMZBKJdlYSXzf6fyispokFtFxzB-oomxwXpIXv3HKbh6Kg3U_wD6xb-1fV233Q/exec',
      { name, phone },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}