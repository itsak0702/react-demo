import React from "react";

export default function Textbox(props) {
    const changeUP = () => {
        var x = document.getElementById("Textarea1").value;
        document.getElementById("Textarea1").value = x.toUpperCase();

    }
    return (
        <>
            <div className="mb-3">
                <h1>{props.title}</h1>
                <textarea className="form-control" placeholder={props.text} id="Textarea1" rows="8"></textarea>
                <br />
                <buttun className="btn btn-primary" onClick={changeUP}>Change in Uppercase </buttun>
            </div>
            <h1>Your Text Summary</h1>
            {/* <p> {.length}</p> */}
        </>
    )
}