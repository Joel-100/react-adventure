import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true, 
    };
  }

  render() {
    // Conditional rendering has many approaches and these are 
    // Approach 1(short circuit operator)

    return this.state.isLoggedIn && <div>Welcome Joel</div>


    // Approach 2(ternary operator)

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Joel</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // Approach 3(ternary variables)

    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Joel</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    // Approch 4(if/else)

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Joel</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //     <div>
    //         <div>Welcome Joel</div>
    //         <div>Welcome Guest</div>

    //     </div>

    // )
  }
}

export default UserGreeting;
