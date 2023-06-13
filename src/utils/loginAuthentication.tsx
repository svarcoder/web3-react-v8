/** All import */
import { EagerConnection } from "../wallet/eagerConnection";
import { selectWallet } from "./utils";

/**
 * Represents auto connect to wallet.
 * @autoConnect
 * @param {(key: any) => any} getValue - The is used for get value from local storage.
 */
export const autoConnect = () => {
  const walletId = localStorage.getItem("wallet");

  if (walletId) {
    return EagerConnection();
  }
};

/**
 * Represents chainId changed function.
 * @chainIdChanged
 * @param {number} chainId - This is chain id.
 * @param {(key: any) => any} getValue - The is used for get value from local storage.
 */
export const chainIdChanged = (
  chainId: number,
  getValue: (key: any) => any
) => {
  const chainIDS = getValue("chainId");

  if (chainIDS === chainId) {
    return false;
  } else {
    return true;
  }
};

/**
 * Represents connect wallet function.
 * @connectWallet
 * @param {number} type - The is defined that which wallet you want to connect.
 * @param {number} networkId - This is network id for wallet connect.
 */
export const connectWalletFunction = async (
  deactivate: (connector?: any) => void,
  activate: (connector: any, networkId: number) => void,
  walletDetails: any,
  // setError: any,
  type?: number,
  networkId?: number
) => {
  const { isActive } = walletDetails;
  try {
    if (isActive) {
      const connectorType = localStorage.getItem("connectorId");
      deactivate(selectWallet(Number(connectorType)));
    } else {
      // try {
      if (type !== undefined && networkId !== undefined) {
        activate(selectWallet(type), networkId);
        localStorage.setItem("connectorId", type.toString());
      }
      // } catch (error: any) {
      //   console.log(error);
      // }
    }
  } catch (error) {
    console.log(error);
  }
};
