import './App.css';
import SameBlock from './SameBlock/SameBlock.js';
import {Component} from "react";

class App extends Component {

  state = {
    sameBlocks: [
      {number: 1, name:'First block', message: 'message from first block'},
      {number: 2, name:'Second block', message: 'message from second block'},
      {number: 3, name:'Third block', message: 'message from third block'},
      {number: 4, name:'Fourth block', message: 'message from fourth block'}
    ],
      titlePage: "Title this page"
  };

  render() {
    const divStyle = {'text-align': 'center'};

    const blocks = this.state.sameBlocks;

    return (
        <div className="App" style={divStyle}>
          <h3>{this.state.titlePage}</h3>
            <SameBlock number={blocks[0].number} name={blocks[0].name} message={blocks[0].message}/>
            <SameBlock number={blocks[1].number} name={blocks[1].name} message={blocks[1].message}/>
            <SameBlock number={blocks[2].number} name={blocks[2].name} message={blocks[2].message}/>
            <SameBlock number={blocks[3].number} name={blocks[3].name} message={blocks[3].message}/>
        </div>
    );
  }
}

export default App;
