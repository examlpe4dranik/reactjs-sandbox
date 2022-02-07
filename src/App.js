import logo from './logo.svg';
import './App.css';
import SameBlock from './SameBlock/SameBlock.js';

function App() {
  const divStyle = {'text-align': 'center'};

  return (
    <div className="App" style={divStyle}>
      <h3 style={{fontSize: '36px', 'color': '#a3b5c2'}}>Hello world!</h3>
        <SameBlock/>
    </div>
  );
}

export default App;
