"use client";

import Image from "next/image";
import React from "react";
interface AccuntButtonProps{
  isConnect: string;
  children: React.ReactNode;
  onclick: () => void;
}

const AccuntButton: React.FC<AccuntButtonProps> = ({isConnect, children, onclick}) => {

  return (
    <div className="flex items-center gap-2">
      <button
        className={`w-[130px] h-[45px] hidden justify-center text-center items-center md:flex rounded-lg  ${isConnect === "connected" ? 'border-[2px] border-gray-600' : 'bg-gradient-to-r from-[#FA764C] to-[#E4572A]'}`}
        onClick={onclick}
      >
        {children}
      </button>
      <button className="sm:flex md:hidden" >
        <Image className="" alt="menu" src={'/img/menu.png'} width={35} height={35} />
      </button>
    </div>
  );
};

interface DepositButtonProps{
  isConnect: boolean
}

const DepositButton: React.FC<DepositButtonProps> = ({isConnect}) => {
  const value = 2000.49;
  return (
    <div className={`${isConnect ? 'flex' : 'hidden'} h-[45px] flex-row gap-5 rounded-lg items-center border-[2px] border-gray-600 pr-0.5 pl-1.5 py-0.5`}>
      <p className="flex flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#6B7280" strokeWidth={1.5}><circle cx={12} cy={12} r={10} opacity={0.5}></circle><path strokeLinecap="round" d="M12 6v12m3-8.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"></path></g></svg>
        <span>$ {value.toLocaleString()}</span>
      </p>
      <button
        className={` rounded-lg bg-gradient-to-r from-[#FA764C] to-[#E4572A] py-1.5 px-2`}
      >
        <p className="text-gray-950 font-light text-md">Deposit</p>
      </button>
    </div>
  );
};

interface DuelButtonProps{
  isConnect: boolean
}

const DuelButton: React.FC<DuelButtonProps> = ({isConnect}) => {
  return (
    <div className={`${isConnect ? 'flex' : 'hidden'} items-center gap-2`}>
      <button
        className={`w-[130px] h-[45px] rounded-lg  bg-gradient-to-r from-[#FA764C] to-[#E4572A]`}
      >
        <p className="text-gray-950 font-light text-md">Create Duel</p>
      </button>
    </div>
  );
};

export { AccuntButton, DepositButton, DuelButton };

