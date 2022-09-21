import { useEffect, useState } from "react";
import Headbar from './Headbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RecordCheck() {
    const [recordchecks, setRecordchecks] = useState<any>([]);
    useEffect(() => {
        async function main() {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/recordcheck`, {
                credentials: 'include'
            })
            const json = await res.json();
            setRecordchecks(json);
            console.log(recordchecks[0])
        }
        main();
    }, [])
    return (

        <><div><Headbar /></div><Container id='recordContainer'>
            <Row>
                <Col sm={6}>
                    <div className='restaurantName1'>
                        {recordchecks.map((recordcheck: string) => (
                            <div className='Name'><b>Name:  </b>{recordchecks.restaurant_name}</div>
                        ))}</div>
                </Col>
                <Col sm={6}>
                    <div className='createTime'></div>
                </Col>
            </Row>
        </Container></>
    )
}

export default RecordCheck