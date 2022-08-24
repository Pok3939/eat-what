import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from './photo9Grid'
import NestedGrid from './handMadeGrid'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Refresh() {
  alert('Refresh new photos');
}
function App() {
  return (
    <div className="App">
      <text className='Heading'> Eat What?</text>
      <div className='BlackBar'></div>
      <div className='dishChoice'>
        <FormControlLabel className ="TickBox1" control={<Checkbox defaultChecked />} label="中菜" />
        <FormControlLabel className ="TickBox1" control={<Checkbox defaultChecked />} label="港式" />
        <FormControlLabel className ="TickBox1" control={<Checkbox defaultChecked />} label="日本菜" />
        <FormControlLabel className ="TickBox1" control={<Checkbox defaultChecked />} label="韓國菜" />
        <FormControlLabel className ="TickBox1" control={<Checkbox defaultChecked />} label="泰國菜" />
        <FormControlLabel className ="TickBox1" control={<Checkbox defaultChecked />} label="中東菜" />
        <FormControlLabel className ="TickBox1" control={<Checkbox defaultChecked />} label="西餐" />
      </div>
      <header className="App-header">
        {/* <Grid rowHeight={20}/> */}
        <NestedGrid/>
        <button className='RefreshButton' onClick={Refresh}>🔄</button>
      
      </header>
      
    </div>
    
  );
}

export default App;
