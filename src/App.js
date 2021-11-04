import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="TheQuestion">Clear? {this.state.testvar}</div>
      <button className="TheButton" onClick={this.testFunc}>Clear!</button>
    </div>
  );
}

// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {testvar: "none"};
//   }

//   componentDidMount() {
//     console.log("Component Mounted");
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="TheQuestion">Clear? {this.state.testvar}</div>
//         <button className="TheButton" onClick={this.testFunc}>Clear!</button>
//       </div>
//     );
//   }

//   testFunc = async () => {
//     console.log("Test function called");
//   }

// }

export default App;
