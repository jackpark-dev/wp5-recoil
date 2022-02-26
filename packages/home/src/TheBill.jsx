import React from "react";
import { useRecoilValue } from "recoil";

import { theBill } from "./read-only-atoms";

const TheBill = () => {
  const bill = useRecoilValue(theBill);
  return (
    <table width="100%">
      <thead>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </thead>
      <tbody>
        {bill.items.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.total}</td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>${bill.total}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TheBill;
