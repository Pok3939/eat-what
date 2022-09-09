import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import Headbar from './Headbar'

export default function Register() {
    const {handleSubmit, register} = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    return (
        <div>
          <Headbar />
      <h1>Register</h1>
      <form onSubmit={handleSubmit(async data => {
        const formData = new FormData();

        formData.append('username', data.username)
        formData.append('password', data.password)

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/register`, {
            method: 'POST',
            credentials: 'include',
            body: formData
          });

          if (res.status === 200) {
            navigate('/login')
          } 
          // else if (res.status === 404) {
          //   setError('重複用戶名稱')
          // }
        })}>

        Username: <input {...register('username', {required: true})}></input><br></br>
        Password: <input type="password" {...register('password', {required: true})}></input><br></br>
        <input type="submit"></input>
      </form>
    </div>
  )
}