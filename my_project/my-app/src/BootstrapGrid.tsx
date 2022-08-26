import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ResponsiveAutoExample() {
  return (
    <Container>
      <Row>
        <Col sm><img src ='./huge.jpg'></img></Col>
        <Col sm><img src ='./huge.jpg'></img></Col>
        <Col sm><img src ='./huge.jpg'></img></Col>
      </Row>
      <Row>
        <Col sm><img src ='./huge.jpg'></img></Col>
        <Col sm><img src ='./huge.jpg'></img></Col>
        <Col sm><img src ='./huge.jpg'></img></Col>
      </Row>
      <Row>
        <Col sm><img src ='./huge.jpg'></img></Col>
        <Col sm><img src ='./huge.jpg'></img></Col>
        <Col sm><img src ='./huge.jpg'></img></Col>
      </Row>
      
    </Container>
  );
}

export default ResponsiveAutoExample;