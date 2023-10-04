import React, { useState } from 'react'

export default function TextForm(props) {


    function handleOnChange(event) {
        //console.log("on change")
        setText(event.target.value)
    }

    function handleUpClick() {
        //console.log("clicked");
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    function handleLowerClick() {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    function handleClearClick() {
        setText("");
        props.showAlert("Text is cleared", "success");
    }

    function handleExtraSpaces() {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra space", "success");
    }

    const [text, setText] = useState("");


    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode === "dark" ? "white" : "#042743" }} onChange={handleOnChange} id="myBox" rows="8" value={text}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert To UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleLowerClick}>Convert To LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div >

            <div className="container my-4" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length} words, {text.length} characters</p>

                <h3>Preview of Text</h3>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </>
    )
}
