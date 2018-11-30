import React, { Component } from 'react';
import HomePage from './home'
class App extends Component {
  state = {
    home : [
       {name:'A', age:27, belt:'black', id:1},
       {name:'B', age:26, belt:'green', id:2},
       {name:'C', age:25, belt:'red', id:3},
       {name:'D', age:24, belt:'pink', id:4}
     ]
  }
  render() {
    return (
      <div className="App">
       <h1>welcome to my react app</h1>
       <h1>knorex</h1>
       <HomePage homes={this.state.home} />
      </div>
    );
  }
}

export default App;
