import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import './BootstrapGrid.css'
import RestaurantPage from './RestaurantPage';


function BootstrapGrid() {
let arrays = [
    {id: 1, photo1:"/restaurantpage1", photo2:"./grid1.jpg"},
    {id: 2, photo1:"/restaurantpage2", photo2:"./grid2.jpg"},
    {id: 3, photo1:"/restaurantpage3", photo2:"./grid3.jpg"},
]
    return (
        <Container>
                <Row>
                    <Col>
                    {arrays.map((elem) => (
                    <Link to ={elem.photo1}>
                        <img src ={elem.photo2}/>
                    </Link>
                    ))}
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Link to='/restaurantpage4'>
                            <img src='./grid4.jpg' />
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