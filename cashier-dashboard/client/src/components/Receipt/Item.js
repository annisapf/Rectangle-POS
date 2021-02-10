import React from 'react';
import { Link } from "react-router-dom";
function Item(props) {
  return (
    <tr>
    <td class="col-md-9"><em>{props.item}</em></td>
    <td class="col-md-1"> 2 </td>
    <td class="col-md-1 text-center">${props.sell_price}</td>
    <td class="col-md-1 text-center">$26</td>
</tr>
  );
}
export default Item;