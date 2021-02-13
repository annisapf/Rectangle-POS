import React from "react"



function Table(props) {
    return (
  
     <tr>
         <td>{props.date}</td>
         <td>{props.username}</td>
         <td>{props.product_purchased}</td>
         <td>{props.subtotal_price}</td>
         <td>{props.tax}</td>
         <td>{props.total_price}</td>
     </tr>
    );
  }
  
  export default Table;
  