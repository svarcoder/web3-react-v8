import { Web3ReactHooks } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";
import { hooks as metamaskHooks, metamask } from "../connectors/MetaMask";
import {
  hooks as walletConnectHooks,
  walletConnect,
} from "../connectors/WalletConnect";
import {
  hooks as coinbaseWalletHooks,
  coinbaseWallet,
} from "../connectors/coinbaseWallet";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { network, hooks as networkHooks } from "../connectors/network";
import {
  walletConnectV2,
  hooks as walletConnectV2Hooks,
} from "../connectors/walletConnectV2";
import { Network } from "@web3-react/network";

// Return Connector Array for Passing Web3Provider
export const connectors: [
  MetaMask | WalletConnect | CoinbaseWallet | Network | WalletConnectV2,
  Web3ReactHooks
][] = [
  [metamask, metamaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [network, networkHooks],
  [walletConnectV2, walletConnectV2Hooks],
];

// Return Connector Object
export const connectorsObject = {
  metamask: {
    connector: metamask,
    hooks: metamaskHooks,
  },
  walletConnect: {
    connector: walletConnect,
    hooks: walletConnectHooks,
  },
  coinbaseWallet: {
    connector: coinbaseWallet,
    hooks: coinbaseWalletHooks,
  },
  network: {
    connector: network,
    hooks: networkHooks,
  },
  walletConnect2: {
    connector: walletConnectV2,
    hooks: walletConnectV2Hooks,
  },
};
