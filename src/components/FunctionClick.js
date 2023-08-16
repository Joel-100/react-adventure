import React from 'react'
// event handling in function components 
function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked')
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick

