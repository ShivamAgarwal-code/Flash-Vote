'use client';

import React from "react";
// import Image from "next/image";

interface ContentProps {
  name: string,
  symbol: string,
  volume_24h: number,
  price: number,
  image: string,
  createdBy: number
}

const TopToken: React.FC<ContentProps> = ({symbol, volume_24h, price}) => {
  const formatVolume = (volume: number) => {
    if (volume >= 1000000000) {
      return `${(volume / 1000000000).toFixed(2)}B`;
    } else if (volume >= 1000000) {
      return `${(volume / 1000000).toFixed(2)}M`;
    } else {
      return volume;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center w-full justify-between gap-5 pb-3 border-b">
      <div className="flex flex-row justify-start items-center text-center gap-5">
        {/* <Image className="rounded-full" alt="token_logo" src={image} width={30} height={30} /> */}
        <div className="flex flex-col">
          {/* <p className="text-center font-semibold text-lg"><span>{name}</span></p> */}
          <p className="text-center text-md text-gray-500 mr-20"><span>{symbol}</span></p>
        </div>
      </div>
      <div className="flex flex-row text-center left-40 text-white">
        <p>{price}</p>
      </div>
      <div className="flex flex-row text-center right-0 text-white">
        <p>{formatVolume(volume_24h)}</p>
      </div>
    </div>
  )
}

export default TopToken;
