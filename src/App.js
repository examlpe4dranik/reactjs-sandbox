import './App.css';
import SameBlock from './SameBlock/SameBlock.js';
import {Component} from "react";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sameBlocks: [
                {number: 1, name: 'First block', message: 'message from first block'},
                {number: 2, name: 'Second block', message: 'message from second block'},
                {number: 3, name: 'Third block', message: 'message from third block'},
                {number: 4, name: 'Fourth block', message: 'message from fourth block'}
            ],
            titlePage: "Title this page",
            showBlocks: false
        };
    }

    toggleBlockHandler = () => {
        this.setState({
            showBlocks: !this.state.showBlocks
        })
    }

    onChangeName = (name, index) => {
        const blocks = [...this.state.sameBlocks];
        blocks[index].name = name;
        this.setState({
            sameBlocks: blocks
        });
    }

    deleteHendler = (index) => {
        const blocks = this.state.sameBlocks.concat();
        blocks.splice(index, 1);
        this.setState({
            sameBlocks: blocks
        });
    }

    render() {
        const divStyle = {textAlign: 'center'};

        let viewBlocks = null;
        if (this.state.showBlocks) {
            viewBlocks = this.state.sameBlocks.map((block, index) => {
                return (
                    <SameBlock
                        key={index}
                        number={block.number}
                        name={block.name}
                        message={block.message}
                        onDelete={this.deleteHendler.bind(this, index)}
                        onChangeName={(event) => {
                            this.onChangeName(event.target.value, index)
                        }}
                    />
                )
            })
        }

        return (
            <div className="App" style={divStyle}>
                <h1>{this.props.title}</h1>
                <h3>{this.state.titlePage}</h3>
                <button onClick={this.toggleBlockHandler.bind(this)}>Toggle blocks</button>
                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: '20px'
                }}>
                    {viewBlocks}
                </div>
                {this.state.showBlocks ? <hr/> : ''}
            </div>
        );
    }
}

export default App;
