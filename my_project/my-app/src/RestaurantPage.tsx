
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Headbar from './Headbar'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './RestaurantPage.css';
import GoogleMapReact from './GoogleMap'
import { tokenToString } from 'typescript';
import { useAppSelector } from './store';
interface Restaurants { id: number; restaurant_name: string; restaurant_icon: string; restaurant_phone: string; restaurant_address: string; restaurant_photo1: string; restaurant_photo2: string; restaurant_photo3: string; restaurant_menu: string }
interface Props {
    text: string
}
function RestaurantPage() {
    const [restaurants, setRestaurants] = useState<any>([]);

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const restaurantId = params.get('id');
    const token = useAppSelector(state => state.auth.token)
    // console.log(restaurantId);

    useEffect(() => {
        async function main() {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/restaurants/${restaurantId}`, {
                credentials: 'include'
            })
            const json = await res.json();

            setRestaurants(json)
        }
        main();
    }, [])
    console.log(restaurants)
    return (
        <><div><Headbar /></div><div><Container id='restaurantContainer'>
            <Row>
                <Col sm={8}>
                    <Row>
                        <div className='restaurantPhoto1'>{restaurants[0] && <Col sm={12}><img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/${restaurants[0].restaurant_photo1}`}></img></Col>}
                        </div>
                    </Row>
                    <Row>
                        {restaurants[0] && <Col sm={4}><img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/${restaurants[0].restaurant_menu}`}></img></Col>}
                        {restaurants[0] && <Col sm={4}><img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/${restaurants[0].restaurant_photo2}`}></img></Col>}
                        {restaurants[0] && <Col sm={4}><img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/${restaurants[0].restaurant_photo3}`}></img></Col>}
                    </Row>
                </Col>
                <Col sm={4}>
                    <div className='restaurantIcon'>
                        {restaurants[0] && <img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/${restaurants[0].restaurant_icon}`}></img>}
                    </div>
                    {/* <div className='RestaurantName'><h3>${restaurants.map((restaurants:any) =>(${restaurant.restaurant_name}}</h3></div> */}
                    {restaurants[0] && <div className='Name'><b>Name:  </b>{restaurants[0].restaurant_name}</div>}
                    {restaurants[0] && <div className='Address'><b>Address:  </b>{restaurants[0].restaurant_address}</div>}
                    <div className='GoogleMap'><GoogleMapReact /></div>
                    {restaurants[0] && <div className='ChooseThis'><Button onClick={async () => {
                        console.log("token:", token)
                        console.log("tokenlocalstorage:", localStorage.getItem("token"))
                        let ans = restaurants[0].restaurant_name
                        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/userrecord`,
                            {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: `Bearer ${token}`,
                                },
                                credentials: 'include',
                                body: JSON.stringify({ restaurant_name: ans })
                            }
                        )
                        console.log(

                            await res.json()
                        );

                    }
                    } variant="primary" size="lg">
                        就食呢間啦!

                    </Button></div>}
                </Col>
            </Row>
        </Container></div></>

    );
}

export default RestaurantPage