import React from "react"

function Row(props) {

    return (
        <tr>
            <td class="col-md-9"><em>{props.name}</em></td>
            <td class="col-md-1"> {props.number} </td>
            <td class="col-md-1 text-center">{props.price}</td>
            <td class="col-md-1 text-center">{props.total}</td>
        </tr>
    )
}

export default Row;