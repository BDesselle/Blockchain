import React, { useEffect } from "react";
import { TChainResponse, TChain } from "../types";
import SentOrReceived from "./SentOrReceived";

interface Props {
  id: string;
  chain: TChain;
  setChain: React.Dispatch<React.SetStateAction<TChain>>;
}

const Transactions: React.FC<Props> = ({ id, chain, setChain }) => {

  return (
    <div className="wallet-transactions-container">
      {chain.map(block => (
        <div key={block.index}>
          {block.transactions.map((transaction, i) => (
            <SentOrReceived id={id} transaction={transaction} key={i} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Transactions;
