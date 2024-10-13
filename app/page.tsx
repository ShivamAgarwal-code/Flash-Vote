"use client";

import Dashboard from "@/components/page/Dashboard";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Token {
  name: string;
  symbol: string;
  volume_24h: number;
  price: number;
  image: string;
  createdBy: number; // Keep this as number to match the expected type in Dashboard
}

interface CryptoData {
  name: string;
  symbol: string;
  quotes: {
    USD: {
      volume_24h: number;
      price: number;
    };
  };
  id: string;
}

const Home = () => {
  const [topTokens, setTopTokens] = useState<Token[]>([]);

  useEffect(() => {
    const fetchTopTokens = async () => {
      try {
        const response = await axios.get(
          "https://api.coinpaprika.com/v1/tickers"
        ); // CoinPaprika API endpoint to get all tickers

        const topCryptos = response.data.slice(0, 10).map((crypto: CryptoData) => ({
          name: crypto.name,
          symbol: crypto.symbol,
          volume_24h: crypto.quotes.USD.volume_24h.toFixed(2), // USD volume_24h from CoinPaprika
          price: crypto.quotes.USD.price.toFixed(2), // USD price from CoinPaprika
          image: `/img/token/${crypto.id}.png`, // Assuming you have local images stored
          createdBy: parseInt(crypto.id, 10), // Convert id to a number if necessary
        }));

        setTopTokens(topCryptos);
      } catch (error) {
        console.error("Error fetching top tokens:", error);
      }
    };

    fetchTopTokens();
  }, []);

  console.log(topTokens);

  return (
    <div
      className="flex flex-col md:w-full min-h-screen sm:bg-cover sm:bg-center md:bg-center md:bg-cover"
      style={{
        backgroundImage: "url(/img/background_image.png)",
      }}
    >
      <Dashboard cryptos={topTokens} />
    </div>
  );
};

export default Home;
