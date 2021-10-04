import React from 'react';
import './App.css'; // this is how you import CSS
// import abc from 'xyz'; // this is how you import JS

// JS Function but returning bunch of HTML element
// function App() {
//   return (
//     <>
//       <h1>This is a React Functional Component</h1>
//       <h1>This is a React Functional Component</h1>
//       <h1>This is a React Functional Component</h1>
//     </>
//   );
// }

// export default App;


// JSX -> It helps you to write JS and HTML in a single place

// Functional Component
// Rules
// 1. You Must have a function
// 2. That function must return some value(object,variable,or HTML)


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>This is a Class Component</h1>
      </>
    )
  }
}

export default App;

// Class Component
// Rules
// 1. You must have a class that extends Component Class from React package
// 2. must have constructor accepting props with calling super constructor
// 3. render method and it must return the (value,object or HTML)
