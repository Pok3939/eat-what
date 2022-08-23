import React from 'react';
import logo from './logo.svg';
import './App.css';
import GridLayout from "react-grid-layout";
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'

// class MyResponsiveGrid extends React.Component {
//   render() {
//     // {lg: layout1, md: layout2, ...}
//     const layouts = getLayoutsFromSomewhere();
//     return (
//       <ResponsiveGridLayout
//         className="layout"
//         layouts={layouts}
//         breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
//         cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
//       >
//         <div key="1">1</div>
//         <div key="2">2</div>
//         <div key="3">3</div>
//       </ResponsiveGridLayout>
//     );
//   }
// }

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
        <div className='layout2' key="a"></div>
        <div className='layout2' key="b"></div>
        <div className='layout2' key="c"></div>
      </GridLayout>
    );
  }
}
function Refresh() {
  alert('Refresh new photos');
}
function App() {
  return (
    <div className="App">
      <text className='Heading'> Eat What?</text>
      <div className='blackBar'></div>
      <header className="App-header">
        <div className='Photogrid'>
        <MyFirstGrid/>
        <MyFirstGrid/>
        <MyFirstGrid/>
        </div>
        <button className='RefreshButton' onClick={Refresh}>🔄</button>
      
      </header>
      
    </div>
    
  );
}

export default App;
