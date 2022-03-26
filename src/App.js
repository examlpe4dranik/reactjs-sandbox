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

    const blocks = this.state.sameBlocks;

    return (
        <div className="App" style={divStyle}>
          <h3>{this.state.titlePage}</h3>

          <input type="text" onChange={this.handleInput} />
          <button onClick={this.changeTitleHandler.bind(this, this.state.titlePage + "+")}>Change title</button>

            <SameBlock
                number={blocks[0].number}
                name={blocks[0].name}
                message={blocks[0].message}
                onChangeTitle={this.changeTitleHandler.bind(this, blocks[0].name)}/>
            <SameBlock
                number={blocks[1].number}
                name={blocks[1].name}
                message={blocks[1].message}
                onChangeTitle={() => this.changeTitleHandler(blocks[1].name)}/>
            <SameBlock
                number={blocks[2].number}
                name={blocks[2].name}
                message={blocks[2].message}
                onChangeTitle={() => this.changeTitleHandler(blocks[2].name)}/>
            <SameBlock
                number={blocks[3].number}
                name={blocks[3].name}
                message={blocks[3].message}
                onChangeTitle={() => this.changeTitleHandler(blocks[3].name)}/>
        </div>
    );
  }
}

export default App;
