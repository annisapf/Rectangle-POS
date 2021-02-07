import React from "react";
import "./style.css";

function Cardproduct(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Name</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
              <strong>Base Price:</strong> {props.base_price}
          </li>
          <li>
              <strong>Sell Price:</strong> {props.sell_price}
          </li>
          <li>
              <strong>Total Stock:</strong> {props.total_stock}
          </li>
          <li>
              <strong>Tax:</strong> {props.tax}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeProduct(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default Cardproduct;
