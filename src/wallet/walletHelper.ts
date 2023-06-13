import { WalletConnect } from "@web3-react/walletconnect";
import { MetaMask } from "@web3-react/metamask";
import { connectorsObject } from "./mainConnector/Connector";
import { Network } from "@web3-react/network";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";

// Define All Wallet
export const wallets = {
  metamask: {
    id: 1,
    connector: MetaMask,
    connectWallet: connectorsObject?.metamask,
  },
  walletConnect: {
    id: 2,
    connector: WalletConnect,
    connectWallet: connectorsObject?.walletConnect,
  },
  coinbase: {
    id: 3,
    connector: CoinbaseWallet,
    connectWallet: connectorsObject?.coinbaseWallet,
  },
  // network: {
  //   id: 4,
  //   connector: Network,
  //   connectWallet: connectorsObject?.network,
  // },
  walletConnect2: {
    id: 5,
    connector: WalletConnectV2,
    connectWallet: connectorsObject?.walletConnect2,
  },
};

// Return CheckWallet Function for Set Wallet Id
export const CheckWallet = <T>(connector: T): void => {
  // Return Which Wallet is connected and Set into Local Storage
  console.log({ connector });

  const connectorInstant = Object.values(wallets).filter(
    (val: { [key: string]: any }) => {
      if (connector instanceof val?.connector) {
        return val?.id;
      }
    }
  );

  console.log({ connectorInstant });

  localStorage.setItem("wallet", Number(connectorInstant[0]?.id).toString());
};

// Return Selected Wallet Hooks
export const SelectWalletHooks: any = () => {
  // Get Wallet Id from LocalStorage
  const walletId = localStorage.getItem("wallet");

  // Set the Hooks for getting Wallet Details
  const connectorInstant = Object.values(wallets).filter(
    (val) => val?.id === Number(walletId)
  );

  // By Default Connector Instant is undefined So we need to check Connector Instant Length
  if (connectorInstant?.length > 0) {
    return connectorInstant[0]?.connectWallet?.hooks;
  }

  return wallets?.metamask?.connectWallet?.hooks;
};
