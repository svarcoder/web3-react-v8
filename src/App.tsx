import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Main from "./module/Main";
import { connectors } from "./wallet/mainConnector/Connector";
import { Web3ReactProvider } from "@web3-react/core";

function App() {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Main />
    </Web3ReactProvider>
  );
}

export default App;
