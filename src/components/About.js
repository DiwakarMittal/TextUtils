import React, { useState } from 'react'

function About() {

    const [myStyle, setMyStyle]=useState({
        color:'black',
        backgroundColor:'white',
    })
    const [btntext, setBtnText]=useState("Enable Dark Mode")

    const toggleStyle =()=>{
        if(myStyle.color==='white'){
            setMyStyle({
                color:'black',
                backgroundColor:'white',
            });
            setBtnText("Enable Dark Mode");
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white'
            });
            setBtnText("Enable Light Mode");

        }
    }
    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze Your Text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free To Use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtiIs reports the number of words and characters. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compaitable
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Intermet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel docuent, pdf document, essays, etc,
                </div>
                </div>
            </div>
            </div>
            <div className='container my-3'>
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div>
        </div>
    )
}

export default About;
