import React, { useState } from 'react'


export default function TextForm(props) {
    const handleOnClick = () =>{
        console.log("Clicked")
        setText(text.toUpperCase())
    }
    const handleOnChange = (event) =>{
        console.log("OnChange")
        setText(event.target.value)

    }



    const [text, setText] = useState("Enter the text here");
    return (
        
        <div className= "container" style={{color:props.mode==='grey'?'white':'black'}}>
            <form>
                <div className="mb-3" >
                    <h3>
                        {props.head}
                    </h3>
                    <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='grey'?'grey':'white', color:props.mode==='light'?'black':'white'}}   id="myBox" rows="10" />
                   
                </div>
                <button type="button" className="btn btn-primary" onClick={handleOnClick}>Convert to Uppercase</button>
            </form>
            <div>no of characters {text.length}</div>
        </div>
    )
}
