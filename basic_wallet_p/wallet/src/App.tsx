import React, { useState, useEffect } from "react";
import Transactions from "./components/Transactions";
import Balance from "./components/Balance";
import Id from "./components/Id";
import "./styles.scss";
import { TChain, TChainResponse } from "./types";
import Background from "./components/Background";

const App: React.FC = () => {
  const [chain, setChain] = useState<TChain>([]);
  const [id, setId] = useState<string>("Dan");
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    const fetchChain = async (): Promise<void> => {
      const raw: Response = await fetch("http://localhost:5555/chain", {
        method: "GET"
      });
      const res: TChainResponse = await raw.json();
      const filteredById: TChain = res.chain.filter(block =>
        block.transactions.some(
          transaction =>
            transaction.recipient === id || transaction.sender === id
        )
      );
      setChain(filteredById.reverse());
    };

    fetchChain();
  }, [id, setChain]);

  return (
    <div className="app">
      <Background />
      <div className="spacer">
        <h1 className="wallet-title">{id}</h1>
        <Balance id={id} chain={chain} />
        <div className="wallet-tabs">
          <div
            onClick={() => setSelected(0)}
            className={selected === 0 ? "wallet-tab selected" : "wallet-tab"}
          >
            Transactions
          </div>
          <div
            onClick={() => setSelected(1)}
            className={selected === 1 ? "wallet-tab selected" : "wallet-tab"}
          >
            Change User
          </div>
        </div>
        {selected === 0 && (
          <Transactions chain={chain} setChain={setChain} id={id} />
        )}
        {selected === 1 && <Id id={id} setId={setId} />}
      </div>
    </div>
  );
};

export default App;
