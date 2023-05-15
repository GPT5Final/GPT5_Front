import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled  from 'styled-components';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
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
    const [topTrainer, setTopTrainer] = useState(null);
    const [topTrainerImages, setTopTrainerImages] = useState([]);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const removePTags = (html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const pTags = doc.getElementsByTagName("p");
        for (let i = 0; i < pTags.length; i++) {
          const pTag = pTags[i];
          pTag.outerHTML = pTag.innerHTML; // <p> 태그를 제거하고 내용만 남깁니다
        }
        return doc.body.innerHTML;
      }

    useEffect(() => {
        const fetchTopTrainer = async () => {
        try {
            const response = await axios.get("http://localhost:3000/topTrainer");
            const trainerData = response.data;
            trainerData.content = removePTags(trainerData.content);
            setTopTrainer(trainerData);
            console.log(response.data);
            
        } catch (error) {
            console.error("가장 좋아요가 많은 트레이너 정보를 가져오는데 실패했습니다.", error);
        }
        };
    
    fetchTopTrainer();
    }, []);

    const history = useNavigate();
    const MoreClick = () => {
        history('/trainers');
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
                            style={{ width: '500px', height: '400px' }}
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
                            style={{ width: '500px', height: '400px' }}
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
                            style={{ width: '500px', height: '400px' }}
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
            {topTrainer && (
                <Container style={{ marginTop: '10vh'}}>
                    <Row>
                    <Col sm={8} style={{ textAlign: 'center' }}>
                    {topTrainer.firstImage && (
                        <img
                        src={`http://localhost:3000/static/images/${topTrainer.firstImage.newfilename}`} // newfilename을 사용하여 이미지 URL을 만듭니다.
                        style={{ width: '30vw' }}
                        />
                    )}
                    </Col>
                    <Col sm={4}>
                        <h1>TRAINER</h1>
                        <br></br>
                        <br></br>
                        <div>CHIEF of Professional Personal Trainer</div>
                        <div>이름 : {topTrainer.title}</div>                        
                        <div>경력 : {topTrainer.content}</div>
                        <div>수상 : 김계란리프팅대회 우승</div>
                        <br></br>
                        <br></br>
                        <Btn onClick={MoreClick}>MORE</Btn>
                    </Col>
                    </Row>
                </Container>
                )}
            <Footer />
        </>
    )
}

export default Gyms;