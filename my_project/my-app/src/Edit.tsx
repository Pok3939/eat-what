import React from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import Headbar from './Headbar'

export default function Edit() {
    const {handleSubmit, register} = useForm();
    const navigate = useNavigate();

    return (
        <div>
          <Headbar />
      <h1>Edit</h1>
      <form onSubmit={handleSubmit(async data => {
        const formData = new FormData();

        formData.append('restaurant_name', data.restaurant_name)
        formData.append('restaurant_icon', data.restaurant_icon[0])
        formData.append('restaurant_phone', data.restaurant_phone)
        formData.append('restaurant_address', data.restaurant_address)
        formData.append('restaurant_photo1', data.restaurant_photo1[0])
        formData.append('restaurant_photo2', data.restaurant_photo2[0])
        formData.append('restaurant_photo3', data.restaurant_photo3[0])
        formData.append('restaurant_menu', data.restaurant_menu[0])
console.log(process.env.REACT_APP_BACKEND_URL)
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/edit`, {
         method: 'POST',
            credentials: 'include',
            body: formData
        });
        if (res.status === 200) {
          navigate('/')
        }
      })}>
      Restaurant_Name: <input {...register('restaurant_name', {required: true})}></input><br></br>
      Restaurant_Icon: <input type="file" {...register('restaurant_icon', {required: true})}></input><br></br>
      Restaurant_Phone:<input {...register('restaurant_phone', {required: true})}></input><br></br>
      Restaurant_Address:<input {...register('restaurant_address', {required: true})}></input><br></br>
      Restaurant_Photo1:<input type="file" {...register('restaurant_photo1', {required: true})}></input><br></br>
      Restaurant_Photo2:<input type="file" {...register('restaurant_photo2', {required: true})}></input><br></br>
      Restaurant_Photo3:<input type="file" {...register('restaurant_photo3', {required: true})}></input><br></br>
      Restaurant_Menu:<input type="file" {...register('restaurant_menu', {required: true})}></input><br></br>
      <input type="submit"></input>
      </form>
    </div>
    )
}

