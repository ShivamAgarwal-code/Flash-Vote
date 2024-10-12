import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { bsc, mainnet, polygon, avalanche } from "wagmi/chains";

// Define WalletConnect Project ID
export const projectId = "eae0f11f6c24655f92e4f531a15f5a7d";

// Create metadata object for the dApp
const metadata = {
  name: "EnthusiastProject",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // Replace with your actual domain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [mainnet, bsc, polygon, avalanche] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
