import React from 'react'
import { useState } from 'react'


export default function TextFrom(props) {
    const [text, setText] = useState('Enter Text Here');
    const handleUpClick = ()=>{
        // console.log('Uppercase was clicked and Typed = ' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log('On Change');
        setText(event.target.value)
    }
    return (
        <div>
            <div className="head">
            <h2>{props.heading}</h2>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput`1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="Mybox" className="form-label"> Tell About Your Self</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="Mybox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
        </div>
    )
}
