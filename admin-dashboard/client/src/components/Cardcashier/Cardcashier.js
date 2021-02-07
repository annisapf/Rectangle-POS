import React from "react";
import "./style.css";

function Cardcashier(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Username:</strong> {props.username}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeCashier(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default Cardcashier;
