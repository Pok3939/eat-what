import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import './BootstrapGrid.css'
import RestaurantPage from './RestaurantPage';
import { css } from '@emotion/react';




function BootstrapGrid() {

    const [restaurants, setRestaurants] = useState<any[]>([]);
    useEffect(() => {
        async function main() {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/restaurants`, {
                credentials: 'include'
            })
            const json = await res.json();

            setRestaurants(json)
        }
        main();
    }, [])

    return (
        <Container>
            <Row>
                <Col>

                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to='/restaurantpage4'>
                    <div>
                            {restaurants.map((restaurants: any) => (
                                <div>
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/${restaurants.restaurant_photo1}`} /></div>))} 
                        </div>
                        </Link>
                    <Link to='/restaurantpage5'>
                        <img src='./grid5.jpg' />
                    </Link>
                    <Link to='/restaurantpage6'>
                        <img src='./grid6.jpg' />
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to='/restaurantpage7'>
                        <img src='./grid7.jpg' />
                    </Link>
                    <Link to='/restaurantpage8'>
                        <img src='./grid8.jpg' />
                    </Link>
                    <Link to='/restaurantpage9'>
                        <img src='./grid9.jpg' />
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default BootstrapGrid;