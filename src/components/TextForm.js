// React Function Based Component (shortcode: rfc)
import React, { useState } from 'react'

export default function TextForm(props) {   
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState('');
    //text = "New Text";    // Wrong way to change the text
    //setText("New Text");   // Correct way to change the text

    return (
        <> 
        <div className="container my-3">
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div> 
            <button className="btn btn-secondary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-secondary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-secondary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-secondary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-secondary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summry</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:" Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
