// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import './App.css';
import{Provider} from "react-redux"
import store from "./store/store";
import RootRouter from './router/Router';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>   
         <RootRouter/>
      </Provider>
      
      
    </div>
    );
  }
}

export default App;