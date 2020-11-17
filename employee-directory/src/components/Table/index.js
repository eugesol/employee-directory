
  
import React from "react";
import "./style.css";

function Table(props) {
  return (
    <table className="table table-striped">
      <thead className="thead">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name <i className={`fa fa-caret-${props.caretDir}`} onClick={props.handleOnClick} ></i></th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      
      <tbody>
        {props.children}
      </tbody>
    </table>
  );
}
export default Table;
