import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        backgroundColor: "white",
        color: "black",
        border : "1px solid black"
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    function toggleLight() {
        if (myStyle.color === "white") {
            setMyStyle({
                color: "black",
                backgroundColor: "white",
                border : "1px solid black"
            });
            setBtnText("Enable Dark Mode")
        }
        else {
            setMyStyle({
                backgroundColor: "black",
                color: "white",
                border : "1px solid white"
            });
            setBtnText("Enable Light Mode")
        }
    }
    return (
        <>
            <div className="container" style={myStyle}>
                <h1 className='my-3'>About Us</h1>

                <p>
                Text Utils- It is designed to help the users to manipulate the text. 
                We have developed it using javascript, reactjs, react-bootstrap, html-css-javascript, html-5, react-router-dom, react-hooks, bootstrap5 css-3.
                </p>
                {/* <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                </div> */}
                <div className="container my-3">
                    <button type="button" className="btn btn-primary my-3" onClick={toggleLight}>{btnText}</button>
                </div>
            </div>

        </>
    )
}
