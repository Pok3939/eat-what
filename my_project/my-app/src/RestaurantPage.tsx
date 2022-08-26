
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RestaurantPage() {
  return (
    <Container>
      <Row>
        <Col sm={8}>
            <Row>
            <Col sm={12}><img src ='./Food1.jpg'></img></Col>
            <Col sm = {4}><img src ='./Menu1.jpg'></img></Col>
            <Col sm = {4}><img src ='./Food2.jpg'></img></Col>
            <Col sm = {4}><img src ='./Food3.jpg'></img></Col>
            </Row>
        </Col>
        <Col sm={4}>
        <img src ='./restaurant1.jpg'></img>
        <div className='RestaurantName'><h3>The Coffee Academics</h3></div>
        <div className='PriceRange'><b>Price Range:</b>$50 - $100</div>
        <div className='Address'>海港城 Shop 4201K, Level 4, Gateway Arcade, 3-27 Canton Rd, Tsim Sha Tsui</div>
        <div className='GoogleMap'>GoogleMap</div>

        </Col>
      </Row>
      
    </Container>
  );
}

export default RestaurantPage