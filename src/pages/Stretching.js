import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Footer } from '../components/Footer';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";


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
const VideoMain = styled.div`
    display: flex;
    justify-content: center;
    border-style: none;
    .tg {
	border-collapse:collapse;
	border-spacing:0;
    width: 700px;
    height: 100px;
    border-style: none;
}
.tg td {
	border-color: #DDDDDD;
	border-style:solid;
	border-width:1px;
	font-family:Arial,sans-serif;
	font-size:14px;
	overflow:hidden;
	padding:10px 5px;
	word-break:normal;
}
.tg th {
	border-color:#DDDDDD;
	border-style:solid;
	border-width:1px;
	font-family:Arial,sans-serif;
	font-size:14px;
	font-weight:normal;
	overflow:hidden;
	padding:10px 5px;
	word-break:normal;
}
.tg .tg-0lax {
	text-align:center;
	vertical-align: center
}
`;

const VideoMainInfo = styled.div`
    display: flex;
    justify-content: center;
    border-style: none;
    .tg {
	border-collapse:collapse;
	border-spacing:0;
    width: 400px;
}
.tg td {
	border-color:#B9B9B9;
	border-style:solid;
	border-width:1px;
	font-family:Arial,sans-serif;
	font-size:14px;
	overflow:hidden;
	padding:10px 5px;
	word-break:normal;
}
.tg th {
	border-color:#B9B9B9;
	border-style:solid;
	border-width:1px;
	font-family:Arial,sans-serif;
	font-size:14px;
	font-weight:normal;
	overflow:hidden;
	padding:10px 5px;
	word-break:normal;
}
.tg .tg-0pky {
	border-color:#B9B9B9;
	text-align:left;
	vertical-align:center
}
.tg .tg-0lax {
	text-align:center;
	vertical-align: center;
}
`;

function Stretching() {

    const [stretching, setStretching] = useState('');

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
                    <Col>
                        <img src="./stretching.png" />
                    </Col>
                </Row>
                <Row style={{ marginTop: '20vh' }}>
                    <Col>
                        <div style={{ color: '#448ACA', textAlign: 'center' }}><h4>Weekly Stretching Schedule</h4></div>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10vh' }}>
                    <Col>
                        <img src="./streching2.png" />
                    </Col>
                </Row>
                <Row style={{ marginTop: '10vh' }}>
                    <Col>
                        <VideoMain >
                            <table className="tg">
                                <thead>
                                    <tr style={{
                                        height: '50px',
                                        backgroundColor: '#448ACA',
                                    }}>
                                        <th className="tg-0lax" colSpan="5" style={{ color: 'white', textAlign: 'center' }}>
                                            스트레칭
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td
                                            className="tg-0lax"
                                            style={{ width: '140px', backgroundColor: `${stretching === '허리' ? '#448ACA' : ''}` }}
                                            onClick={() => {
                                                setStretching('허리');
                                            }}
                                        >
                                            <div><h4>허리</h4></div>
                                            <div>스트레칭</div>
                                        </td>
                                        <td
                                            className="tg-0lax"
                                            style={{ width: '140px', backgroundColor: `${stretching === '하체' ? '#448ACA' : ''}` }}
                                            onClick={() => {
                                                setStretching('하체');
                                            }}
                                        >
                                            <div><h4>하체</h4></div>
                                            <div>스트레칭</div>
                                        </td>
                                        <td className="tg-0lax" style={{ width: '140px' }}></td>
                                        <td
                                            className="tg-0lax"
                                            style={{ width: '140px', backgroundColor: `${stretching === '전신' ? '#448ACA' : ''}` }}
                                            onClick={() => {
                                                setStretching('전신');
                                            }}
                                        >
                                            <div><h4>전신</h4></div>
                                            <div>폼롤러</div>
                                        </td>
                                        <td
                                            className="tg-0lax"
                                            style={{ width: '140px', backgroundColor: `${stretching === '라운드숄더' ? '#448ACA' : ''}` }}
                                            onClick={() => {
                                                setStretching('라운드숄더');
                                            }}
                                        >
                                            <div><h4>라운드숄더</h4></div>
                                            <div>스트레칭</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </VideoMain>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10vh' }}>
                    <Col>
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        />
                    </Col>
                    <Col>
                        <VideoMainInfo>
                            <table class="tg" style={{ backgroundColor: '#DDDDDD' }}>
                                <thead >
                                    <tr style={{ height: '40px' }}>
                                        <th class="tg-0pky" style={{ width: '200px' }}>{`부위 : ${stretching}`}</th>
                                        <th class="tg-0pky">시간: 17.33분</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ height: '40px' }}>
                                        <td class="tg-0pky">추천대상: 운동전, 후 모든분들꼐 추천하는 폼롤러 기본 메뉴얼</td>
                                        <td class="tg-0pky">효과: 전신 S.M.R</td>
                                    </tr>
                                    <tr style={{ height: '50px', backgroundColor: '#448ACA' }}>
                                        <td class="tg-0lax" colspan="2" style={{ color: 'white', textAlign: 'center' }}>운동프로그램</td>
                                    </tr>
                                    <tr style={{ height: '125px' }}>
                                        <td class="tg-0lax" colspan="2" >
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </VideoMainInfo>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Stretching
