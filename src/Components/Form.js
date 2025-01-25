import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  withdraw,
  deposit,
  fullname,
  mobilenumber,
  resetData,
  creditDetails,
  debitDetails,
} from "./actions";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [transactionId, setTransactionId] = useState(1);

  let dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h3 className="text-primary">Withdraw/Deposit Form</h3>
        <div className="row">
          <div className="col-4">
            <input
              className="form-control"
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => {
                let data = e.target.value;
                setAmount(data);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-1"
            onClick={() => {
              dispatch(deposit(amount));
              setTransactionId(transactionId + 1);
              dispatch(creditDetails(amount, transactionId));
              setAmount("");
            }}
          >
            Deposit
          </button>
          <button
            className="btn btn-danger col-1 m-2"
            onClick={() => {
              dispatch(withdraw(amount));
              setTransactionId(transactionId + 1);
              dispatch(debitDetails(amount, transactionId));
              setAmount("");
            }}
          >
            Withdraw
          </button>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <input
              placeholder="Enter Your Name"
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => {
                let fullname = e.target.value;
                setName(fullname);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-1 mx-2"
            onClick={() => {
              dispatch(fullname(name));
              setName("");
            }}
          >
            Update
          </button>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <input
              placeholder="Enter your mobile no:"
              className="form-control"
              type="number"
              value={mobile}
              onChange={(e) => {
                let mobilenum = e.target.value;
                setMobile(mobilenum);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-1 mx-2"
            onClick={() => {
              dispatch(mobilenumber(mobile));
              setMobile("");
            }}
          >
            Update
          </button>
        </div>
        <button
          className="btn btn-danger col-1 mt-2"
          onClick={() => {
            dispatch(resetData());
          }}
        >
          reset
        </button>
      </div>
    </>
  );
};

export default Form;
