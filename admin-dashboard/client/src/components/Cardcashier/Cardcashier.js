import React from "react";
import "./style.css"

function Cardcashier(props) {
  return (

    <div className="wrapper-cashier">
	    <div className="outer-cashier">
		    <div className="content animated fadeInLeft">
			    <p>Email: {props.email}</p>
			  
			    <p>Username: {props.username}</p>
			
			  <button className="delete" id={props.cashier_id} name="delete" onClick={props.onClick}{...props}>Delete</button>
			
		    </div>

		 
	    </div>

    </div>
  );
}

export default Cardcashier;
