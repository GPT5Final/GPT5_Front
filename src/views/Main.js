import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';

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

function Main() {
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
                    <Col><h1>GYMS</h1></Col>
                </Row>
                <Row style={{
                    textAlign: 'center',
                    marginTop: '8vh'
                }}>
                    <Col><img src="./jamsil1.png" style={{ width: '230px', height: '' }} /></Col>
                    <Col><img src="./chanwon.png" style={{ width: '230px' }} /></Col>
                    <Col><img src="./jeju.png" style={{ width: '230px' }} /></Col>
                </Row>
                <Row style={{
                    textAlign: 'center',
                    marginTop: '8vh'
                }}>
                    <Col><img src="./incheon.png" style={{ width: '230px' }} /></Col>
                    <Col><img src="./hanam.png" style={{ width: '230px' }} /></Col>
                    <Col><img src="./anyang.png" style={{ width: '230px' }} /></Col>
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

export default Main
