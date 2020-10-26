import React, { useState, useEffect } from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

const Catalog = () => {

    const [cat, setCat] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8081/items/I10000,I20000').then(response => response.json()).then(res => {
            console.log(res)
            setCat(res);
        })
    },[]);

    let catList = null;
    catList = cat&&cat.map(el => {
        return (
            <Row key={el.id}>
                <Col xs={6} md={4}>{el.name}</Col>
                <Col xs={6} md={4}>{el.description}</Col>
            </Row>
        );
    })
    return (
        <Container>
            {catList}
        </Container>
    );
}

export default Catalog;