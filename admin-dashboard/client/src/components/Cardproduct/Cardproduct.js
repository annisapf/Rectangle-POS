import React from "react";
import "./style.css"


function Cardproduct(props) {

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
				<button className="delete btn-dangerous delete-product" id={props.product_id} name="delete-product" onClick={props.onClick}{...props}>Delete</button>
			
		</div>
		<img src={props.image} width="380px" height="370px" className="animated fadeInRight"/>
	</div>
</div>
  );
}

export default Cardproduct;
