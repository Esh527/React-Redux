import { combineReducers, createStore } from "redux";

const initialState = {
  fullname: "Sri Hari",
  mobile: 7729052771,
  availableBalance: 0,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Deposit":
      return {
        ...state,
        availableBalance: state.availableBalance + +action.payload,
      };
    case "Withdraw":
      return {
        ...state,
        availableBalance: state.availableBalance - action.payload,
      };
    case "fullNameUpdate":
      return { ...state, fullname: action.payload };
    case "mobileUpdate":
      return { ...state, mobile: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const transactionReducer = (state = [], action) => {
  switch (action.type) {
    case "CREDIT_TRANSACTIONS":
      return [
        ...state,
        {
          id: action.payload.id,
          amount: action.payload.amount,
          type: action.payload.type,
          date: action.payload.date,
        },
      ];

    case "DEBIT_TRANSACTIONS":
      return [...state,   {
        id: action.payload.id,
        amount: action.payload.amount,
        type: action.payload.type,
        date: action.payload.date,
      },];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  account: accountReducer,
  transaction: transactionReducer,
});
const store = createStore(rootReducer);
// console.log(store.getState());
// store.dispatch({ type: "fullNameUpdate", payload: "Eade Sri Hari" });
// console.log(store.getState());
// store.dispatch({ type: "mobileUpdate", payload: 9381748242 });
// console.log(store.getState());
// store.dispatch({ type: "Deposit", payload: 1000 });
// console.log(store.getState());
// store.dispatch({ type: "Withdraw", payload: 300 });
// console.log(store.getState());

export default store;
