import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import './BootstrapGrid.css'
import RestaurantPage from './RestaurantPage';


function BootstrapGrid() {
    return (
        <Container>
            <BrowserRouter>
                <Row>
                    <Col>
                        <Link to='/restaurantpage1'>
                            <img src='./grid1.jpg' />
                        </Link>
                        <Link to='/restaurantpage2'>
                            <img src='./grid2.jpg' />
                        </Link>
                        <Link to='/restaurantpage3'>
                            <img src='./grid3.jpg' />
                        </Link>
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
            {/* <Routes>
                <Route path ='/restaurantpage1' element ={<RestaurantPage text='1'/>}>
                </Route>
                <Route path ='/restaurantpage2' element ={<RestaurantPage text='2'/>}>
                </Route>
            </Routes> */}
            </BrowserRouter>
            
        </Container>
    );
}

export default BootstrapGrid;