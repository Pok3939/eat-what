
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Headbar from './Headbar'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './RestaurantPage.css';
import { tokenToString } from 'typescript';
import { RootState, useAppSelector } from './store';
import { useSelector } from 'react-redux';
import React from "react";
import GoogleMapReact from 'google-map-react';
import googleMarker from './mapmarker.png';
interface Restaurants { id: number; restaurant_name: string; restaurant_icon: string; restaurant_phone: string; restaurant_address: string; restaurant_photo1: string; restaurant_photo2: string; restaurant_photo3: string; restaurant_menu: string }
interface Props {
    text: string
}
const AnyReactComponent = ({ text }: { lat: number, lng: number, text: string }) => <div>{text}
    <img className="gMap" src={googleMarker}></img>
</div>;

function RestaurantPage() {
    const [restaurants, setRestaurants] = useState<any>([]);
    const isLoggedIn = useSelector((state: RootState) => state.auth.loggedIn)
    const search = window.location.search;
    const params = new URLSearchParams(search);
    var restaurantId: any = params.get('id');
    const token = localStorage.getItem("token")
    console.log("currentId", restaurantId);
    // console.log(restaurants[0].id)
    // console.log("damn", restaurants[0].lng)

    // function SimpleMap() {
    //     defaultProps
    // };
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
    console.log("TEST", restaurants);

    // if (restaurants[0].length != 0) {
    //     const defaultProps = {
    //         center: {
    //             lat: restaurants[0].lat,
    //             lng: restaurants[0].lng
    //         },
    //         zoom: 16
    //     }
    // }

    // var realId = restaurantId - 2;
    // if (restaurantId < 2) { realId = 0 } else if (restaurantId < 3) { realId = 1 }
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
                    {restaurants[0] && <div style={{ height: '300px', width: '300px' }}>
                        <GoogleMapReact

                            bootstrapURLKeys={{ key: "AIzaSyABi7Z9U8FptDD1c15MKOidfu1e52rPPVs" }}
                            defaultCenter={{
                                lat: Number(restaurants[0].lat),
                                lng: Number(restaurants[0].lng)
                            }}
                            defaultZoom={16}
                        >
                            <AnyReactComponent

                                lat={Number(restaurants[0].lat)}
                                lng={Number(restaurants[0].lng)}
                                text=""
                            />
                        </GoogleMapReact>
                    </div>}

                    {isLoggedIn && restaurants[0] && <div className='ChooseThis'><Button onClick={async () => {
                        alert("已寫入飲食紀錄!")
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