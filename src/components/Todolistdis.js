import React from "react";


 export default function Todolistdis(props) {
    return( 
        <li className="list-item">
            {props.item}
            <span className="icons">
                <i className="fa-solid fa-trash" onClick={(e) => {debugger; props.deleteItem(props.index,1)}}></i>
            </span>
        </li>
    )
}