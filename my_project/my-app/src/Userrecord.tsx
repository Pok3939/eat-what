import React from "react";
import { useForm } from 'react-hook-form';
import Headbar from './Headbar'

export default function Userrecord(){

    const {handleSubmit, register} = useForm();
    return (
        <div><Headbar /><h1>Record</h1><form onSubmit={handleSubmit(async data => {
            const formData = new FormData();
            formData.append('restaurant_name', data.restaurant_name);
            formData.append('dishes', data.dishes);
            formData.append('comment', data.comment);
            formData.append('rate', data.rate);

            console.log(process.env.REACT_APP_BACKEND_URL);

            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/userrecord`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: formData
            });
        })}>
            Restaurant_Name: <input {...register('restaurant_name', {required: true})}></input><br></br>
            Dishes: <input {...register('dishes', {required: true})}></input><br></br>
            Comment: <input {...register('comment', {required: true})}></input><br></br>
            Rate: <input {...register('rate', {required: true})}></input><br></br>
<input type="submit"></input>
</form>
</div>
    )
}