'use client';
import React from 'react';

interface ProgressBarProps {
  percentage: number; // A number between 0 and 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  // Calculate the number of filled blocks
  const totalBlocks = 10;
  const filledBlocks = Math.round((percentage / 100) * totalBlocks);

  const getColor = (percentage: number) => {
    if (percentage < 30) {
      return 'bg-red-500';  // Red for < 30%
    } else if (percentage >= 30 && percentage <= 70) {
      return 'bg-yellow-400';  // Yellow for 30%-70%
    } else {
      return 'bg-green-400';  // Green for > 70%
    }
  };
  const getTextColor = (percentage: number) => {
    if (percentage < 30) {
      return 'text-red-500';  // Red text for < 30%
    } else if (percentage >= 30 && percentage <= 70) {
      return 'text-yellow-400';  // Yellow text for 30%-70%
    } else {
      return 'text-green-400';  // Green text for > 70%
    }
  };

  return (
    <div className="flex md:flex-col flex-row text-center items-center gap-2 justify-between">
      <div className={`"flex flex-row ${getTextColor(percentage)} text-lg font-bold"`}>
        {percentage} %
      </div>
      <div className="flex gap-[2px]">
        {Array.from({ length: totalBlocks }).map((_, index) => (
          <div
            key={index}
            className={`w-[5px] h-4 rounded-md 
              ${index < filledBlocks ? getColor(percentage) : 'bg-gray-700'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
