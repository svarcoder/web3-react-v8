import { wallets } from "./walletHelper";

export const EagerConnection = () => {
  // Get Wallet Id from LocalStorage
  const walletId = localStorage.getItem("wallet");

  // Return Auto Connect Function Which Wallet is Connected
  const getConnector = Object.values(wallets).filter(
    (val: { [key: string]: any }) => val?.id === Number(walletId)
  );

  return getConnector[0]?.connectWallet?.connector?.connectEagerly();
};
