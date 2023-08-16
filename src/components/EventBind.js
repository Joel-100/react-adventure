import React, { Component } from 'react'
// there are 4 approaches of 
//binding event handlers in react and they are as follows 
// approach 1 using bind(this) method 
// class EventBind extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         message: 'Hello'
         
//       }
//     }

//     clickHandler() {
//         this.setState({
//             message: 'Goodbye!'
//         })
//         console.log(this)

//     }
    
//   render() {
//     return (
//       <div>
//         <div>{this.state.message}</div>
//         <button onClick={this.clickHandler.bind(this)}>Click</button>
//       </div>
//     )
//   }
// }

// export default EventBind


// Binding using arrow function(approach 2)

// class EventBind extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         message: 'Hello'
         
//       }
//     }

//     clickHandler() {
//         this.setState({
//             message: 'Goodbye!'
//         })
//         console.log(this)

//     }
    
//   render() {
//     return (
//       <div>
//         <div>{this.state.message}</div>
//         <button onClick={() => this.clickHandler()}>Click</button>
//       </div>
//     )
//   }
// }

// export default EventBind


// Binding in the constructor (approach 3)

// class EventBind extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         message: 'Hello'
         
//       }
//       this.clickHandler = this.clickHandler.bind(this)
//     }

//     clickHandler() {
//         this.setState({
//             message: 'Goodbye!'
//         })
//         console.log(this)

//     }
    
//   render() {
//     return (
//       <div>
//         <div>{this.state.message}</div>
//         <button onClick={this.clickHandler}>Click</button>
//       </div>
//     )
//   }
// }

// export default EventBind

// Final approach is (approach 4)
// using the arrow function as a class property 

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message: 'Hello'
         
      }
      this.clickHandler = this.clickHandler.bind(this)
    }

clickHandler = () => {
   this.setState({
       message: 'Goodbye!'
   }) 
}
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind

// React documentation 
//suggests approach number 3 or approach number 4 
// approach number 3 is the best considered