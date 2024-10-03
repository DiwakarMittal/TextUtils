import React, {useState} from 'react'



function TextForm({heading,mode, showAlert}){
    
    const handleUpClick=()=>{
        let newText= text.toUpperCase();
        setText(newText);
        showAlert("Text is converted to UpperCase!", "Success");

    }
    const handleLoClick=()=>{
        let newText= text.toLowerCase();
        setText(newText);
        showAlert("Text is converted to LowerCase!", "Success");

    }
    const handleOnChange=(event)=>{
        setText(event.target.value);

    }

    const handleCopy=()=>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        showAlert("Text copied to Clipboard!", "Success");

    }
    const handleExtraSpaces=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        showAlert("All the extra spaced has been removed!", "Success");

    }


    const [text, setText]= useState('');

    const countWords = (inputText) => {
        if (inputText.trim().length === 0) {
          return 0;
        }
        return inputText.trim().split(/\s+/).length;
      };


    return (
        <>
            <div className="container" style={{color : mode==='dark'? 'white':'black'}}>
                <h1>{heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : mode==='dark'? 'grey':'white'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy the Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color : mode==='dark'? 'white':'black'}}>
                <h1>Text Summary</h1>
                <p>{countWords(text)} Words and {text.length} Characters</p>
                <p>{(text.length / 5 / 60).toFixed(3)} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{text.length>0? text: "Enter something to preview here"}</p>
            </div>
        </> 
    )
};

export default TextForm;
