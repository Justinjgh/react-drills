import React, {Component} from 'react';
import './App.css';
import Todo from './Todo'

export default class App extends Component {
  constructor(){
    super();
    
    this.state = {
      list: [],
      input: ""

    };

    this.listAdd = this.listAdd.bind(this);
  }

  listChange(value){
    this.setState({ input: value });
  }

  listAdd() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }

  render() {
    let list = this.state.list.map((ele, i) => {
      return <Todo key={i} task={ele} />;
    });
  
  return (
    <div className="App">
      <h1>Le List</h1>
    
    <div>
      <input
      value={this.state.input}
      placeholder="Enter new TODO"
      onChange={e => this.listChange(e.target.value)}
      />

      <button onClick={this.listAdd}>Add!</button>
    </div>

    <br />

    {list}

    </div>
    );
  
  }

}

