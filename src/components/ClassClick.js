import React, { Component } from 'react'
// event handling in class component 
// here methods are accessed using the this keyword 
 class ClassClick extends Component {
    clickHandler() {
        console.log('Clicked the button') 
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick
