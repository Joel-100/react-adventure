import React from 'react'

// function Greet () {
//     return <h1>Hello Joel</h1>
// }

// const Greet = (props) => {
//     console.log(props)
//     return (
//     <div>
//         <h1>
//             Hello {props.name} a.k.a {props.heroName}
//         </h1>
//     {props.children}
//     </div>
//     )
// }

// export default Greet 

// Destructuring Props and State in a functional Component 

// const Greet = ({name, heroName}) => {
//     return (
//     <div>
//         <h1>
//             Hello {name} a.k.a {heroName}
//         </h1>
//     </div>
//     )
// }

// export default Greet 

// Another way of destructuring
const Greet = props => {
    const {name, heroName} = props 
    return (
    <div>
        <h1>
            Hello {name} a.k.a {heroName}
        </h1>
    </div>
    )
}

export default Greet
