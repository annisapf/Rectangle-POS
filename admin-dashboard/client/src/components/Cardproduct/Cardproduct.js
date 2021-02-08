import React from "react";
import "./style.css";

function CardProduct(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
            <li>
            <img src="http://localhost:5001/upload/coffee.jpg" width="250" height="120"/>
            </li>
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

export default CardProduct;
