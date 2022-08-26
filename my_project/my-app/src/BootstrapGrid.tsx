import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BootstrapGrid.css'

function ResponsiveAutoExample() {
    return (
        <Container>
            <Row>
                <Col>
                    <img src='./grid1.jpg' />
                    <img src='./grid2.jpg' />
                    <img src='./grid3.jpg' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src='./grid4.jpg' />
                    <img src='./grid5.jpg' />
                    <img src='./grid6.jpg' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src='./grid7.jpg' />
                    <img src='./grid8.jpg' />
                    <img src='./grid9.jpg' />
                </Col>
            </Row>

            {/* <Row>
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
      </Row> */}

        </Container>
    );
}

export default ResponsiveAutoExample;