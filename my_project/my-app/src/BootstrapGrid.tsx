import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import './BootstrapGrid.css'
import RestaurantPage from './RestaurantPage';
import Button from 'react-bootstrap/Button';
import { Checkbox, CheckboxGroup, defaultTheme, Flex, Provider } from '@adobe/react-spectrum';


function BootstrapGrid() {

    const [restaurants, setRestaurants] = useState<any[]>([]);
    const [dishes, setDishes] = useState<any[]>([]);
    const [selected, setSelected] = useState<any>(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    let text: any = selected
    console.log("TEXT", text);
    // const myArray = text.split(" ");
    var paramName = 'array=';
    var arrayAsString = '?' + paramName + text.join('&' + paramName);
    async function mainGrid() {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dishes/`, {
            credentials: 'include',
        })
        const json = await res.json();
        setDishes(json)
    }
    useEffect(() => {
        mainGrid();


    }, [])
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
        <><Provider theme={defaultTheme}
            colorScheme={selected ? "light" : "dark"}
            height="100%">
            {dishes[0] &&
                <div className='dishChoice'>
                    <CheckboxGroup
                        label="Dishes"
                        defaultValue={["1", "2"]}
                        value={selected}
                        onChange={setSelected}
                    >
                        <Flex direction="row">
                            <Checkbox value={dishes[0].id.toString()}>{dishes[0].text}</Checkbox>
                            <Checkbox value={dishes[1].id.toString()}>{dishes[1].text}</Checkbox>
                            <Checkbox value={dishes[2].id.toString()}>{dishes[2].text}</Checkbox>
                            <Checkbox value={dishes[3].id.toString()}>{dishes[3].text}</Checkbox>
                            <Checkbox value={dishes[4].id.toString()}>{dishes[4].text}</Checkbox>
                            <Checkbox value={dishes[5].id.toString()}>{dishes[5].text}</Checkbox>
                            <Checkbox value={dishes[6].id.toString()}>{dishes[6].text}</Checkbox>
                            <Checkbox value={dishes[7].id.toString()}>{dishes[7].text}</Checkbox>
                            <Checkbox value={dishes[8].id.toString()}>{dishes[8].text}</Checkbox>
                        </Flex>

                    </CheckboxGroup>

                    {/* <div>You have selected: {selected.join(',')}</div> */}
                </div>}
        </Provider>
            {/* <div className='tickBoxButton'>
                <Button onClick={() => {
                    mainGrid()
                }
                }>

                </Button>
            </div> */}
            <Container id='gridContainer'>

                {restaurants.map((restaurant: any) => (
                    <Link to={`/restaurantpage?id=${restaurant.id}`}>
                        <div className='grid9'>
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/${restaurant.restaurant_photo1}`} /></div>
                    </Link>))}

            </Container></>
    );
}

export default BootstrapGrid;
// function BootstrapGrid(
//     //     props:{
//     //     onClick:() =>{}
//     // }
// ) {
//     const [restaurants, setRestaurants] = useState<any[]>([]);
//     //--------//
//     let text: any = localStorage.getItem('tickedValue')
//     const myArray = text.split(" ");
//     //--------//
//     var paramName = 'array=';
//     var arrayAsString = '?' + paramName + myArray.join('&' + paramName);
//     console.log(arrayAsString)
//     useEffect(() => {
//         async function main() {
//             const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/restaurants${arrayAsString}`, {
//                 credentials: 'include'
//             })
//             const json = await res.json();
//             function shuffle(array: any[]) {
//                 let currentIndex = array.length, randomIndex;

//                 while (currentIndex != 0) {

//                     randomIndex = Math.floor(Math.random() * currentIndex);
//                     currentIndex--;

//                     [array[currentIndex], array[randomIndex]] = [
//                         array[randomIndex], array[currentIndex]];
//                 }

//                 return array;
//             }

//             shuffle(json);
//             setRestaurants(json.slice(0, 9))
//         }
//         main();
//     }, [text])

//     return (
//         <Container id='gridContainer'>

//             {restaurants.map((restaurant: any) => (
//                 <Link to={`/restaurantpage?id=${restaurant.id}`}>
//                     <div className='grid9'>
//                         <img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/${restaurant.restaurant_photo1}`} /></div>
//                 </Link>))}

//         </Container>
//     );
// }

// export default BootstrapGrid;