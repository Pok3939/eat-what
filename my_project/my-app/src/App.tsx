import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RestaurantPage from './RestaurantPage';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { loggedIn, logOut } from "./auth/action";
import NotFound from './NotFound';
import UserList from './UserList';
import Login from './Login';
import Edit from './Edit';
import Register from './Register';
import RecordCheck from './RecordCheck';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from "./store";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function App() {
  let totalDisplayPhotos = 9
  const LoggedUsername = useSelector((state: RootState) => state.auth.username);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async function () {
      const token = localStorage.getItem('token')
      if (token == null) {
        dispatch(logOut())
        return;
      }
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/me`, {
        headers: {
          "Authorization": `Bearer ${token}`
        },
      });
      if (res.status === 200) {
        const user = await res.json();
        dispatch(loggedIn(user.username, user.token));
      }
    })()

  }, [])
  return (
    <div className="App">
      {/* {LoggedUsername && <p>Hi, {LoggedUsername}</p> } */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="users" element={<UserList />}></Route>
          </Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="edit" element={<Edit />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="/restaurantpage" element={<RestaurantPage />}></Route>
          <Route path="recordcheck" element={<RecordCheck />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
