"use client"; // <-- Add this line at the top

import Dashboard from "@/components/page/Dashboard";
import React, { useState, useEffect } from "react";
import axios from 'axios'

interface Token {
  name: string,
  symbol: string,
  volume_24h: number,
  price: number,
  image: string,
  createdBy: number
}

interface CryptoData {
  name: string;
  symbol: string;
  quote: {
    USD: {
      volume_24h: number;
      price: number;
    };
  };
  id: number;
}

const Home = () => {
  const [topTokens, setTopTokens] = useState<Token[]>([]);

  useEffect(() => {
    const fetchTopTokens = async () => {
      try {
        const response = await axios.get<CryptoData[]>("/api/topTokens"); // Call your self-hosted API route
        console.log(response.data);
        const topCryptos = response.data.map((crypto) => ({
          name: crypto.name,
          symbol: crypto.symbol,
          volume_24h: parseFloat(crypto.quote.USD.volume_24h.toFixed(2)),
          price: parseFloat(crypto.quote.USD.price.toFixed(2)),
          image: `/img/token/${crypto.id}.png`,
          createdBy: crypto.id
        }));

        setTopTokens(topCryptos)
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
