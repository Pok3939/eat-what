import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BootstrapGrid from './BootstrapGrid';
import Headbar from './Headbar'
import { Outlet, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { logOut } from './auth/action'
import { RootState, useAppDispatch } from './store'
import { useSelector } from 'react-redux'
// import Tickbox from './Tickbox'

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function Home() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.loggedIn)
  // console.log("isLoggedIn:", isLoggedIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //-----------//
  // let text: any = localStorage.getItem('tickedValue')
  // const myArray = text.split(" ");
  //-----------//

  return (
    <div className="App">
      <Headbar />
      <div className="basicFunction">
        {!isLoggedIn && <NavLink to="/login">登入</NavLink>}<br></br>
        {!isLoggedIn && <NavLink to="/register">註冊 </NavLink>}
        {/* {isLoggedIn && <NavLink to="/edit">新增</NavLink>}<br></br> */}
        {isLoggedIn && <NavLink to="/recordcheck">飲食紀錄</NavLink>}
      </div>
      <header className="App-header">

        <div className="GridPhoto">
          <BootstrapGrid
          // text={ } 
          />
        </div>


        {isLoggedIn === true && <a href="#" onClick={() => {
          dispatch(logOut());
          navigate('/')
        }}>登出</a>}
      </header>
      <Outlet />
    </div>
  );
}
