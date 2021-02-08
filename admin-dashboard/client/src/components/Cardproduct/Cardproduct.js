import React from "react";
import "./style.css"

function CardProduct(props) {
  return (

    <div className="wrapper-product">
	<div className="outer-product">
		<div className="content-product animated fadeInLeft">
			<span className="bg-product animated fadeInDown">{props.total_stock} in stock</span>
			<h3>{props.name}</h3>
			<p>{props.description}</p>
      <p>Base Price: {props.base_price}</p>
      <p>Sell Price: {props.sell_price}</p>
      <p>Tax: {props.tax}</p>
			<div className="button">
				<a href="#">Edit</a><a className="cart-btn" href="#"><i className="cart-icon ion-bag"></i>Delete</a>
			</div>
			
		</div>
		<img src="http://localhost:5001/upload/coffee.jpg" width="380px" height="370px" className="animated fadeInRight"/>
	</div>
</div>
    /*
    // <div className="card">
    //   <div className="content">
    //     <ul>
    //         <li>
    //         <img src="http://localhost:5001/upload/coffee.jpg" width="250" height="120"/>
    //         </li>
    //       <li>
    //         <strong>Name</strong> {props.name}
    //       </li>
    //       <li>
    //         <strong>Description:</strong> {props.description}
    //       </li>
    //       <li>
    //           <strong>Base Price:</strong> {props.base_price}
    //       </li>
    //       <li>
    //           <strong>Sell Price:</strong> {props.sell_price}
    //       </li>
    //       <li>
    //           <strong>Total Stock:</strong> {props.total_stock}
    //       </li>
    //       <li>
    //           <strong>Tax:</strong> {props.tax}
    //       </li>
    //     </ul>
    //   </div>
    //   <span onClick={() => props.removeProduct(props.id)} className="remove">
    //     𝘅
    //   </span>
    // </div>*/
  );
}

export default CardProduct;
