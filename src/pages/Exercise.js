import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Footer } from '../components/Footer';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import { Link } from 'react-router-dom';


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

function Exercise() {

    return (
        <>
            <Header />
            <Container >
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
                <Row style={{ marginTop: '10vh' }}>
                    <Col className="d-flex justify-content-center">
                        <img src="./exer.png" style={{ width: '90%' }} />
                    </Col>
                </Row>
                <Row style={{ marginTop: '10vh' }}>
                    <Col>
                        <div style={{ color: '#FF4C4C', textAlign: 'center' }}><h4>Weekly Exercise Schedule</h4></div>
                    </Col>
                </Row>
                <br/><br/><br/><br/>
                
                <Row>
                    <Col className="d-flex justify-content-center">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="./sexer.png" style={{ width: '500px', maxHeight: '400px', marginRight: '1rem' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <img src="./logo192.png" style={{ maxWidth: '100px', marginBottom: '1rem', margin: 'auto' }} />
                            <div>
                            <h5>근육이 휴식하는 시간, 헬스</h5> <br/>
                            <p style={{ marginBottom: '0.5rem' }}>난이도별로 따라해보세요</p>
                            <p style={{ marginBottom: '0.5rem' }}>지점,회사,집 고객님이 원하는 곳에서 원하는 시간에 근육을 움직임으로써 잠깐의</p>
                            <p style={{ marginBottom: '0.5rem' }}>운동이 여러분의 생활에 활력을 넣어 드립니다.</p>
                            <p style={{ marginBottom: '0.5rem' }}>(회사원/학생/운동전,후/평상 시 피로함을 느끼는 모든분들에게 추천드립니다.)</p>
                            </div>
                        </div>
                        </div>
                    </Col>
                </Row>

                 {/* 복근, 가슴, 팔, 다리, 어깨 버튼 */}
                <Row style={{ marginTop: '10vh' }}>
                    <Col className="d-flex justify-content-left">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ position: 'relative', width: '400px', height: '100px', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '10px' }}>
                            <Link to="/abs">
                                <img src="./초급복근.png" alt="복근 초급" style={{ width: '350px', height: '80px' }} />
                            </Link>
                            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: '2', color: 'white' }}>
                                <h4 style={{ margin: '0' }}>복근 초급</h4>
                            </div>
                        </div>
                        <div style={{ position: 'relative', width: '400px', height: '100px', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '10px' }}>
                            <Link to="/abs">
                                <img src="./가슴 초급.png" alt="가슴 초급" style={{ width: '350px', height: '80px' }} />
                            </Link>
                            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: '2', color: 'white' }}>
                                <h4 style={{ margin: '0' }}>가슴 초급</h4>
                            </div>
                        </div>
                        <div style={{ position: 'relative', width: '400px', height: '100px', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '10px' }}>
                            <Link to="/abs">
                                <img src="./팔 초급.png" alt="팔 초급" style={{ width: '350px', height: '80px' }} />
                            </Link>
                            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: '2', color: 'white' }}>
                                <h4 style={{ margin: '0' }}>팔 초급</h4>
                            </div>
                        </div>
                        <div style={{ position: 'relative', width: '400px', height: '100px', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '10px' }}>
                            <Link to="/abs">
                                <img src="./다리 초급.png" alt="다리 초급" style={{ width: '350px', height: '80px' }} />
                            </Link>
                            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: '2', color: 'white' }}>
                                <h4 style={{ margin: '0' }}>다리 초급</h4>
                            </div>
                        </div>
                        <div style={{ position: 'relative', width: '400px', height: '100px', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '10px' }}>
                            <Link to="/abs">
                                <img src="./등 초급.png" alt="어깨 및 등 초급" style={{ width: '350px', height: '80px' }} />
                            </Link>
                            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: '2', color: 'white' }}>
                                <h4 style={{ margin: '0' }}>어깨 및 등 초급</h4>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                                            
            </Container>
            <Footer />
        </>
    )
}

export default Exercise;
