import React, { Component } from 'react';
import HomePage from './home'
import AddHome from './addHome'
class App extends Component {
  state = {
    home : [
       {name:'A', age:27, belt:'black', id:1},
       {name:'B', age:26, belt:'green', id:2},
       {name:'C', age:25, belt:'red', id:3},
       {name:'D', age:24, belt:'pink', id:4}
     ]
  }

  addHome = (newHome) => {
    newHome.id = Math.random();
    let newHomes = [...this.state.home, newHome];
    this.setState({
      home : newHomes
    });

  }
  deleteHome = (e) =>{
    const allHome = this.state.home.filter(home => {
      return home.id !== e;
    })
    this.setState({
      home: allHome
    })
  }
  componentDidMount(){
    console.log("component mounted");
  }
  componentDidUpdate(prevProps,prevState){
    console.log("component update");
    console.log(prevProps,prevState);
  }

  render() {
    return (
      <div className="App">
       <h1>welcome to my react app</h1>
       <h1>knorex</h1>
       <HomePage deleteHome={this.deleteHome} homes={this.state.home} />
       <AddHome addHome ={this.addHome}/>
      </div>
    );
  }
}

export default App;
