import React from "react";
import "./style.css"

function CardCashier(props) {
  return (

    <div className="wrapper">
	    <div className="outer">
		    <div class="content animated fadeInLeft">
			    <p>Email: {props.email}</p>
			  
			    <p>Username: {props.username}</p>
			
			  <button className="delete" oncClick={() => props.removeCashier(props.id)}>Delete</button>
			
		    </div>

		 
	    </div>

    </div>
  );
}

export default CardCashier;
