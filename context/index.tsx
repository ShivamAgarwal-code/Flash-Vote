"use client";

import { ReactNode } from "react";
import { config, projectId } from "@/config"; // Fixed import paths
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, State } from "wagmi";

// Setup queryClient
const queryClient = new QueryClient();

if (!projectId) throw new Error("Project ID is not defined");

// Initialize Web3Modal only once
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional
  enableOnramp: true, // Optional
});

export default function Web3ModalProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State; // Ensure State is correctly typed
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
