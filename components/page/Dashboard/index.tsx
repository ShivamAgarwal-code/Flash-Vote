'use client';

import React from "react";
import Navbar from "./navbar";
import Content from "./content";

type CryptoData = {
  name: string,
  symbol: string,
  volume_24h: number,
  price: number,
  image: string,
  createdBy: number
};

interface ContentProps {
  cryptos: CryptoData[];
}

const Dashboard: React.FC<ContentProps> = ({ cryptos }) => {
  return (
    <div className="flex sm:flex-col flex-col">
      <Navbar />
      <Content cryptos={cryptos} />
    </div>
  )
}

export default Dashboard