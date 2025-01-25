import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const Account = () => {
  const data = useSelector((state) => {
    return state;
  });
  console.log(data);

  return (
    <>
      <div className="container">
        <h3 className="text-primary">Account Details</h3>
        <table className="table table-bordered w-50">
          <thead>
            <tr>
              <th>Available Balance</th>
              <th>User Name</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
          <tr>
                  <td>{data.account.availableBalance}</td>
                  <td>{data.account.fullname}</td>
                  <td>{data.account.mobile}</td>
                </tr>
          </tbody>
        </table>
        <h3 className="text-primary">Transaction Details</h3>
        <table className="table table-bordered w-50">
          <thead>
            <tr>
              <th>Trans_Id</th>
              <th>Amount</th>
              <th>Transaction Type</th>
              <th>Transaction Date</th>
            </tr>
          </thead>
          <tbody>
        {data.transaction.map((item)=>(
            <tr>
            <td>{item.id}</td>
            <td>{item.amount}</td>
            <td>{item.type}</td>
            <td>{item.date}</td>
            {/* <td>{item.account.availableBalance}</td> */}
          </tr>
        ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Account;
// import React from "react";
// import { useSelector } from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Account = () => {
//   const data = useSelector((state) => state); // Assuming 'data' is the object

//   return (
//     <div className="container">
//       <h3 className="text-primary">Account Details</h3>
//       <ul className="list-group w-50">
//         <li className="list-group-item">
//           <strong>Amount:</strong> {data.availableBalance || "N/A"}
//         </li>
//         <li className="list-group-item">
//           <strong>Full Name:</strong> {data.fullname || "N/A"}
//         </li>
//         <li className="list-group-item">
//           <strong>Mobile:</strong> {data.mobile || "N/A"}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Account;
