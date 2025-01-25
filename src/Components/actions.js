const deposit = (amt) => {
  return { type: "Deposit", payload: amt };
};

const withdraw = (amt) => {
  return { type: "Withdraw", payload: amt };
};

const fullname = (name) => {
  return { type: "fullNameUpdate", payload: name };
};

const mobilenumber = (m) => {
  return { type: "mobileUpdate", payload: m };
};

const resetData = () => {
  return { type: "reset" };
};

const creditDetails = (amt, transactionId) => {
  return {
    type: "CREDIT_TRANSACTIONS",
    payload: {
      id: transactionId,
      amount: amt,
      type: "Credit",
      date: new Date().toDateString(),
    },
  };
};

const debitDetails = (amt, transactionId) => {
  return {
    type: "DEBIT_TRANSACTIONS",
    payload: {
      id: transactionId,
      amount: amt,
      type: "Debit",
      date: new Date().toDateString(),
    },
  };
};
export {
  deposit,
  withdraw,
  fullname,
  mobilenumber,
  resetData,
  creditDetails,
  debitDetails,
};
