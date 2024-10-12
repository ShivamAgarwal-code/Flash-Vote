'use client';

import React from "react";
import Image from "next/image";
import { AccuntButton, DepositButton, DuelButton } from "@/components/common/button";
import SearchBar from "@/components/common/searchBar";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";


const Navbar: React.FC = () => {
  const { open } = useWeb3Modal();
  const account = useAccount();

  const dispHeroButton = () => {
    switch (account.status) {
      case "connecting":
        return (
          <svg className="h-6 w-6 animate-spin m-auto" viewBox="0 0 100 100">
            <circle
              fill="none"
              strokeWidth="10"
              className="stroke-current opacity-40"
              cx="50"
              cy="50"
              r="40"
            />
            <circle
              fill="none"
              strokeWidth="10"
              className="stroke-current"
              strokeDasharray="250"
              strokeDashoffset="210"
              cx="50"
              cy="50"
              r="40"
            />
          </svg>
        );
      case "disconnected":
        return (
          <p className="flex flex-row justify-center"><span>Connect</span></p>);  
      case "connected":
        return (
          <p className="flex flex-row gap-1 p-1 justify-start ">
            <Image className="" alt="token" src={'/img/token.png'} width={25} height={25} />
            <span className="flex text-start text-xs left-0">KZED<br />{          
                account.address.slice(0, 5) +
              "..." +
              account.address.slice(-5)}
            </span>
          </p>
        );
    }
  };

  return (
    <div className="flex flex-row py-6 justify-between md:px-[50px] px-[15px] border-b border-gray-600">
      <Image className="flex-shrink-0" alt="logo" src={'/img/Logo.png'} width={100} height={80} />
      <div className="hidden md:flex flex-row justify-between items-center gap-5">
        <SearchBar />
        <DepositButton isConnect={account.status === "connected"} />
        <DuelButton isConnect={account.status === "connected"}/>
      </div>
      <div className="flex flex-row gap-2">
        <AccuntButton onclick={()=>open()} isConnect={account.status}>
          {dispHeroButton()}
        </AccuntButton>
      </div>
    </div>
  )
}

export default Navbar