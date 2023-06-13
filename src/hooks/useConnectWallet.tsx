import { useWeb3React } from "@web3-react/core";
import { CheckWallet, SelectWalletHooks } from "../wallet/walletHelper";
import { getName } from "../utils/utils";

export const useConnectWallet = () => {
  //Define Variables
  let chainId: number;
  let isActive: boolean;
  let accounts: any;
  let provider: any;
  let ENSNames: any;
  let isActivating: boolean;
  let activeConnector: any;

  //Define All Hooks
  const hook = SelectWalletHooks();
  const { connector } = useWeb3React();
  const {
    useChainId,
    useAccounts,
    useIsActivating,
    useIsActive,
    useProvider,
    useENSNames,
  } = hook;

  // Set Hooks into Variables
  chainId = useChainId();
  isActive = useIsActive();
  accounts = useAccounts();
  provider = useProvider();
  ENSNames = useENSNames(provider);
  isActivating = useIsActivating();
  activeConnector = getName(connector);

  // Wallet Activate Function
  const activate = (connector: any, networkId: number) => {
    // Check Wallet Which is Connected and Set into the Local Storage
    try {
      CheckWallet(connector);
      connector.activate(networkId);
    } catch (error) {
      console.log(error);
    }
  };

  //Wallet Deactivate Function
  const deactivate = (connector?: any) => {
    // Check Deactivate Function is Present or Not in Connector
    //If Yes then Call It and If No then Call Reset State Function

    try {
      if (connector?.deactivate) {
        connector?.deactivate();
      } else {
        connector?.resetState();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Return All Hooks for Use
  return {
    activate,
    deactivate,
    chainId,
    isActive,
    accounts,
    provider,
    ENSNames,
    isActivating,
    activeConnector,
  };
};
