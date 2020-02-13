import React, { useState, useEffect, useCallback } from "react";
import { TChain } from "../types";

interface Props {
  id: string;
  chain: TChain;
}

const Balance: React.FC<Props> = ({ chain, id }) => {
  const [balance, setBalance] = useState<number>(0);

  const calculateBalance: () => void = useCallback(() => {
    setBalance(0);
    chain.forEach(block =>
      block.transactions.forEach(transaction =>
        transaction.recipient === id
          ? setBalance(b => b + transaction.amount)
          : setBalance(b => b - transaction.amount)
      )
    );
  }, [chain, id]);

  useEffect(() => {
    calculateBalance();
  }, [calculateBalance]);

  return (
    <div className="wallet-balance">
      <div className="wallet-balance-figure">
        {balance}
        <span id="wallet-balance-currency"> Lambda Coin</span>
      </div>
    </div>
  );
};

export default Balance;
