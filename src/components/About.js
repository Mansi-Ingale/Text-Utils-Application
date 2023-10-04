import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: "white",
    //     color: "black",
    //     //border : "1px solid black"
    // })

    let myStyle = {
        color : props.mode === 'dark' ? "white" : '#042743',
        backgroundColor : props.mode === "dark" ? "#042743" : "white",
        border : "1px solid",
        borderColor :  props.mode ==='dark'? 'white' :"#042743"
    } 

    
    return (
        <>
            <div className="container">
                <h1 className='my-3' style={{color : props.mode === 'dark' ? "white" : '#042743'}}>About Us</h1>

                {/* <p>
                Text Utils- It is designed to help the users to manipulate the text. 
                We have developed it using javascript, reactjs, react-bootstrap, html-css-javascript, html-5, react-router-dom, react-hooks, bootstrap5 css-3.
                </p> */}

                <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <strong>Analyze Your Text</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body" style={myStyle}>
                                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                               <strong>Browser Compatible</strong> 
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body" style={myStyle}>
                                Browser Compatible 
                                This Text Utils Application works in any web browser such as Chrome, Firefox, Internet Explorer, etc.
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <strong>Free to Use</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body" style={myStyle}>
                                Textutils is a free charcter counter tool that provides instant character and word count statistics for a given text.
                                Textutils reports the number of words and characters. Thus it is very useful.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container my-3">
                    <button type="button" className="btn btn-primary my-3" onClick={toggleLight}>{btnText}</button>
                </div> */}
            </div>

        </>
    )
}
