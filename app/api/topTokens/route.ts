// app/api/topTokens/route.ts
import { NextResponse } from 'next/server';
// import axios from 'axios';

export async function GET() {
  const url = 'https://api.coinpaprika.com/v1/tickers';
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accepts': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);

    return NextResponse.json(data.slice(0, 10));
  } catch (error) {
    console.error("Error fetching data from CoinPaprika:", error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
