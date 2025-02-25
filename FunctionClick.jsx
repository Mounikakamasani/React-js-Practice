import React from 'react'
//functional compoent
//to get functional code type 'rfe' 

function FunctionClick() {
    //clickhandler is a function not function call so dont put () onclick
    function clickHandler(){
        console.log("clicked")
    }
  return (
    <div>
        <button onClick={clickHandler}>click</button>
      
    </div>
  )
}

export default FunctionClick
