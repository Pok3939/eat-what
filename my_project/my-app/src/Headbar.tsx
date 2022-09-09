import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


export default function Headbar(){
    const navigate = useNavigate()
    const routeChange = () =>{ 
        let path = '/'; 
        navigate(path);
      }
    return(
    
    <><div className='Heading' onClick={routeChange}>Eat What?</div>
    <div className='BlackBar'></div></>
    
    )
    
}