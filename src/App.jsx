import React from 'react';
import './App.css'; // this is how you import CSS
import About from './componets/About';
import Contact from './componets/Contact';
import Home from './componets/Home';
import Parent from './componets/Parent';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMore from './componets/AboutMore';
import PageNotFound from './componets/404';
import RestDemo from './componets/RestDemo';
import Login from './componets/Login';
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
        <Router>
          {/* <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '50%',
            background: 'red',
            margin: 'auto',
            padding: "20px"
          }}>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>  */}
          <Switch>
            <Route path="/home">
              <Home /> {/* /home */}
            </Route>
            <Route path="/contact">
              <Contact /> {/* /contact */}
            </Route>
            <Route path="/about" exact>
              <About /> {/* /about */}
            </Route>
            <Route path="/about/more">
              <AboutMore /> {/* /about */}
            </Route>
            <Route path="/" exact>
              <Login /> {/* /home */}
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
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
