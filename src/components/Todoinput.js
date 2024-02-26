import React, { useState } from "react";

export default function Todoinputs(props) {
    const [inputText, setinputText] = useState("");
    const handleEnterPress = (e)=>{
        if(e.keyCode === 13){
            props.Add_Tolist(inputText); setinputText("") 
        }
    }
    return (
        <div className="input-container">
            <input type="text" value={inputText} className="input-box-todo" placeholder="Enter Your Task" onKeyDown={handleEnterPress} onChange={(e) => setinputText(e.target.value)} ></input>
            <button className="add-btn" onClick={() => { props.Add_Tolist(inputText); setinputText("") }}>+</button>
        </div>
    )
}