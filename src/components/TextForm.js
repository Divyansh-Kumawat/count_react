import React,{ useState } from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        console.log("uppercase was clicked" +text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success");
    }
    const handleLowClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","success");

    }
    const clearClick= ()=>{
        let newText="";
        setText(newText)
        props.showAlert("Text has been cleared","success");

    }
   

    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('enter text here');
    

    return (
        <>
        <div style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>
                {props.heading} 
            </h1>

            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>

            </div>
            <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-3 my-1`} style={{color: props.mode==='light'?'black':'white'}} onClick={handleUpClick}>convert to uppercase</button>
            <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-3 my-1`} style={{color: props.mode==='light'?'black':'white'}} onClick={handleLowClick}>convert to lowercase</button>
            <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-3 my-1`} style={{color: props.mode==='light'?'black':'white'}} onClick={clearClick}>Clear Text</button>

        </div>
        <div className="container my-3 " style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>

    )
}
