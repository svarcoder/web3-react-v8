import { MetaMask } from "@web3-react/metamask";
import { connectorsObject } from "../wallet/mainConnector/Connector";
import type { Connector } from "@web3-react/types";

/** This is for get selected wallet */
export const selectWallet = (type: number): any => {
  switch (type) {
    case 1:
      return connectorsObject?.metamask?.connector;
    case 2:
      return connectorsObject?.walletConnect?.connector;
    case 3:
      return connectorsObject?.coinbaseWallet?.connector;
    // case 4:
    //   return connectorsObject?.network?.connector;
    case 5:
      return connectorsObject?.walletConnect2?.connector;
  }
};

/** This is for get wallet name */
export const getWalletName = (walletsInfo: any, connectorId: any) => {
  const response = walletsInfo?.find((item: any) => item?.id === connectorId);
  return response?.walletName;
};

export function getName(connector: Connector) {
  if (connector instanceof MetaMask) return "Metamask";
  return "Unknown";
}
