import React, {Component} from 'react';
import Welcome from "./components/Welcome";


export default class App extends Component {
  constructor(){
    super();
    
    this.state = {
      name: "Jay",
      age: 20
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({name: e.target.value});

  }

  render() {
    return(
      <div>
        <Welcome name={this.state.name} age={this.state.age}/>
        <input placeholder="Enter Name" onChange={e => this.setState({name: e.target.value })} ></input>
        <input placeholder="Enter Age" onChange={e => this.setState({age: e.target.value })}></input>
      </div>
    )
  }

}