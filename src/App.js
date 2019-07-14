import React, {Component} from 'react';
import './App.css';
import userData from './userData'
import User from './User'

// ***************************FUNCTION***************************
//WITH FUNCTION, YOU CANNOT USE SETSTATE(), ALSO REFERRED TO AS STATLESS FUNCTION

// const App = () => {
//   const MyComponent = userData.map((item) => {
//     return (
//       <User key={item.id} user={item} />
//     )
//   })
//   return (
//     <div className="App">
//       {MyComponent}
//     </div>
//   );
// }

// ***************************VS***************************

// ***************************CLASS***************************
// WITH CLASS YOU CAN USE SETSTATE()

class App extends React.Component {
  render() {
    const MyComponent = userData.map((item) => {
      return (
        <User key={item.id} user={item} />
      )
    })
    return (
      <div className="App">
        <Header username="Whoever"/>
        {MyComponent}
        <Greeting />
      </div>

      
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Welcome, {this.props.username}!</h1>
      </header>
    )
  }
}

class Greeting extends Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }
    return (
      <h1>Good {timeOfDay} to you, sir or madam!</h1> 
    )
  }
}

export default App;
