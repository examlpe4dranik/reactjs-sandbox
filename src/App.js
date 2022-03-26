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
    titlePage: "Title this page",
    showBlocks: false
  };

  changeTitleHandler = (newtitle) => {
    this.setState({
      titlePage: newtitle
    });
  }

  toggleBlockHandler = () =>{
    this.setState({
      showBlocks: !this.state.showBlocks
    })
  }

  render() {
    const divStyle = {textAlign: 'center'};

    let viewBlocks = null;
    if (this.state.showBlocks)
    {
      viewBlocks = this.state.sameBlocks.map((block, index)=>
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

    return (
        <div className="App" style={divStyle}>
          <h3>{this.state.titlePage}</h3>
          <button onClick={this.toggleBlockHandler.bind(this)}>Toggle blocks</button>
          {viewBlocks}
          {this.state.showBlocks ? <hr /> : ''}
        </div>
    );
  }
}

export default App;
