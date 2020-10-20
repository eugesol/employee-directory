
import React from "react";
import "./style.css";

function Table(props) {
  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Picture</th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"></th>
        <td>{props.image}</td>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
      </tr>
    </tbody>
  </table>
  );
}

export default Table;
