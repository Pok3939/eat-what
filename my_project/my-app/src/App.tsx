import React from 'react';
import logo from './logo.svg';
import './App.css';
import GridLayout from "react-grid-layout";
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'

class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 3, h: 6, static: true },
      { i: "b", x: 3, y: 0, w: 3, h: 6, static: true },
      { i: "c", x: 6, y: 0, w: 3, h: 6, static: true }
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div className='layout2' key="a">a</div>
        <div className='layout2' key="b">b</div>
        <div className='layout2' key="c">c</div>
      </GridLayout>
    );
  }
}

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='Photogrid'>
        <MyFirstGrid/>
        <MyFirstGrid/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
      </header>
      
    </div>
    
  );
}

export default App;
