import React, { forwardRef, useEffect, useRef, useState } from "react";

const Todoinputs = forwardRef((props, ref)=> {
    const [inputText, setinputText] = useState("");
    // const inputRef = useRef(null);
    console.log('props :>> ', props);
    console.log('ref :>> ', ref);
    const handleEnterPress = (e) => {
        if (e.keyCode === 13) {
            props.Add_Tolist(inputText); setinputText("")
        }
    }


    // useEffect(() => {
    //     props.handleparentref(inputRef);
    // }, [props.handleparentref, inputRef]);

    return (
        <div class="input-group mb-3">
            <input type="text"
                ref={ref}
                value={inputText}
                class="form-control"
                placeholder="Enter Your Task"
                aria-describedby="button-addon2"
                onKeyDown={handleEnterPress}
                onChange={(e) => setinputText(e.target.value)}
            ></input>
            <button class="btn btn-outline-primary" type="button" id="button-addon1" onClick={() => { debugger; props.Add_Tolist(inputText); setinputText("") }}>+</button>
        </div>
    )
})
export default Todoinputs;