// app/api/topTokens/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10';
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': "42d69e05-9c40-4f8c-a544-b36831225812",
      },
    });
    const data = await response.json();
    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data from CoinMarketCap:", error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
