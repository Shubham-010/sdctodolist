import React, { useState } from "react";

export default function Todoinputs(props) {
    const [inputText, setinputText] = useState("");
    const handleEnterPress = (e)=>{
        if(e.keyCode === 13){
            props.Add_Tolist(inputText); setinputText("")
            props.ref() 
        }
    }
    return (                                      
        <div class="input-group mb-3">
            <input type="text" 
            // ref={inputref} 
            value={inputText} class="form-control" placeholder="Enter Your Task" aria-describedby="button-addon2" onKeyDown={handleEnterPress} onChange={(e) => setinputText(e.target.value)}></input>
            <button class="btn btn-outline-primary" type="button" id="button-addon1" onClick={() => { debugger; props.Add_Tolist(inputText); setinputText("") }}>+</button>
        </div>
    )
}