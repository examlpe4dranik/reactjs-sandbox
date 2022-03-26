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

  changeTitleHandler = (newtitle) => {
    this.setState({
      titlePage: newtitle
    });
  }

  handleInput = (event) =>{
    this.setState({
      titlePage: event.target.value
    })
  }

  render() {
    const divStyle = {textAlign: 'center'};

    return (
        <div className="App" style={divStyle}>
          <h3>{this.state.titlePage}</h3>

          <input type="text" onChange={this.handleInput} />
          <button onClick={this.changeTitleHandler.bind(this, this.state.titlePage + "+")}>Change title</button>

          {
            this.state.sameBlocks.map((block, index)=>
            {
              return (
                  <SameBlock
                      key={index}
                      number={block.number}
                      name={block.name}
                      message={block.message}
                      onChangeTitle={this.changeTitleHandler.bind(this, block.name)}
                  />
              )
            })
          }
        </div>
    );
  }
}

export default App;
