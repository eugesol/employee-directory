  
import React from "react";
import "./style.css";


function TableItem(props) {
  return (
        <tr>
          <td>
              <img alt="img" src={props.image}></img>
              </td>
          <td className="text-td">{props.name}</td>
          <td className="text-td">{props.phone}</td>
          <td className="text-td">{props.email}</td>
        </tr>
  );
}
export default TableItem;