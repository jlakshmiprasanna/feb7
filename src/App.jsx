import { Component } from "react";
import "./App.css";
import Parent from "./Components/Parent";
import Counter from "./Counter/Counter";

class App extends Component{
  render(){
    const arr=[1,2,3,4,5,6]
    const names=["Manu","Bannu","Prani","Floru","Renuka"]
    const people=[
      {id:1,name:"Raj"},
      {id:2,name:"Naanu"},
      {id:3,name:"Prasanna"}
    ]

    return (
      <div>
        <Counter />
        <h1>hello world</h1>
        <Parent values={arr} names={names} people={people}/>
      </div>
    )
  }
}

export default App;