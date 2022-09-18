import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FaRegTimesCircle } from "react-icons/fa";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        <button
          onClick={() => deleteTransaction(transaction._id)}
          className="delete-btn"
        >
          <FaRegTimesCircle />
        </button>{" "}
        {sign}${Math.abs(transaction.amount)}
      </span>
    </li>
  );
};
