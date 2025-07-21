import React, { useState } from 'react';

export default function TextForm(  { mode , txtColor , heading , showAlert } ) {

    
    //  states initializers
    const [text , setText]=useState("");

// onchange function

const handleOnChange = (e)=>{ 
    setText(e.target.value);
}



// handleUpper case function 
const handleUp=()=>{
    setText(text.toUpperCase());
    showAlert("success" , "Text converted to uppercase");
}


// handleLower case function 
const handleLo=()=>{
    setText(text.toLowerCase());
    showAlert("success" , "Text converted to lowercase");

}


// handleClear Text function 
const handleClear=()=>{
 setText("");
    showAlert("success" , "Text cleared");

}

// handleRemove Extra spaces function 
const handleExtraSpaces=()=>{
       let newText = text.split(/[ ]+/).join(" ");
            setText(newText);

    showAlert("success" , "Extra spaces has been removed");
            

}


// handleCopy Text function 
const handleCopy=()=>{
    let text = document.getElementById("textArea")
           
            navigator.clipboard.writeText(text.value)

    showAlert("success" , "Text copied to clipboard");

}
    return (
        <>
        <div className='container'>
            <div >
                <h3 className="my-3" style={{color : txtColor}}>{heading}</h3>
                <textarea className="form-control" id="textArea" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:mode==="white"?"#f5f7fa":"rgba(62, 63, 64, 1)" , color : txtColor}}></textarea>
                <div className='my-3 '>
                    <button className='btn btn-primary me-3' onClick={ handleUp }  disabled={text.length===0}>convert to UpCase</button>
                    <button className='btn btn-primary me-3' onClick={ handleLo }  disabled={text.length===0}>convert to LoCase</button>
                    <button className='btn btn-primary me-3' onClick={ handleClear }  disabled={text.length===0}>Clear text</button>
                    <button className='btn btn-primary me-3' onClick={ handleExtraSpaces }  disabled={text.length===0}>Remove Extra Spaces</button>
                    <button className='btn btn-primary me-3' onClick={ handleCopy }  disabled={text.length===0}>Copy Text</button>
                    
                 </div>
            </div>
        </div>
       <div hidden = {text.length===0} className="container mb-3" style={{ backgroundColor:mode==="white"?"#f5f7fa":"rgba(6, 97, 142, 1)" ,color : txtColor}}>
           <h1>Your Text Summary</h1>
           <p>{text.trim()===""?0:text.trim().split(/\s+/).length} words and {text.length} characters</p>
           <p>{(text.trim()===""?0:text.trim().split(/\s+/).length) * 0.008 } minutes to read</p>
           <h3>Preview</h3>
           <p className='mb-3'>{text}</p>


       </div>
        </>
    )
}



