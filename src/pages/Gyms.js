import React, { useState } from 'react';
import styled  from 'styled-components';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Btn = styled.button`
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: white;
    border-style: none;
    width: 100px;
    height: 40px;
    border: 1px solid #C4C4C4;
`;


const Gyms = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Header />
            <div style={{ textAlign: 'center', marginTop: '3vh' }}>
                <Carousel >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./figure.unit-image.png"
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
                            src="./figure.unit-image.png"
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
                            src="./figure.unit-image.png"
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
            <div style={{ marginTop: '10vh'}}>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./jamsil2.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./jamsil2.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./jamsil2.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div style={{ textAlign: 'center'}}>
                <img src="./jamsil_info.png"/>
            </div>
            <Container style={{ marginTop: '10vh'}}>
                <Row>
                    <Col sm={8} style={{ textAlign: 'center'}}>
                        <img src="./fighter.jpg" style={{ width: '30vw'}}/>
                    </Col>
                    <Col sm={4}>
                        <h1>TRAINER</h1>
                        <br></br>
                        <br></br>
                        <div>CHIEF of Professional Personal Trainer</div>
                        <div>이름 : 야전삽</div>
                        <div>자격증 : 생활체육지도자 2급 등 다수</div>
                        <div>경력 : UDT</div>
                        <div>수상 : 김계란리프팅대회 우승</div>
                        <br></br>
                        <br></br>
                        <Btn >MORE</Btn>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Gyms;