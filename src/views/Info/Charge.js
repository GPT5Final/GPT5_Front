import React, { useState } from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';
import { Footer } from '../../components/Footer';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CoinSelectBox = styled.div`
    width: 100px;
    height: 150px;
    border-radius: 15px;
    border: 1px solid black;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CoinInputBox = styled.div`
    width: 400px;
    height: 50px;
    border-radius: 15px;
    border: 1px solid black;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: black;
`;

const CoinClickBox = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 15px;
    border: 1px solid black;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
`;

function Charge() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Header />
            <div style={{ marginTop: '3vh', textAlign: 'center' }}><h1>ABOUT PAY</h1></div>
            <div style={{ marginTop: '3vh' }}>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./banner.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./banner.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./banner.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div style={{ backgroundColor: 'black', paddingBottom: '10vh' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '2vh' }}>
                    <CoinSelectBox>
                        <h6>5000 Coin</h6>
                        <div style={{ marginTop: '3vh' }}>5000 won</div>
                    </CoinSelectBox>
                    <CoinSelectBox>
                        <h6>11000 Coin</h6>
                        <div style={{ marginTop: '3vh' }}>10000 won</div>
                    </CoinSelectBox>
                    <CoinSelectBox>
                        <h6>30000 Coin</h6>
                        <div style={{ marginTop: '3vh' }}>28000 won</div>
                    </CoinSelectBox>
                    <CoinSelectBox>
                        <h6>50000 Coin</h6>
                        <div style={{ marginTop: '3vh' }}>45000 won</div>
                    </CoinSelectBox>
                    <CoinSelectBox>
                        <h6>10000 Coin</h6>
                        <div style={{ marginTop: '3vh' }}>88000 won</div>
                    </CoinSelectBox>
                </div>
                <Container style={{ marginTop: '10vh' }}>
                    <Row >
                        <Col>
                            <div>
                                <h3 style={{ color: 'white' }}>Current coing</h3>
                                <CoinInputBox>50000 coin</CoinInputBox>
                            </div>
                            <div style={{ marginTop: '2vh' }}>
                                <h3 style={{ color: 'white' }}>Charge coing</h3>
                                <CoinInputBox>50000 coin</CoinInputBox>
                            </div>
                            <div style={{ marginTop: '2vh' }}>
                                <h3 style={{ color: 'white' }}>After coing</h3>
                                <CoinInputBox>55000 coin</CoinInputBox>
                            </div>
                        </Col>
                        <Col>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '25vh'}}>
                                <CoinClickBox>Charge</CoinClickBox>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer marginTop={'0px'}/>
        </>
    )
}

export default Charge
