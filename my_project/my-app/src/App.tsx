import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from './BootstrapGrid';
import RestaurantPage from './RestaurantPage';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import NotFound from './NotFound';
import UserList from './UserList';
import Login from './Login';
import Edit from './Edit';
import { useSelector } from 'react-redux';
import { RootState } from './store';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function App(){
  let totalDisplayPhotos = 9
  // const LoggedUsername = useSelector((state:RootState)=> state.auth.username)
  return(
    <div className="App">
      {/* {LoggedUsername && <p>Hi, {LoggedUsername}</p> } */}
    <BrowserRouter>
      <Routes>
        <Route path ="/" element ={<Home />}>
          <Route path ="users" element={<UserList />}></Route>
        </Route>
        <Route path ="edit" element={<Edit />}></Route>
        <Route path ="login" element={<Login />}></Route>
        <Route path ="/restaurantpage1" element ={<RestaurantPage text="1"/>}></Route>
        <Route path ="/restaurantpage2" element ={<RestaurantPage text="2"/>}></Route>
        <Route path ="/restaurantpage3" element ={<RestaurantPage text="3"/>}></Route>
        <Route path ="/restaurantpage4" element ={<RestaurantPage text="4"/>}></Route>
        <Route path ="/restaurantpage5" element ={<RestaurantPage text="5"/>}></Route>
        <Route path ="/restaurantpage6" element ={<RestaurantPage text="6"/>}></Route>
        <Route path ="/restaurantpage7" element ={<RestaurantPage text="7"/>}></Route>
        <Route path ="/restaurantpage8" element ={<RestaurantPage text="8"/>}></Route>
        <Route path ="/restaurantpage9" element ={<RestaurantPage text="9"/>}></Route>
        <Route path ="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;
