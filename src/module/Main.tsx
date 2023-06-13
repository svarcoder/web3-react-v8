import { useState } from "react";
import { walletsInfo } from "../wallet/walletData";
import { connectWalletFunction } from "../utils/loginAuthentication";
import { useConnectWallet } from "../hooks/useConnectWallet";
import { Accounts } from "./Accounts";

const Main = () => {
  const {
    activate,
    deactivate,
    chainId,
    isActive,
    accounts,
    provider,
    ENSNames,
  } = useConnectWallet();

  const [userNetworkId] = useState<number>(5);

  const walletDetails = {
    isActive,
  };

  // useEffect(() => {
  //   autoConnect();
  // }, []);

  return (
    <div className="wrapper">
      <div className="card">
        <div className="card-header text-center">Web3 React v8</div>
        <div className="card-body">
          <div className="text-break">ChainId: {chainId ? chainId : null}</div>
          <div className="text-break">
            Account: {accounts ? accounts : null}
          </div>
          <div style={{ marginBottom: "1rem" }}>
            Balance:
            <Accounts
              accounts={accounts}
              provider={provider}
              ENSNames={ENSNames}
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              className="btn btn-outline-info"
              disabled={accounts ? false : true}
              onClick={() => {
                provider
                  .getSigner(accounts[0])
                  .signMessage("👋 Hi.")
                  .then((signature: any) => {
                    window.alert(`Success!\n\n${signature}`);
                  })
                  .catch((error: any) => {
                    window.alert(
                      "Failure!" +
                        (error && error.message ? `\n\n${error.message}` : "")
                    );
                  });
              }}
            >
              Sign Message
            </button>
          </div>
        </div>
      </div>

      {accounts ? (
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            type="button"
            className="btn btn-dark mt-4"
            onClick={() =>
              connectWalletFunction(
                deactivate,
                activate,
                walletDetails,
                userNetworkId
              )
            }
          >
            Deactivate
          </button>
        </div>
      ) : (
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            type="button"
            className="btn btn-dark mt-4"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Connect
          </button>
        </div>
      )}

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Wallet
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container text-center">
                <div className="row">
                  {walletsInfo.map((item: any, index: number) => {
                    return (
                      <div className="col-6" key={index}>
                        <div className="d-grid gap-2 col-12 mx-auto">
                          <button
                            type="button"
                            className="btn btn-outline-secondary mb-4"
                            onClick={() =>
                              connectWalletFunction(
                                deactivate,
                                activate,
                                walletDetails,
                                item?.id,
                                userNetworkId
                              )
                            }
                            data-bs-dismiss="modal"
                          >
                            {item?.walletName}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
