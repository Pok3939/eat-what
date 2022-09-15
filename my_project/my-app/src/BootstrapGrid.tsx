import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import './BootstrapGrid.css'
import RestaurantPage from './RestaurantPage';
import { css } from '@emotion/react';




function BootstrapGrid() {



    // function getRandomInt(min: any, max: any) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min) + min);
    // }
    const [restaurants, setRestaurants] = useState<any[]>([]);
    useEffect(() => {
        async function main() {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/restaurants`, {
                credentials: 'include'
            })
            const json = await res.json();
            function shuffle(array: any[]) {
                let currentIndex = array.length, randomIndex;

                // While there remain elements to shuffle.
                while (currentIndex != 0) {

                    // Pick a remaining element.
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;

                    // And swap it with the current element.
                    [array[currentIndex], array[randomIndex]] = [
                        array[randomIndex], array[currentIndex]];
                }

                return array;
            }

            shuffle(json);
            setRestaurants(json.slice(0, 9))
        }
        main();
    }, [])
    // useEffect(() => {
    //     async function main() {
    //         const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/restaurants`, {
    //             credentials: 'include'
    //         })
    //         const json = await res.json();
    //         const randomRestaurants: any = []
    //         console.log(json)
    //         // for (let i = 0; i < 9; i++) {
    //         //     let number = getRandomInt(0, json.length)
    //         //     randomRestaurants.push(number)
    //         // }
    //         // console.log(randomRestaurants);

    //         // restaurants.push(json[getRandomInt(0,json.length)].restaurant_photo1)


    //         // setRestaurants(json)
    //         // const randomArray: any = [];
    //         // for (let i = 0; i < 9; i++) {
    //         //     let number = getRandomInt(0, json.length)
    //         //     randomRestaurants.push(number)
    //         //     json[randomRestaurants].push(randomArray)
    //         // }
    //         // setRestaurants(randomArray)
    //         // console.log(randomArray)


    //     }
    //     main();
    // }, [])

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
                        {/* <div>
                            {restaurants.map((randomRestaurants: any) => (
                                <div>
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/${restaurants.restaurant_photo1}`} /></div>))}
                        </div> */}
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