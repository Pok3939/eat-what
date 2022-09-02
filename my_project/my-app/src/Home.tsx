import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from './BootstrapGrid';
import RestaurantPage from './RestaurantPage';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Refresh() {
    alert('Refresh new photos');
  } 

function Home() {
    return (
      <div className="App">
        <text className='Heading'> Eat What?</text>
        <div className='BlackBar'></div>
        <div className='dishChoice'>
          <FormControlLabel className="TickBox1" control={<Checkbox defaultChecked />} label="中菜" />
          <FormControlLabel className="TickBox1" control={<Checkbox defaultChecked />} label="港式" />
          <FormControlLabel className="TickBox1" control={<Checkbox defaultChecked />} label="日本菜" />
          <FormControlLabel className="TickBox1" control={<Checkbox defaultChecked />} label="韓國菜" />
          <FormControlLabel className="TickBox1" control={<Checkbox defaultChecked />} label="泰國菜" />
          <FormControlLabel className="TickBox1" control={<Checkbox defaultChecked />} label="中東菜" />
          <FormControlLabel className="TickBox1" control={<Checkbox defaultChecked />} label="西餐" />
        </div>
  
        <header className="App-header">
          <div className="GridPhoto">
            <Container/>
          </div>
            <BrowserRouter>
            <Routes>
                  <Route path ="/restaurantpage1" element ={<RestaurantPage/>}>
                  </Route>
                  <Route path ="/restaurantpage2" element ={<RestaurantPage/>}>
                  </Route>
              </Routes></BrowserRouter>           
                
          <div className='RefreshButton' onClick={Refresh}><img src ='./refresh.png'></img></div>
          
        </header>
      </div>
  
    );
  }

  export default Home;