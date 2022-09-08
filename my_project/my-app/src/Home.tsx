import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from './BootstrapGrid';
import RestaurantPage from './RestaurantPage';
import { Link, BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { loggedOut } from './auth/action'
import { RootState } from './store'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Refresh() {
    alert('Refresh new photos');
  } 

export default function Home() {
    const isLoggedIn = useSelector((state: RootState) => state.auth.loggedIn)
    console.log("isLoggedIn:",isLoggedIn);
    
    const dispatch = useDispatch()
    const navigate = useNavigate();
    return (
      <div className="App">
        <div className='Heading'> Eat What?</div>
        <div className='BlackBar'></div>
        <div className='dishChoice'>
          <FormControlLabel className="TickBox1" control={<Checkbox defaultChecked />} label="中菜" />
          <FormControlLabel className="TickBox1" control={<Checkbox defaultChecked />} label="港式" />
          <FormControlLabel className="TickBox1" control={<Checkbox defaultChecked />} label="台灣菜" />
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
          <div className='RefreshButton' onClick={Refresh}><img src ='./refresh.png'></img></div>
          <NavLink to="/login">Login</NavLink>
          { ! isLoggedIn && <NavLink to="/edit">Edit</NavLink> }
          { ! isLoggedIn && <NavLink to="/login">Login</NavLink> }
        { isLoggedIn === true && <a href="#" onClick={() => {
          dispatch(loggedOut());
          navigate('/')
        }}>Logout</a> }
        </header>
      <Outlet />
      </div>
  
    );
  }
