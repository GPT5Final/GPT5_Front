import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { Footer } from '../components/Footer';
import axiosInstance from '../axiosInstance';

const Btn = styled.button`
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #C4C4C4;
    border-style: none;
    width: 100px;
    height: 40px;    
`;
const Box = styled.div`
    cursor: pointer;
`;

function Main() {
    const history = useNavigate();
    const [carouselItems, setCarouselItems] = useState([]);
    const [logIn, setLogIn] = useState(false);
    const [nickname, setNickname] = useState("");
    const [userAuth, setUserAuth] = useState(null);

    useEffect(() => {
        const logInUser = JSON.parse(localStorage.getItem("login"));
        if (logInUser && logInUser.nickname) {
            setLogIn(true);
            setNickname(logInUser.nickname);
            setUserAuth(logInUser.auth);
        }
    }, []);

    const removePTags = (html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const pTags = doc.getElementsByTagName("p");
        for (let i = 0; i < pTags.length; i++) {
            const pTag = pTags[i];
            pTag.outerHTML = pTag.innerHTML;
        }
        return doc.body.innerHTML;
        }

    useEffect(() => {
        const fetchGyms = async () => {
        try {
            const response = await axiosInstance.get("/gymslist", {
            params: {
                nickname: nickname,
            },
            });

            console.log(response.data)
            setCarouselItems(
            response.data.gyms.map((gym) => ({
                ...gym,
                content: removePTags(gym.content),
                isLiked: false,
            }))
                .sort((a, b) => b.love - a.love)
            );
            console.log(response.data.gyms);
        } catch (error) {
            console.error("GYM 데이터를 가져오는데 실패했습니다.", error);
        }
        };

        fetchGyms();
    }, [nickname]);

    const handleGymsClick = () => {
        history('/gyms');
    };    

    const handleGymClick = (id) => {
        history(`/gym/${id}`);
    };

    return (
        <>
            <Header />
            <Container>
                <Row style={{ marginTop: '5vh' }}>
                    <Col style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <h1>GPT-5</h1>
                        <div style={{ fontSize: '1vw' }}>
                            <div>GymPT-5는 대한민국 최대, 최고의 GYMs 플렛폼으로</div>
                            <div>제휴GYM과 회원님들뿐 아니라 가입한 모든 사람들이 소통</div>
                            <div>하며 건강한 생활체육문화 조성을 지향합니다.</div>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',

                        }}>
                            <Btn>개인상담</Btn>
                            <Btn style={{
                                marginLeft: '30px',
                                backgroundColor: '#D9D9D9'
                            }}>제휴상담</Btn>
                        </div>
                    </Col>
                    <Col>
                        <img
                            src="./gpt_logo.png"
                            style={{
                                width: '250px',
                                marginLeft: '10vw'
                            }}
                        />
                    </Col>
                </Row>
                
                <Row style={{
                textAlign: 'center',
                marginTop: '8vh'
                }}>
                <Col onClick={handleGymsClick}><h1>GYMS</h1></Col>
                </Row>
                
                <Row style={{ textAlign: 'center', marginTop: '8vh' }}>
                    {carouselItems.slice(0, 3).map(item => (
                        <Col key={item.id} onClick={() => handleGymClick(item.gSeq)}>
                            <img src={`http://localhost:3000/static/images/${item.firstImage.newfilename}`} style={{ width: '230px', height: '' }} />
                        </Col>
                    ))}
                </Row>
                <Row style={{ textAlign: 'center', marginTop: '8vh' }}>
                    {carouselItems.slice(3, 6).map(item => (
                        <Col key={item.id} onClick={() => handleGymClick(item.gSeq)}>
                            <img src={`http://localhost:3000/static/images/${item.firstImage.newfilename}`} style={{ width: '230px', height: '' }} />
                        </Col>
                    ))}
                </Row>               
                <Row style={{
                    marginTop: '20vh'
                }}>
                    <Col sm={8}><img src="./images.jpg" style={{ width: '500px' }} /></Col>
                    <Col sm={4} style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}> 
                        <h1>COMMUNITY</h1>
                        <div>WORKOUT TOGETHER</div>
                        <Btn style={{ border: '1px solid #C4C4C4', backgroundColor: 'white' }}>DETAIL</Btn></Col>
                </Row>
                <Row style={{
                    marginTop: '20vh'
                }}>
                    <Col sm={4} style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <h1>GUIDE</h1>
                        <div>EVERY INFORMATION YOU NEED TO WORKOUT</div>
                        <Btn style={{ border: '1px solid #C4C4C4', backgroundColor: 'white' }}>DETAIL</Btn>
                    </Col>
                    <Col sm={8}><img src="./me.jpg" style={{ width: '500px' }} /></Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Main;
