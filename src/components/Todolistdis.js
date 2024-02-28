import React from "react";


export default function Todolistdis(props) {
    return (
        <ul class="list-group">
            <li class="list-group-item">
                {props.item}
                <span className="icons" style={{ marginLeft: "200px" }}>
                    <i className="fa-solid fa-trash" onClick={(e) => { debugger; props.deleteItem(props.index, 1) }}></i>
                </span>
            </li>
        </ul>
    )
}