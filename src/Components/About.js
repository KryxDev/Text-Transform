import React from "react";


export default function About(props){

  let myStyle = { 
    color : props.mode === 'dark'?'white':'black',
    backgroundColor : props.mode === 'dark'?'rgb(20, 30, 48)':'white' 
  }
  return (
    <>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center" style = {myStyle} >
        <div className="col-md-5 p-lg-5 mx-auto my-5" style = {myStyle}>
          <h1 className="display-4 fw-normal">About</h1>
          <p className="lead fw-normal" >
            Text-Transform Is A Text Based Utility To Manipulate User Text As Per Her Requirement.
          </p>
        </div>
      </div>
    </>
  );
}
