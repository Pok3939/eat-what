import { useEffect, useState } from "react";
import Headbar from './Headbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAppSelector } from "./store";

function RecordCheck() {
    const [recordchecks, setRecordchecks] = useState<any>([]);
    const token = useAppSelector(state => state.auth.token)
    useEffect(() => {
        async function main() {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/recordcheck`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                credentials: 'include'
            })
            const json = await res.json();
            setRecordchecks(json);
            console.log(recordchecks[0])
        }
        main();
    }, [])
    return (

        <><div><Headbar /></div> <Container id='recordContainer'>
            <Row>
                {recordchecks[0] && <Col sm={6}>
                    <div className='restaurantName1'>
                        {recordchecks.map((recordcheck: any) => (
                            <div className='Name'><b>餐廳: </b>{recordcheck.restaurant_name}</div>
                        ))}</div>
                </Col>}
                {recordchecks[0] && <Col sm={6}>
                    <div className='restaurantTime1'>
                        {recordchecks.map((recordcheck: any) => (
                            <div className='createTime'><b>到訪日期: </b>{recordcheck.created_at} </div>
                        ))}</div>
                </Col>}
            </Row>
        </Container></>
    )
}

export default RecordCheck