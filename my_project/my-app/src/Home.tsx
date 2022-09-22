import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from './BootstrapGrid';
import Headbar from './Headbar'
import RestaurantPage from './RestaurantPage';
import { Link, BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { logOut } from './auth/action'
import { RootState, useAppDispatch } from './store'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Tickbox from './Tickbox'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Refresh() {
  alert('Refresh new photos');
}



export default function Home() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.loggedIn)
  // console.log("isLoggedIn:", isLoggedIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="App">
      <Headbar />
      <Tickbox />
      <header className="App-header">
        <NavLink to="/login">Login</NavLink><br></br>
        {!isLoggedIn && <NavLink to="/register">Register</NavLink>}<br></br>
        {!isLoggedIn && <NavLink to="/edit">Edit</NavLink>}<br></br>
        {!isLoggedIn && <NavLink to="/userrecord">Record</NavLink>}
        <div className="GridPhoto">
          <Container />
        </div>
        <div className='RefreshButton' onClick={Refresh}><img src='./refresh.png'></img></div>

        {isLoggedIn === true && <a href="#" onClick={() => {
          dispatch(logOut());
          navigate('/')
        }}>Logout</a>}
      </header>
      <Outlet />
    </div>
  );
}
