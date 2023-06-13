import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";

// Initialize Metamask Connector
export const [metamask, hooks] = initializeConnector<MetaMask>(
	(actions) => new MetaMask({ actions })
);
