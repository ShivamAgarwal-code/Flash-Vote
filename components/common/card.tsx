"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import ProgressBar from "./progressBar";

interface BetCardProps {
  imgSrc: string;
  volume: number;
  time: number;
  chance: string;
  percentage: number;
}

const BetCard: React.FC<BetCardProps> = ({ imgSrc, volume, time, chance, percentage }) => {
  const [milliseconds, setMilliseconds] = useState<number>(time);
  useEffect(() => {
    const interval = setInterval(() => {
      setMilliseconds((prevMilliseconds) => prevMilliseconds + 10);
    }, 10); // Increment by 10 milliseconds for each update

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  const formatTime = (ms: number) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const hundredths = Math.floor((ms % 1000) / 10); // Divide milliseconds by 10 to get hundredths

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(hundredths).padStart(2, '0')}`;
  };
  return (
    <div className="flex flex-col bg-[#1A1A1A] rounded-lg p-3 gap-3">
      <div className="flex flex-col px-3 gap-3">
        <div className="flex justify-start gap-3">
          <Image
            className="rounded-lg"
            alt="token"
            src={imgSrc}
            width={80}
            height={80}
          />
          <span>Will $MOO Hit $1.00</span>
        </div>
        <div className="grid md:grid-cols-2 grid-col-1 justify-between items-center">
        {/* <div className="flex flex-row justify-between items-center"> */}
          <div className="flex md:flex-col flex-row gap-2">
            <div className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="#6B7280"
                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"
                ></path>
                <path
                  fill="#6B7280"
                  fillOpacity={0.15}
                  d="M426.6 410.3c0 25.4 15.7 45.1 49.5 57.3c4.7 1.9 9.4 3.4 15 5v-124c-37 4.7-64.5 25.4-64.5 61.7m116.5 135.2c-2.9-.6-5.7-1.3-8.8-2.2V677c42.6-3.8 72-27.3 72-66.4c0-30.7-15.9-50.7-63.2-65.1"
                ></path>
                <path
                  fill="#6B7280"
                  fillOpacity={0.15}
                  d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372s372-166.6 372-372s-166.6-372-372-372m22.4 589.2l.2 31.7c0 4.5-3.6 8.1-8 8.1h-28.4c-4.4 0-8-3.6-8-8v-31.4c-89-6.5-130.7-57.1-135.2-112.1c-.4-4.7 3.3-8.7 8-8.7h46.2c3.9 0 7.3 2.8 7.9 6.6c5.1 31.8 29.9 55.4 74.1 61.3V534l-24.7-6.3c-52.3-12.5-102.1-45.1-102.1-112.7c0-73 55.4-112.1 126.2-119v-33c0-4.4 3.6-8 8-8h28.1c4.4 0 8 3.6 8 8v32.7c68.5 6.9 119.8 46.9 125.9 109.2a8.1 8.1 0 0 1-8 8.8h-44.9c-4 0-7.4-2.9-7.9-6.9c-4-29.2-27.5-53-65.5-58.2v134.3l25.4 5.9c64.8 16 108.9 47 109 116.4c0 75.2-56 117.1-134.3 124"
                ></path>
                <path
                  fill="#6B7280"
                  d="m559.7 488.8l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2c.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8c-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119c0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3c-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7c4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124c-.1-69.4-44.2-100.4-109-116.4m-68.6-16.2c-5.6-1.6-10.3-3.1-15-5c-33.8-12.2-49.5-31.9-49.5-57.3c0-36.3 27.5-57 64.5-61.7zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2c47.3 14.4 63.2 34.4 63.2 65.1c0 39.1-29.4 62.6-72 66.4"
                ></path>
              </svg>
              <span className="text-sm">Volume: {volume}</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <g fill="#6B7280">
                  <path d="M13 6h-2v1a1 1 0 1 0 2 0z"></path>
                  <path
                    fillRule="evenodd"
                    d="M6 2v2h1v3a5 5 0 0 0 5 5a5 5 0 0 0-5 5v3H6v2h12v-2h-1v-3a5 5 0 0 0-5-5a5 5 0 0 0 5-5V4h1V2zm3 2h6v3a3 3 0 1 1-6 0zm0 13v3h6v-3a3 3 0 1 0-6 0"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
              <span className="text-sm">{formatTime(milliseconds)}</span>
            </div>
          </div>
          <ProgressBar percentage={percentage} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex md:flex-row gap-3 justify-between">
          <button className="flex rounded-lg w-1/2 py-2 justify-center text-center bg-[#64DC3A4D]">
            <span className="text-[#95DE64] text-center">YES</span>
          </button>
          <button className="flex rounded-lg w-1/2 py-2 justify-center text-center bg-[#F32A2C33]">
            <span className="text-[#E84749] text-center">NO</span>
          </button>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="text-[#9CA3AF]">Create By:</div>
          <div className="flex flex-row items-center gap-1">
            <div className="flex rounded-full">
              <Image
                className="rounded-full"
                alt="token"
                src={"/img/token.png"}
                width={25}
                height={25}
              />
            </div>
            <span className="text-[#F3EFE0]">{chance}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BetCard };
