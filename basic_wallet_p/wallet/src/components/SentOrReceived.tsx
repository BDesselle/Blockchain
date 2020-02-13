import React from "react";
import { ITransaction } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

interface Props {
  transaction: ITransaction;
  id: string;
}

const SentOrReceived: React.FC<Props> = ({ transaction, id }) => {
  const idCheck: (one: string, two: string) => string = (one, two) =>
    transaction.recipient === id ? one : two;

  return (
    <div className="wallet-transaction">
      <FontAwesomeIcon
        size="lg"
        className={idCheck(
          "wallet-transaction-received",
          "wallet-transaction-sent"
        )}
        icon={faDotCircle}
      />
      <div
        className={idCheck(
          "wallet-transaction-amount-received",
          "wallet-transaction-amount-sent"
        )}
      >
        {idCheck(`+${transaction.amount}`, `-${transaction.amount}`)}
      </div>
      <div className="wallet-transaction-details">
        <div className="wallet-transaction-detail">
          {idCheck(`From ${transaction.sender}`, `To ${transaction.recipient}`)}
        </div>
      </div>
    </div>
  );
};

export default SentOrReceived;
