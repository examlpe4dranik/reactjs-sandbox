import logo from './logo.svg';
import './App.css';
import SameBlock from './SameBlock/SameBlock.js';

function App() {
  const divStyle = {'text-align': 'center'};

  return (
    <div className="App" style={divStyle}>
      <h3>Hello world!</h3>
        <SameBlock number={1} message={'message1'}>
          <p style={{color: 'red'}}>has showed child's content</p>
        </SameBlock>
        <SameBlock number={2} message={'message2'}>
          <p style={{color: '#34c4a1'}}>has showed child's content</p>
        </SameBlock>
        <SameBlock number={3} message={'message3'}/>
    </div>
  );
}

export default App;
