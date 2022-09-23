import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import './BootstrapGrid.css'
import RestaurantPage from './RestaurantPage';




function BootstrapGrid() {

    const [restaurants, setRestaurants] = useState<any[]>([]);
    let text: any = localStorage.getItem('tickedValue');
    const myArray = text.split(" ");
    var paramName = 'array=';
    var arrayAsString = '?' + paramName + myArray.join('&' + paramName);
    console.log(arrayAsString)
    useEffect(() => {
        async function main() {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/restaurants${arrayAsString}`, {
                credentials: 'include'
            })
            const json = await res.json();
            function shuffle(array: any[]) {
                let currentIndex = array.length, randomIndex;

                while (currentIndex != 0) {

                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;

                    [array[currentIndex], array[randomIndex]] = [
                        array[randomIndex], array[currentIndex]];
                }

                return array;
            }

            shuffle(json);
            setRestaurants(json.slice(0, 9))
        }
        main();
    }, [text])

    return (
        <Container id='gridContainer'>

            {restaurants.map((restaurant: any) => (
                <Link to={`/restaurantpage?id=${restaurant.id}`}>
                    <div className='grid9'>
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/${restaurant.restaurant_photo1}`} /></div>
                </Link>))}

        </Container>
    );
}

export default BootstrapGrid;