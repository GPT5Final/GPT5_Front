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
    width: 1100px;
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
	padding:1 0px 5px;
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
    flex-direction: column; 
    border-style: none;
    .tg {
	border-collapse:collapse;
	border-spacing:0;
    width: 530px;
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
mrgin-top: 20px;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 160px;
`;

const VideoPlayer = styled(Player)`
  margin-top: 20px; 
  
`;

function Stretching() {

    const [stretching, setStretching] = useState('허리');
    

    const stretchingData = {
        허리: {
            time: '9분',
            recommendedAudience: '타이트한복직근 / 허리통증',
            effects: '허리 통증 완화',
            programs: [
              '01 허리',
              '02 허리 오른쪽1',
              '03 허리 왼쪽1',
              '04 허리 오른쪽2',
              '05 허리 왼쪽2',
              '06 허리 오른쪽',
              '07 허리 왼쪽',
              '08 허리 좌우',
              '09 허리3'
              // 추가
            ],
          },
          하체: {
            time: '21.33분',
            recommendedAudience: '하체 유연성을 원하는 분들',
            effects: '하체 유연성',
            programs: [
              '01 대둔근 오른쪽',
              '02 대둔근 왼쪽',
              '03 대둔근 좌우',
              '04 대퇴사두근 오른쪽',
              '05 대퇴사두근 왼쪽',
              '06 대퇴근막장근 오른쪽',
              '07 대퇴근막장근 왼쪽',
              '08 내전근',
              // 추가
            ],
          },
          목: {
            time: '8.17분',
            recommendedAudience: '사무직 / 학생',
            effects: '자세 개선',
            programs: [
              '01 목 후면',
              '02 목 전면',
              '03 목 오른쪽2',
              '04 목 왼쪽2',
              '05 목 흉쇄유돌근 오른쪽',
              '06 목 흉쇄유돌근 왼쪽',
              '07 목 / 폼롤러',
              // 추가
            ],
          },
          전신: {
            time: '5.83분',
            recommendedAudience: '전신 스트레칭을 원하는 분들',
            effects: '전신 마사지 및 스트레칭',
            programs: [
              '01 종아리 왼쪽 / 폼롤러',
              '02 종아리 오른쪽 / 폼롤러',
              '03 햄스트링 오른쪽 / 폼롤러',
              '04 햄스트링 왼쪽 / 폼롤러',
              '05 대퇴사두근 / 폼롤러',
              '06 대퇴근막장근 왼쪽 / 폼롤러',
              '07 대퇴근막장근 오른쪽 / 폼롤러',
              '08 둔근 왼쪽 / 폼롤러',
              '09 둔근 오른쪽 / 폼롤러',
              '10 등 / 폼롤러',
              '11 광배근 오른쪽 / 폼롤러',
              '12 광배근 왼쪽 / 폼롤러',
              '13 목 / 폼롤러',
              '14 가슴2 / 폼롤러',
              // 추가
            ],
          },
          햄스트링: {
            time: '10분',
            recommendedAudience: '허리통증 / 사무직',
            effects: '타이트한 햄스트링 이완',
            programs: [
              '01 햄스트링 오른쪽',
              '02 햄스트링 왼쪽',
              '03 햄스트링',
              '04 햄스트링 좌우',
              '05 햄스트링 왼쪽2',
              '06 햄스트링 오른쪽2',
              '07 햄스트링 왼쪽3',
              '08 햄스트링 오른쪽3',
              '09 햄스트링 왼쪽2 / 폼롤러',
              '10 햄스트링 오른쪽2 / 폼롤러',
              // 추가
            ],
          },
        };
      
        const stretchingInfo = stretchingData[stretching];
        const [selectedProgram, setSelectedProgram] = useState('01 허리');
        

        useEffect(() => {
          setSelectedProgram('01 허리');
        }, []);

        

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
                        <img src="./stretching.png" style={{ width: '90%' }} />
                    </Col>
                </Row>
                <Row style={{ marginTop: '20vh' }}>
                    <Col>
                        <div style={{ color: '#448ACA', textAlign: 'center' }}><h4>Weekly Stretching Schedule</h4></div>
                    </Col>
                </Row>
                <br/><br/><br/><br/>

                <Row>
                    <Col className="d-flex justify-content-center">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="./Stretching2.png" style={{ width: '550px', maxHeight: '400px', marginRight: '1rem' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <img src="./pentagon.png" style={{ maxWidth: '150px', marginBottom: '1rem', margin: 'auto' }} />
                            <div><br/>
                            <h5>근육이 휴식하는 시간, 스트레칭</h5> <br/>
                            <p style={{ marginBottom: '0.5rem' }}>영상을 보며 매일 하루의 습관으로 스트레칭을 따라해보세요.</p>
                            <p style={{ marginBottom: '0.5rem' }}>지점,회사,집 고객님이 원하는 곳에서 원하는 시간에 근육을 풀어줌으로써 잠깐의</p>
                            <p style={{ marginBottom: '0.5rem' }}>스트레칭이 회원님들의 생활에 활력을 넣어드립니다.</p>
                            <p style={{ marginBottom: '0.5rem' }}>(회사원/학생/운동전, 후/평상 시 피로함을 느끼는 모든분들에게 추천드립니다.)</p>
                            </div>
                        </div>
                        </div>
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
                                        <th className="tg-0lax" colSpan="5" style={{ color: 'white', textAlign: 'center', fontSize: '25px' }}>
                                            <b>스트레칭</b>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td
                                            className="tg-0lax"
                                            style={{ width: '140px', backgroundColor: `${stretching === '허리' ? '#448ACA' : ''}`, color: `${stretching === '허리' ? 'white' : ''}` }}
                                            onClick={() => {
                                                setStretching('허리');
                                            }}
                                        >
                                            <div><h4><b>허리</b></h4></div>
                                            <div><b>스트레칭</b></div>
                                        </td>
                                        <td
                                            className="tg-0lax"
                                            style={{ width: '140px', backgroundColor: `${stretching === '하체' ? '#448ACA' : ''}`, color: `${stretching === '하체' ? 'white' : ''}` }}
                                            onClick={() => {
                                                setStretching('하체');
                                            }}
                                        >
                                            <div><h4><b>하체</b></h4></div>
                                            <div><b>스트레칭</b></div>
                                        </td>
                                        <td
                                            className="tg-0lax"
                                            style={{ width: '140px', backgroundColor: `${stretching === '목' ? '#448ACA' : ''}`, color: `${stretching === '목' ? 'white' : ''}` }}
                                            onClick={() => {
                                                setStretching('목');
                                            }}
                                        >
                                            <div><h4><b>목</b></h4></div>
                                            <div><b>스트레칭</b></div>
                                        </td>                                        
                                        <td
                                            className="tg-0lax"
                                            style={{ width: '140px', backgroundColor: `${stretching === '전신' ? '#448ACA' : ''}`, color: `${stretching === '전신' ? 'white' : ''}` }}
                                            onClick={() => {
                                                setStretching('전신');
                                            }}
                                        >
                                            <div><h4><b>전신</b></h4></div>
                                            <div><b>폼롤러</b></div>
                                        </td>
                                        <td
                                            className="tg-0lax"
                                            style={{ width: '140px', backgroundColor: `${stretching === '햄스트링' ? '#448ACA' : ''}`, color: `${stretching === '라운드숄더' ? 'white' : ''}` }}
                                            onClick={() => {
                                                setStretching('햄스트링');
                                            }}
                                        >
                                            <div><h4><b>햄스트링</b></h4></div>
                                            <div><b>스트레칭</b></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </VideoMain>
                    </Col>
                </Row>             
                <Col> 
                <Row style={{ marginTop: '10vh' }}>
                <VideoMainInfo>
    <div style={{ display: "flex" }}>
        <div align="left">
            <table className="tg">
                <thead>
                <h1 style={{ color: "#ffffff", backgroundColor: "#448ACA", margin: "1%", textAlign:"center"}}>GPT5</h1>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <VideoContainer style={{ width: "100%", height: "100%" }}>
                                {selectedProgram === "01 허리" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/허리/허리.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "02 허리 오른쪽1" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/허리/허리 오른쪽1.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "03 허리 왼쪽1" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/허리/허리 왼쪽1.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "04 허리 오른쪽2" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/허리/허리 오른쪽2.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "05 허리 왼쪽2" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/허리/허리 왼쪽2.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "06 허리 오른쪽" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/허리/허리 오른쪽.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "07 허리 왼쪽" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/허리/허리 왼쪽.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "08 허리 좌우" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/허리/허리 좌우.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "09 허리3" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/허리/허리3.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {/* 여기부터 하체영상 */}
                                {selectedProgram === "01 대둔근 오른쪽" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/하체/대둔근 오른쪽.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "02 대둔근 왼쪽" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/하체/대둔근 왼쪽.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "03 대둔근 좌우" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/하체/대둔근 좌우.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "04 대퇴사두근 오른쪽" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/하체/대퇴사두근 오른쪽.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "05 대퇴사두근 왼쪽" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/하체/대퇴사두근 왼쪽.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "06 대퇴근막장근 오른쪽" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/하체/대퇴근막장근 오른쪽.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "07 대퇴근막장근 왼쪽" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/하체/대퇴근막장근 왼쪽.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "08 내전근" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/하체/내전근.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {/* 여기부터 목 영상 */}
                                {selectedProgram === "01 목 후면" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/목/목 후면.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "02 목 전면" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/목/목 전면.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "03 목 오른쪽2" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/목/목 오른쪽2.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "04 목 왼쪽2" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/목/목 왼쪽2.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "05 목 흉쇄유돌근 오른쪽" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/목/흉쇄유돌근 오른쪽.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "06 목 흉쇄유돌근 왼쪽" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/목/흉쇄유돌근 왼쪽.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "07 목 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/목/목_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {/* 여기부터 전신 영상 */}
                                {selectedProgram === "01 종아리 왼쪽 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/전신/종아리 왼쪽_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "02 종아리 오른쪽 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/전신/종아리 오른쪽_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "03 햄스트링 오른쪽 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/전신/햄스트링 오른쪽_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "04 햄스트링 왼쪽 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/전신/햄스트링 왼쪽_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "05 대퇴사두근 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/전신/대퇴사두근_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "06 대퇴근막장근 왼쪽 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/전신/대퇴근막장근 왼쪽_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "07 대퇴근막장근 오른쪽 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/전신/대퇴근막장근 오른쪽_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "08 둔근 왼쪽 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/전신/둔근 왼쪽_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "09 둔근 오른쪽 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/전신/둔근 오른쪽_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "10 등 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/전신/등_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "11 광배근 오른쪽 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/전신/광배근 오른쪽_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "12 광배근 왼쪽 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/전신/광배근 왼쪽_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "13 목 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/전신/목_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "14 가슴2 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/전신/가슴2_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {/* 여기부터 햄스트링 영상 */}
                                {selectedProgram === "01 햄스트링 오른쪽" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/햄스트링/햄스트링 오른쪽.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "02 햄스트링 왼쪽" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/햄스트링/햄스트링 왼쪽.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "03 햄스트링" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/햄스트링/햄스트링.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "04 햄스트링 좌우" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/햄스트링/햄스트링 좌우.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "05 햄스트링 왼쪽2" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/햄스트링/햄스트링 왼쪽2.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "06 햄스트링 오른쪽2" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/햄스트링/햄스트링 오른쪽2.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "07 햄스트링 왼쪽3" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/햄스트링/햄스트링 왼쪽3.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "08 햄스트링 오른쪽3" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/햄스트링/햄스트링 오른쪽3.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "09 햄스트링 왼쪽2 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/햄스트링/햄스트링 왼쪽2_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {selectedProgram === "10 햄스트링 오른쪽2 / 폼롤러" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/햄스트링/햄스트링 오른쪽2_폼롤러.mp4"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                )}
                                {/* 추가영상 */}
                            </VideoContainer>
                            {selectedProgram && (
                <div style={{ marginTop: "10px", height: "110px" }}>
                    {/* 허리 */}
                    {selectedProgram === "01 허리" && <span><b>스트레칭 부위 :</b> 복직근/외,내복사근/다열근 <br/> <b>추천대상 :</b> 복근이 타이트한분/책상앞에서 많은 시간을 보내시는분 <br/> <b>주의사항 :</b> 허리를 과도하게 아치를 만들시 디스크,척추관절의끼임등이 발생할수 있으므로 본인 가동범위에 맞춰 진행한다</span>}
                    {selectedProgram === "02 허리 오른쪽1" && <span><b>스트레칭 부위 :</b> 복직근/외,내복사근 <br/> <b>추천대상 :</b> 복근이 타이트한분/책상앞에서 많은 시간을 보내시는분 <br/> <b>주의사항 :</b> 허리를 과도하게 아치를 만들거나 틀어주게되면 디스크,척추관절의끼임등이 발생할수 있으므로 본인 가동범위에 맞춰 진행한다</span>}
                    {selectedProgram === "03 허리 왼쪽1" && <span><b>스트레칭 부위 :</b> 복직근/외,내복사근 <br/> <b>추천대상 :</b> 복근이 타이트한분/책상앞에서 많은 시간을 보내시는분 <br/> <b>주의사항 :</b> 허리를 과도하게 아치를 만들거나 틀어주게되면 디스크,척추관절의끼임등이 발생할수 있으므로 본인 가동범위에 맞춰 진행한다</span>}
                    {selectedProgram === "04 허리 오른쪽2" && <span><b>스트레칭 부위 :</b> 복직근/외,내복사근/다열근 <br/> <b>추천대상 :</b> 복근이 타이트한분/책상앞에서 많은 시간을 보내시는분 <br/> <b>주의사항 :</b> 허리를 과도하게 틀어주게되면 디스크,척추관절의끼임등이 발생할수 있으므로 본인 가동범위에 맞춰 진행한다</span>}
                    {selectedProgram === "05 허리 왼쪽2" && <span><b>스트레칭 부위 :</b> 복직근/외,내복사근/다열근 <br/> <b>추천대상 :</b> 복근이 타이트한분/책상앞에서 많은 시간을 보내시는분 <br/> <b>주의사항 :</b> 허리를 과도하게 틀어주게되면 디스크,척추관절의끼임등이 발생할수 있으므로 본인 가동범위에 맞춰 진행한다</span>}
                    {selectedProgram === "06 허리 오른쪽" && <span><b>스트레칭 부위 :</b> 복직근/외,내복사근/다열근 <br/> <b>추천대상 :</b> 복근이 타이트한분/책상앞에서 많은 시간을 보내시는분 <br/> <b>주의사항 :</b> 무릎이 굽혀지지않도록 한다. 허리를 과도하게 숙이게되면 디스크,척추관절의끼임등이 발생할수 있으므로 본인 가동범위에 맞춰 진행한다</span>}
                    {selectedProgram === "07 허리 왼쪽" && <span><b>스트레칭 부위 :</b> 복직근/외,내복사근/다열근 <br/> <b>추천대상 :</b> 복근이 타이트한분/책상앞에서 많은 시간을 보내시는분 <br/> <b>주의사항 :</b> 무릎이 굽혀지지않도록 한다. 허리를 과도하게 숙이게되면 디스크,척추관절의끼임등이 발생할수 있으므로 본인 가동범위에 맞춰 진행한다</span>}
                    {selectedProgram === "08 허리 좌우" && <span><b>스트레칭 부위 :</b> 복직근/외,내복사근/다열근 <br/> <b>추천대상 :</b> 복근이 타이트한분/책상앞에서 많은 시간을 보내시는분 <br/> <b>주의사항 :</b> 옆구리쪽이 살짝 당길때까지 상체를 이동시켜준다. / 본인 가동범위에 맞춰 진행한다.</span>}
                    {selectedProgram === "09 허리3" && <span><b>스트레칭 부위 :</b> 복직근/외,내복사근/다열근 <br/> <b>추천대상 :</b> 복근이 타이트한분/책상앞에서 많은 시간을 보내시는분 <br/> <b>주의사항 :</b> 허리를 과도하게 아치를 만들시 디스크,척추관절의끼임등이 발생할수 있으므로 본인 가동범위에 맞춰 진행한다</span>}
                    {/* 하체 */}
                    {selectedProgram === "01 대둔근 오른쪽" && <span><b>스트레칭 부위 :</b> 대둔근/반건양근/반막양근/대퇴이두근 <br/> <b>추천대상 :</b> 등 하부와 골반 또는 엉덩이에 통증이 있으신분/골반이 틀어진분 <br/> <b>주의사항 :</b> 다리를 몸통쪽으로 밀착시켜줄때 골반이 흔들리지 않도록 천천히 당겨준다.</span>}
                    {selectedProgram === "02 대둔근 왼쪽" && <span><b>스트레칭 부위 :</b> 대둔근/반건양근/반막양근/대퇴이두근 <br/> <b>추천대상 :</b> 등 하부와 골반 또는 엉덩이에 통증이 있으신분/골반이 틀어진분 <br/> <b>주의사항 :</b> 다리를 몸통쪽으로 밀착시켜줄때 골반이 흔들리지 않도록 천천히 당겨준다.</span>}
                    {selectedProgram === "03 대둔근 좌우" && <span><b>스트레칭 부위 :</b> 대둔근/반건양근/반막양근/대퇴이두근 <br/> <b>추천대상 :</b> 등 하부와 골반 또는 엉덩이에 통증이 있으신분/골반이 틀어진분 <br/> <b>주의사항 :</b> 무릎을 최대한 몸쪽으로 당겨주고 몸통은 최대한 꼿꼿하게 고정시킨 상태에서 수행해준다.다리를 번갈아 가면서 수행해준다.</span>}
                    {selectedProgram === "04 대퇴사두근 오른쪽" && <span><b>스트레칭 부위 :</b> 장요근/대퇴사두근/장골근 <br/> <b>추천대상 :</b> 허리통증 있으신분/신체 비대칭 있으신분 <br/> <b>주의사항 :</b> 체중을 이동할때 상체가 굽혀지지 않도록 한다./무릎이 안좋으시면 무릎에 수건을 깔고 수행한다.</span>}
                    {selectedProgram === "05 대퇴사두근 왼쪽" && <span><b>스트레칭 부위 :</b> 장요근/대퇴사두근/장골근 <br/> <b>추천대상 :</b> 허리통증 있으신분/신체 비대칭 있으신분 <br/> <b>주의사항 :</b> 체중을 이동할때 상체가 굽혀지지 않도록 한다./무릎이 안좋으시면 무릎에 수건을 깔고 수행한다.</span>}
                    {selectedProgram === "06 대퇴근막장근 오른쪽" && <span><b>스트레칭 부위 :</b> 대퇴근막장근 <br/> <b>추천대상 :</b> 고관절 통증/무릎 통증 있으신분 <br/> <b>주의사항 :</b> 옆으로 누웠을때 몸이 일직선이 되도록 해야한다./스트레칭 하는 쪽 다리는 과도하게 뒤로 넘기지 말아야한다.</span>}
                    {selectedProgram === "07 대퇴근막장근 왼쪽" && <span><b>스트레칭 부위 :</b> 대퇴근막장근 <br/> <b>추천대상 :</b> 고관절 통증/무릎 통증 있으신분 <br/> <b>주의사항 :</b> 옆으로 누웠을때 몸이 일직선이 되도록 해야한다./스트레칭 하는 쪽 다리는 과도하게 뒤로 넘기지 말아야한다.</span>}
                    {selectedProgram === "08 내전근" && <span><b>스트레칭 부위 :</b> 박근/치골근/중부 봉공근/하부 축추기립근 <br/> <b>추천대상 :</b> 하체근육을 많이 사용하는분 <br/> <b>주의사항 :</b> 발뒤꿈치를 최대한 몸쪽으로 당겨준상태에서 수행해줘야한다./본인 가동범위보다 과도하게 무릎을 바닥에 내리지 않도록한다.</span>}
                    {/* 목 */}
                    {selectedProgram === "01 목 후면" && <span><b>스트레칭 부위 :</b> 상승모근/사각근/두판상근/두최상근 <br/> <b>추천대상 :</b> 컴퓨터를 오래하시는분/거북목이신분/어깨가 자주 뭉치시는분 <br/> <b>주의사항 :</b> 스트레칭중에 어깨를 구부리지않도록한다/목을 가능한 편 상태를 유지한다/턱이 가능한 가슴의 제일 아래 지점에 닿도록 한다.</span>}
                    {selectedProgram === "02 목 전면" && <span><b>스트레칭 부위 :</b> 흉쇄유돌근/사각근/두반극근/두판상근 <br/> <b>추천대상 :</b> 컴퓨터를 오래하시는분/거북목이신분 <br/> <b>주의사항 :</b> 어깨를 구부려 스트레칭 효과를 감소시키지 않도록 한다./턱을 가능한 한 뒤로 멀리 가져가도록 한다.</span>}
                    {selectedProgram === "03 목 오른쪽2" && <span><b>스트레칭 부위 :</b> 상승모근/흉쇄유돌근/사각근/두판상근 <br/> <b>추천대상 :</b> 컴퓨터를 오래하시는분/거북목이신분/어깨가 자주 뭉치시는분 <br/> <b>주의사항 :</b> 서서 수행하는거보단 앉아서 수행할시 더욱 효과적</span>}
                    {selectedProgram === "04 목 왼쪽2" && <span><b>스트레칭 부위 :</b> 상승모근/흉쇄유돌근/사각근/두판상근 <br/> <b>추천대상 :</b> 컴퓨터를 오래하시는분/거북목이신분/어깨가 자주 뭉치시는분 <br/> <b>주의사항 :</b> 서서 수행하는거보단 앉아서 수행할시 더욱 효과적</span>}
                    {selectedProgram === "05 목 흉쇄유돌근 오른쪽" && <span><b>스트레칭 부위 :</b> 흉쇄유돌근/두최장근/두반극근/두판상근 <br/> <b>추천대상 :</b> 거북목이신분/두통있으신분 <br/> <b>주의사항 :</b> 몸통이 함께 돌아가지않도록하고 시원하다는 느낌이 들수있는 강도로 진행 / 서서 수행하는거보다 앉아서 수행할때 더 효과적</span>}
                    {selectedProgram === "06 목 흉쇄유돌근 왼쪽" && <span><b>스트레칭 부위 :</b> 흉쇄유돌근/두최장근/두반극근/두판상근 <br/> <b>추천대상 :</b> 거북목이신분/두통있으신분 <br/> <b>주의사항 :</b> 몸통이 함께 돌아가지않도록하고 시원하다는 느낌이 들수있는 강도로 진행 / 서서 수행하는거보다 앉아서 수행할때 더 효과적</span>}
                    {selectedProgram === "07 목 / 폼롤러" && <span><b>스트레칭 부위 :</b> 후두하근/경판상근 <br/> <b>추천대상 :</b> 장시간 고개를 숙이고 계신분/사무직/일자목등등 목의 피로를 느끼는 분들 <br/> <b>주의사항 :</b> 머리와 목이 이어지는 부분로 마사지가 이루어 지며, 압통점에서 가볍게 호흡을 조절하며 강도를 조절하며 진행한다.</span>}
                    {/* 전신 */}
                    {selectedProgram === "01 종아리 왼쪽 / 폼롤러" && <span><b>스트레칭 부위 :</b> 비복근/가지미근 <br/> <b>추천대상 :</b> 장시간 서있는 사람/종아리 혈액순환이 원활하지 못한사람 <br/> <b>주의사항 :</b> 압통점에서 기본적인 마사지가 이루어지며 무게가 가벼울떄 반대편발을 종아리 위에 올려둔 상태에서 강도를조절하며 진행한다</span>}
                    {selectedProgram === "02 종아리 오른쪽 / 폼롤러" && <span><b>스트레칭 부위 :</b> 비복근/가지미근 <br/> <b>추천대상 :</b> 장시간 서있는 사람/종아리 혈액순환이 원활하지 못한사람 <br/> <b>주의사항 :</b> 압통점에서 기본적인 마사지가 이루어지며 무게가 가벼울떄 반대편발을 종아리 위에 올려둔 상태에서 강도를조절하며 진행한다</span>}
                    {selectedProgram === "03 햄스트링 오른쪽 / 폼롤러" && <span><b>스트레칭 부위 :</b> 햄스트링 <br/> <b>추천대상 :</b> 후방경사/오래앉아있는분/근육이 가동성이 짧으신분 <br/> <b>주의사항 :</b> 손목으로 상체의 무게를 일부분 지탱하고 있는 자세로 손목이 안좋으신분들은 팔꿈치로 상체를 지지한 상태에서 진행한다. 폼롤러의 기본이 되는 롤링을 기본으로 압통점이 부위를 위주로 진행한다.</span>}
                    {selectedProgram === "04 햄스트링 왼쪽 / 폼롤러" && <span><b>스트레칭 부위 :</b> 햄스트링 <br/> <b>추천대상 :</b> 후방경사/오래앉아있는분/근육이 가동성이 짧으신분 <br/> <b>주의사항 :</b> 손목으로 상체의 무게를 일부분 지탱하고 있는 자세로 손목이 안좋으신분들은 팔꿈치로 상체를 지지한 상태에서 진행한다. 폼롤러의 기본이 되는 롤링을 기본으로 압통점이 부위를 위주로 진행한다.</span>}
                    {selectedProgram === "05 대퇴사두근 / 폼롤러" && <span><b>스트레칭 부위 :</b> 대퇴사두근 <br/> <b>추천대상 :</b> 전반경사/장시간 앉아 있는분들 <br/> <b>주의사항 :</b> 마사지 진행시 허리가 과도하게 아치형태가 되지 않도록 유도하며 압통점을 중점으로 진행하며 압통점에서 무릎을 구부리고 폄을 5회 이상반복함으로써 허벅지 전면근육군을 좀더 효율적으로 마사지 할수 있다.</span>}
                    {selectedProgram === "06 대퇴근막장근 왼쪽 / 폼롤러" && <span><b>스트레칭 부위 :</b> 대퇴근막장근 <br/> <b>추천대상 :</b> 앉은자세가 안좋으신분들(다리꼬기/양반다리등등)/장시간 앉아 계신분들 <br/> <b>주의사항 :</b> 일반적으로 바지의 주머니 위치가 대퇴근막장근의 위치이며 마사지를 진행하는 부위의 반대편 발을 이용해 롤링을 진행하며 강도를 조절한다.</span>}
                    {selectedProgram === "07 대퇴근막장근 오른쪽 / 폼롤러" && <span><b>스트레칭 부위 :</b> 대퇴근막장근 <br/> <b>추천대상 :</b> 앉은자세가 안좋으신분들(다리꼬기/양반다리등등)/장시간 앉아 계신분들 <br/> <b>주의사항 :</b> 일반적으로 바지의 주머니 위치가 대퇴근막장근의 위치이며 마사지를 진행하는 부위의 반대편 발을 이용해 롤링을 진행하며 강도를 조절한다.</span>}
                    {selectedProgram === "08 둔근 왼쪽 / 폼롤러" && <span><b>스트레칭 부위 :</b> 대둔근/중둔근/이상근 <br/> <b>추천대상 :</b> 앉은자세가 안좋으신분들(다리꼬기/양반다리등등)/장시간 앉아 계신분들/골반의 불균형이 있으신분들 <br/> <b>주의사항 :</b> 대둔근/중둔근은 일반적으로 약해지는 근육으로 마사지를 진행하며 활성화 시킨다는 목적으로 진행 하며, 이상근을 집중적으로 마사지 한다. 이상근의 위치는 엉덩이주사를 맞는 위치와 동일하다.</span>}
                    {selectedProgram === "09 둔근 오른쪽 / 폼롤러" && <span><b>스트레칭 부위 :</b> 대둔근/중둔근/이상근 <br/> <b>추천대상 :</b> 앉은자세가 안좋으신분들(다리꼬기/양반다리등등)/장시간 앉아 계신분들/골반의 불균형이 있으신분들 <br/> <b>주의사항 :</b> 대둔근/중둔근은 일반적으로 약해지는 근육으로 마사지를 진행하며 활성화 시킨다는 목적으로 진행 하며, 이상근을 집중적으로 마사지 한다. 이상근의 위치는 엉덩이주사를 맞는 위치와 동일하다.</span>}
                    {selectedProgram === "10 등 / 폼롤러" && <span><b>스트레칭 부위 :</b> 중,하승모근/등근육의 전반적으로 진행 <br/> <b>추천대상 :</b> 상체자세가 안좋으신분/사무직/등에 피로감을 느끼시는 분들 <br/> <b>주의사항 :</b> 등의 폼롤러 마사지 진행시 골반을 들어 강도를 조절하며, 허리를 과도한 아치형태가 나오지 않게 완곡상태를 유지한상태에서 마사지를 진행하고 목의 피로감을 느끼는 분들은 두손으로 머리를 지탱한상태에서 마사지를 진행한다.</span>}
                    {selectedProgram === "11 광배근 오른쪽 / 폼롤러" && <span><b>스트레칭 부위 :</b> 광배근  <br/> <b>추천대상 :</b> 라운드숄더/사무직/학생/어깨관절을 사용하는 운동을 하기전 <br/> <b>주의사항 :</b> 광배근 마사지시 갈비뼈에 무게가 실리지 않게 위치를 잡아줘야 하며 몸통을 뒷편을 기울여 100~110도의 각도를 유지한 상태해서 롤링을 진행하는 것이 효율적이다.</span>}
                    {selectedProgram === "12 광배근 왼쪽 / 폼롤러" && <span><b>스트레칭 부위 :</b> 광배근  <br/> <b>추천대상 :</b> 라운드숄더/사무직/학생/어깨관절을 사용하는 운동을 하기전 <br/> <b>주의사항 :</b> 광배근 마사지시 갈비뼈에 무게가 실리지 않게 위치를 잡아줘야 하며 몸통을 뒷편을 기울여 100~110도의 각도를 유지한 상태해서 롤링을 진행하는 것이 효율적이다.</span>}
                    {selectedProgram === "13 목 / 폼롤러" && <span><b>스트레칭 부위 :</b> 후두하근/경판상근 <br/> <b>추천대상 :</b> 시간 고개를 숙이고 계신분/사무직/일자목등등 목의 피로를 느끼는 분들 <br/> <b>주의사항 :</b> 머리와 목이 이어지는 부분로 마사지가 이루어 지며, 압통점에서 가볍게 호흡을 조절하며 강도를 조절하며 진행한다.</span>}
                    {selectedProgram === "14 가슴2 / 폼롤러" && <span><b>스트레칭 부위 :</b> 소흉근/대흉근 <br/> <b>추천대상 :</b> 라운드숄더/사무직/학생/어깨관절을 사용하는 운동을 하기전 <br/> <b>주의사항 :</b> 스트레칭 진행시 가슴을 열어준다는 느낌으로 스트레칭을 진행한다.</span>}
                    {/* 햄스트링 */}
                    {selectedProgram === "01 햄스트링 오른쪽" && <span><b>스트레칭 부위 :</b> 반건양근/반막양근/대퇴이두근/대둔근 <br/> <b>추천대상 :</b> 허리통증있으신분/골반통증있으신분 <br/> <b>주의사항 :</b> 무릎을 구부리지 않도록한다. / 본인 가동범위에 맞게끔 진행해준다.</span>}
                    {selectedProgram === "02 햄스트링 왼쪽" && <span><b>스트레칭 부위 :</b> 반건양근/반막양근/대퇴이두근/대둔근 <br/> <b>추천대상 :</b> 허리통증있으신분/골반통증있으신분 <br/> <b>주의사항 :</b> 무릎을 구부리지 않도록한다. / 본인 가동범위에 맞게끔 진행해준다.</span>}
                    {selectedProgram === "03 햄스트링" && <span><b>스트레칭 부위 :</b> 반건양근/반막양근/대퇴이두근/대둔근 <br/> <b>추천대상 :</b> 허리통증있으신분/골반통증있으신분 <br/> <b>주의사항 :</b> 무릎을 구부리지 않도록한다. / 본인 가동범위에 맞게끔 진행해준다.</span>}
                    {selectedProgram === "04 햄스트링 좌우" && <span><b>스트레칭 부위 :</b> 반건양근/반막양근/대퇴이두근/대둔근 <br/> <b>추천대상 :</b> 허리통증있으신분/골반통증있으신분 <br/> <b>주의사항 :</b> 무릎을 구부리지 않도록한다. / 본인 가동범위에 맞게끔 진행해준다.</span>}
                    {selectedProgram === "05 햄스트링 왼쪽2" && <span><b>스트레칭 부위 :</b> 반건양근/반막양근/대퇴이두근/대둔근 <br/> <b>추천대상 :</b> 허리통증있으신분/골반통증있으신분 <br/> <b>주의사항 :</b> 무릎을 구부리지 않도록한다. / 본인 가동범위에 맞게끔 진행해준다. </span>}
                    {selectedProgram === "06 햄스트링 오른쪽2" && <span><b>스트레칭 부위 :</b> 반건양근/반막양근/대퇴이두근/대둔근 <br/> <b>추천대상 :</b> 허리통증있으신분/골반통증있으신분 <br/> <b>주의사항 :</b> 무릎을 구부리지 않도록한다. / 본인 가동범위에 맞게끔 진행해준다.</span>}
                    {selectedProgram === "07 햄스트링 왼쪽3" && <span><b>스트레칭 부위 :</b> 반건양근/반막양근/대퇴이두근/대둔근 <br/> <b>추천대상 :</b> 허리통증있으신분/골반통증있으신분 <br/> <b>주의사항 :</b> 무릎을 구부리지 않도록한다. / 본인 가동범위에 맞게끔 진행해준다.</span>}
                    {selectedProgram === "08 햄스트링 오른쪽3" && <span><b>스트레칭 부위 :</b> 반건양근/반막양근/대퇴이두근/대둔근 <br/> <b>추천대상 :</b> 허리통증있으신분/골반통증있으신분 <br/> <b>주의사항 :</b> </span>}
                    {selectedProgram === "09 햄스트링 왼쪽2 / 폼롤러" && <span><b>스트레칭 부위 :</b> 햄스트링 <br/> <b>추천대상 :</b> 후방경사/오래앉아있는분/근육이 가동성이 짧으신분 <br/> <b>주의사항 :</b> 손목으로 상체의 무게를 일부분 지탱하고 있는 자세로 손목이 안좋으신분들은 팔꿈치로 상체를 지지한 상태에서 진행한다. 폼롤러의 기본이 되는 롤링을 기본으로 압통점이 부위를 위주로 진행한다.</span>}
                    {selectedProgram === "10 햄스트링 오른쪽2 / 폼롤러" && <span><b>스트레칭 부위 :</b> 햄스트링 <br/> <b>추천대상 :</b> 후방경사/오래앉아있는분/근육이 가동성이 짧으신분 <br/> <b>주의사항 :</b> 손목으로 상체의 무게를 일부분 지탱하고 있는 자세로 손목이 안좋으신분들은 팔꿈치로 상체를 지지한 상태에서 진행한다. 폼롤러의 기본이 되는 롤링을 기본으로 압통점이 부위를 위주로 진행한다.</span>}
                    {/* 추가 설명 */}
                </div>
                
            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <table className="tg" style={{ backgroundColor: "#DDDDDD", marginRight: "20px" }}>
            <thead>
                {/* ... */}
            </thead>

            <tbody>
  <tr style={{ height: "30px" }}>
    <td className="tg-0pky" style={{ width: "300px" }}>
      <b>{`부위: ${stretching}`}</b>
    </td>
    <td className="tg-0pky"><b>시간: {stretchingInfo.time}</b></td>
  </tr>
  <tr style={{ height: "20px" }}>
    <td className="tg-0pky">
      <b>추천대상: {stretchingInfo.recommendedAudience}</b>
    </td>
    <td className="tg-0pky"><b>효과: {stretchingInfo.effects}</b></td>
  </tr>
  <tr style={{ height: "20px", backgroundColor: "#448ACA" }}>
    <td
      className="tg-0lax"
      colSpan="2"
      style={{ color: "white", textAlign: "center" }}
    >
      운동프로그램
    </td>
  </tr>
  <tr style={{ height: "380px" }}>
    <td className="tg-0lax" colSpan="2">
    <div style={{ maxHeight: '350px', overflowY: 'scroll' }}>
      {stretchingInfo.programs.map((program, index) => {
        const isSelected = selectedProgram === program;
        return (
          <div
            key={index}
            onClick={() => setSelectedProgram(program)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: "pointer",
              fontWeight: isSelected ? "bold" : "normal",
              textDecoration: isSelected ? "underline" : "none",              
            }}            
          >
            <div>{program}</div>
            <img src="./button.png" alt="Program Image" style={{ width: '30px', height: '40px' }} />
          </div>
        );
      })}
      </div>
    </td>
  </tr>
</tbody>
                </table>
                </div>
            </VideoMainInfo>        
        </Row>
        </Col>
        
   

                {/*  */}
                
                
            </Container>
            <Footer />
        </>
    )
}

export default Stretching
