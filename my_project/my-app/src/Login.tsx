import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loggedIn } from './auth/action';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const [error, setError] = useState('');
    const navigate = useNavigate();

    return (
    <div>
      <h1>Login</h1>
      <form onSubmit={async e => {
        e.preventDefault();

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({username, password})
        });
        if (res.status === 200) {
          const user = await res.json ();
          dispatch(loggedIn(user.username))
          navigate('/edit')
        } else if (res.status === 400) {
          setError('密碼錯誤')
        } else if (res.status === 404) {
          setError('找不到你')
        }
      }}>
        {error}
        <input type="text" value={username} onChange={e => setUsername(e.currentTarget.value)}></input>
        <input type="text" value={password} onChange={e => setPassword(e.currentTarget.value)}></input>
        <input type="submit"></input>
      </form>
    </div>
    )
}