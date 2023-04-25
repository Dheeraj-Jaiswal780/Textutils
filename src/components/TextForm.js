import { useState } from "react"
import React from 'react'
//import PropTypes from 'prop-types'





export default function TextForm(props) {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase','success');
        
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to Lowercase','success');
    }
    const handleClearClick = () => {
        let newText = ('');
        setText(newText);
        props.showAlert('Text Area Cleared','success');
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
         props.showAlert('Extra spaces are removed','success');
    }
     return (
        <>
            <div className="container" >
                <div >
                    <h1 style={{color: props.mode==='dark'? 'white': '#042743'}}>{props.title}</h1>  
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleChange} style={{color: props.mode==='dark'? 'white': '#042743',backgroundColor: props.mode==='dark'? '#042743': 'white'}} id="myBox" rows="8"></textarea>
                    </div>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove extra space</button>
                <div className="container" style={{color: props.mode==='dark'? 'white': '#042743'}}>
                    <h2>Your Text Summary</h2>
                    <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    <p>{0.08 * text.split(' ').filter((element)=>{return element.length!==0}).length} minutes required to read the given text.</p>
                </div> 
                <div className="container" style={{color: props.mode==='dark'? 'white': '#042743'}}>
                    <h2>Preview</h2>
                    <p>{text.length>0? text: 'Enter text to preview it here'}</p>
                </div>
            </div>
        </>
    )
}
