import React from "react";


export default function Todolistdis(props) {
    return (
        <ul class="list-group pd-2">
            <li class="list-group-item">
                <div className="merged-container bluebg">
                    <div className="message-lst ">{props.item}</div>
                    <div className="icons">
                        <i className="fa-solid fa-trash" onClick={(e) => { debugger; props.deleteItem(props.index, 1) }}></i>
                    </div>
                </div>
            </li>
        </ul>
    )
}