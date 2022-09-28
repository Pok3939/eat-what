import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import DropdownExampleClearable from './Dropdown';
// import Headbar from './Headbar';

export default function Edit() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const [dishes, setDishes] = useState<any[]>([]);
  useEffect(() => {
    async function main() {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dishes`, {
        credentials: 'include'
      })
      const json = await res.json();
      console.log(json)
      setDishes(json)
    }
    main();
  }, [])

  return (
    <div>
      {/* <Headbar /> */}
      <h1>新增餐廳資料</h1>
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
        formData.append('restaurant_dishes_id', data.restaurant_dishes_id[0])
        formData.append('lat', data.lat)
        formData.append('lat', data.lng)
        console.log("formData:", formData)
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/edit`, {
          method: 'POST',
          credentials: 'include',
          body: formData
        });
        if (res.status === 200) {
          navigate('/')
        }
      })}>
        餐廳名稱: <input {...register('restaurant_name', { required: true })}></input><br></br>
        餐廳門面: <input type="file" {...register('restaurant_icon', { required: true })}></input><br></br>
        餐廳電話:<input {...register('restaurant_phone', { required: true })}></input><br></br>
        餐廳地址:<input {...register('restaurant_address', { required: true })}></input><br></br>
        餐廳圖片1:<input type="file" {...register('restaurant_photo1', { required: true })}></input><br></br>
        餐廳圖片2:<input type="file" {...register('restaurant_photo2', { required: true })}></input><br></br>
        餐廳圖片3:<input type="file" {...register('restaurant_photo3', { required: true })}></input><br></br>
        餐廳菜單:<input type="file" {...register('restaurant_menu', { required: true })}></input><br></br>
        緯度:<input {...register('lat', { required: true })}></input><br></br>
        經度:<input {...register('lng', { required: true })}></input><br></br>
        <select {...register("restaurant_dishes_id")}>
          {dishes.map(dish => (<option value={`${dish.value}`}>{dish.text}</option>))
            // <option value="female">female</option>
            // <option value="male">male</option>
            // <option value="other">other</option>
          }
        </select>

        <input type="submit"></input>
      </form>
      <NavLink to="/">返回主頁</NavLink>
    </div>
  )
}

