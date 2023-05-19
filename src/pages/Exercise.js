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

function Exercise() {

    const [stretching, setStretching] = useState('월');
    

    const stretchingData = {
        월: {
            effect: '전신',
            part: '전신',
            calorie: '300 kcal',
            ename: '여름대비운동',
            programs: [
              '01 케틀벨 스윙',
              '02 아이스 스케이터',
              '03 버피',
              '04 숄더 탭',
              '05 암 워킹',
              '06 버피&프레스',
              '07 헤일로&푸쉬',
              '08 플랭크',
              // 추가
            ],
          },
          화: {
            effect: '전신',
            part: '전신',
            calorie: '400 kcal',
            ename: 'lazy day',
            programs: [
              '01 푸쉬 업',
              '02 힙 리프트',
              '03 크로스 레그 옐보우 터치',
              '04 로우',
              '05 투 암 킥 백',
              '06 백스탭4',
              '07 버드 도그 레그 리프트',
              '08 레그레이즈',
              // 추가
            ],
          },
          수: {
            effect: '예쁜 힙을 만들기',
            part: '하체',
            calorie: '700 kcal',
            ename: '엉덩이 불태우기',
            programs: [
              '01 와이드 스쿼트',
              '02 리버스 런지',
              '03 슈퍼맨',
              '04 오버헤드 스윙',
              '05 사이드 스쿼트',
              '06 크로스오버 스쿼트',
              '07 플로우 푸쉬 업',
              '08 플랭크1',
              // 추가
            ],
          },
          목: {
            effect: '다이어트',
            part: '전신',
            calorie: '500 kcal',
            ename: '전신운동(땀편)',
            programs: [
              '01 점프 스쿼트',
              '02 오버헤드 스윙',
              '03 버피&점프',
              '04 점프 스쿼트1',
              '05 마운틴 클라이밍',
              '06 사이드 런지2',
              '07 스텝 대쉬',
              '08 하이 플랭크 와이퍼',
              // 추가
            ],
          },
          금: {
            effect: '전신운동, 다이어트',
            part: '전신',
            calorie: '600 kcal',
            ename: '금요일 팻번',
            programs: [
              '01 오버헤드 스윙',
              '02 데드리프트',
              '03 스쿼트',
              '04 버피&점프',
              '05 마운틴 클라이밍1',
              '06 스텝 대쉬',
              '07 암 워킹',
              '08 플랭크 업&다운',
              // 추가
            ],
          },
          
          
        };
      
        const stretchingInfo = stretchingData[stretching];
        const [selectedProgram, setSelectedProgram] = useState('01 케틀벨 스윙');
        

        useEffect(() => {
          setSelectedProgram('01 케틀벨 스윙');
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
                            <img src="./upup.png" style={{ maxWidth: '300px', marginBottom: '1rem', margin: 'auto' }} />
                            <div>
                            <h5>근육이 휴식하는 시간, 헬스</h5> <br/>
                            <p style={{ marginBottom: '0.5rem' }}>요일별로 따라해보세요</p>
                            <p style={{ marginBottom: '0.5rem' }}>지점,회사,집 고객님이 원하는 곳에서 원하는 시간에 근육을 움직임으로써 잠깐의</p>
                            <p style={{ marginBottom: '0.5rem' }}>운동이 여러분의 생활에 활력을 넣어 드립니다.</p>
                            <p style={{ marginBottom: '0.5rem' }}>(회사원/학생/운동전,후/평상 시 피로함을 느끼는 모든분들에게 추천드립니다.)</p>
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
                                        backgroundColor: '#F14748',
                                    }}>
                                        <th className="tg-0lax" colSpan="5" style={{ color: 'white', textAlign: 'center', fontSize: '25px' }}>
                                            <b>Personal Training</b>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td
                                            className="tg-0lax"
                                            style={{ width: '140px', backgroundColor: `${stretching === '월' ? '#F14748' : ''}`, color: `${stretching === '월' ? 'white' : ''}` }}
                                            onClick={() => {
                                                setStretching('월');
                                            }}
                                        >
                                            <div><h4><b>MON</b></h4></div>
                                            <div><b>새로운 출발</b></div>
                                        </td>
                                        <td
                                            className="tg-0lax"
                                            style={{ width: '140px', backgroundColor: `${stretching === '화' ? '#F14748' : ''}`, color: `${stretching === '화' ? 'white' : ''}` }}
                                            onClick={() => {
                                                setStretching('화');
                                            }}
                                        >
                                            <div><h4><b>TUE</b></h4></div>
                                            <div><b>활기</b></div>
                                        </td>
                                        <td
                                            className="tg-0lax"
                                            style={{ width: '140px', backgroundColor: `${stretching === '수' ? '#F14748' : ''}`, color: `${stretching === '수' ? 'white' : ''}` }}
                                            onClick={() => {
                                                setStretching('수');
                                            }}
                                        >
                                            <div><h4><b>WED</b></h4></div>
                                            <div><b>균형</b></div>
                                        </td>                                        
                                        <td
                                            className="tg-0lax"
                                            style={{ width: '140px', backgroundColor: `${stretching === '목' ? '#F14748' : ''}`, color: `${stretching === '목' ? 'white' : ''}` }}
                                            onClick={() => {
                                                setStretching('목');
                                            }}
                                        >
                                            <div><h4><b>THU</b></h4></div>
                                            <div><b>집중</b></div>
                                        </td>
                                        <td
                                            className="tg-0lax"
                                            style={{ width: '140px', backgroundColor: `${stretching === '금' ? '#F14748' : ''}`, color: `${stretching === '금' ? 'white' : ''}` }}
                                            onClick={() => {
                                                setStretching('금');
                                            }}
                                        >
                                            <div><h4><b>FRI</b></h4></div>
                                            <div><b>보상</b></div>
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
                <h1 style={{ color: "#ffffff", backgroundColor: "#F14748", margin: "1%", textAlign:"center"}}>GPT5</h1>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <VideoContainer style={{ width: "330px", height: "330px" }}>
                                {selectedProgram === "01 케틀벨 스윙" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e월요일/케틀벨 스윙.mp4"                                        
                                    />
                                )}
                                {selectedProgram === "02 아이스 스케이터" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e월요일/아이스 스케이터.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "03 버피" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e월요일/버피.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "04 숄더 탭" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e월요일/숄더 탭.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "05 암 워킹" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e월요일/암 워킹.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "06 버피&프레스" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e월요일/버피&프레스.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "07 헤일로&푸쉬" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e월요일/헤일로&푸쉬.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "08 플랭크" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e월요일/플랭크.mp4"
                                        
                                    />
                                )}
                                {/* 화요일 */}
                                {selectedProgram === "01 푸쉬 업" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e화요일/푸쉬 업.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "02 힙 리프트" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e화요일/힙 리프트.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "03 크로스 레그 옐보우 터치" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e화요일/크로스 레그 엘보우 터치.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "04 로우" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e화요일/로우.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "05 투 암 킥 백" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e화요일/투 암 킥 백.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "06 백스탭4" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e화요일/백스텝4.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "07 버드 도그 레그 리프트" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e화요일/버드 도그 레그 리프트.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "08 레그레이즈" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e화요일/레그레이즈.mp4"
                                        
                                    />
                                )}
                                {/* 수요일 */}
                                {selectedProgram === "01 와이드 스쿼트" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e수요일/와이드 스쿼트.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "02 리버스 런지" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e수요일/리버스 런지.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "03 슈퍼맨" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e수요일/슈퍼맨.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "04 오버헤드 스윙" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e수요일/오버헤드 스윙.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "05 사이드 스쿼트" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e수요일/사이드 스쿼트.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "06 크로스오버 스쿼트" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e수요일/크로스오버 스쿼트.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "07 플로우 푸쉬 업" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e수요일/플로우 푸쉬 업.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "08 플랭크1" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e수요일/플랭크1.mp4"
                                        
                                    />
                                )}
                                {/* 목요일 */}
                                {selectedProgram === "01 점프 스쿼트" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e목요일/점프 스쿼트.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "02 오버헤드 스윙" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e목요일/오버헤드 스윙.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "03 버피&점프" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e목요일/버피&점프.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "04 점프 스쿼트1" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e목요일/점프 스쿼트1.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "05 마운틴 클라이밍" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e목요일/마운틴 클라이밍.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "06 사이드 런지2" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e목요일/사이드 런지2.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "07 스텝 대쉬" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e목요일/스텝 대쉬.mp4"
                                        
                                    />
                                )}
                                {selectedProgram === "08 하이 플랭크 와이퍼" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e목요일/하이 플랭크 와이퍼.mp4"
                                        
                                    />
                                )}
                                {/* 금요일 */}
                                {selectedProgram === "01 오버헤드 스윙" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e금요일/오버헤드 스윙.mp4"                                      
                                    />
                                )}
                                {selectedProgram === "02 데드리프트" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e금요일/데드리프트.mp4"                                      
                                    />
                                )}
                                {selectedProgram === "03 스쿼트" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e금요일/스쿼트.mp4"                                      
                                    />
                                )}
                                {selectedProgram === "04 버피&점프" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e금요일/버피&점프.mp4"                                      
                                    />
                                )}
                                {selectedProgram === "05 마운틴 클라이밍1" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e금요일/마운틴 클라이밍1.mp4"                                      
                                    />
                                )}
                                {selectedProgram === "06 스텝 대쉬" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e금요일/스텝 대쉬.mp4"                                      
                                    />
                                )}
                                {selectedProgram === "07 암 워킹" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e금요일/암 워킹.mp4"                                      
                                    />
                                )}
                                {selectedProgram === "08 플랭크 업&다운" && (
                                    <VideoPlayer
                                        autoPlay
                                        loop
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="./playlist/e금요일/플랭크 업&다운.mp4"                                      
                                    />
                                )}

                                
                                {/* 추가영상 */}
                            </VideoContainer>
                            </div>
                            {selectedProgram && (
                <div style={{ marginTop: "30px", height: "46px", textAlign: "center" }}>
                    {/* 월요일 */}
                    {selectedProgram === "01 케틀벨 스윙" && <span><b>케틀벨 스윙</b></span>}
                    {selectedProgram === "02 아이스 스케이터" && <span><b>스케이터 자세를 하면서 하는 전신 운동</b></span>}
                    {selectedProgram === "03 버피" && <span><b>엎드렸다 일어나는 운동</b></span>}
                    {selectedProgram === "04 숄더 탭" && <span><b>플랭크 자세에서 한손씩 어깨를 터치하는 운동</b></span>}
                    {selectedProgram === "05 암 워킹" && <span><b>상체를 이용한 전신운동</b></span>}
                    {selectedProgram === "06 버피&프레스" && <span><b>버피 후 프레스까지 이어지는 전신 운동</b></span>}
                    {selectedProgram === "07 헤일로&푸쉬" && <span><b>케틀벨을 이용한 코어 운동</b></span>}
                    {selectedProgram === "08 플랭크" && <span><b>팔꿈치와 발끝을 바닥에댄후 버티는 코어운동</b></span>}
                    {/* 화요일 */}
                    {selectedProgram === "01 푸쉬 업" && <span><b>불가리안백을 이용한 상체운동</b></span>}
                    {selectedProgram === "02 힙 리프트" && <span><b>누운 상태에서 하는 대둔근 운동</b></span>}
                    {selectedProgram === "03 크로스 레그 옐보우 터치" && <span><b>팔꿈치로 무릎을 터치하는 운동</b></span>}
                    {selectedProgram === "04 로우" && <span><b>덤벨을 이용한 등 운동</b></span>}
                    {selectedProgram === "05 투 암 킥 백" && <span><b>양팔 동시에 하는 상완 삼두근 운동</b></span>}
                    {selectedProgram === "06 백스탭4" && <span><b>래더를 이용한 스텝운동</b></span>}
                    {selectedProgram === "07 버드 도그 레그 리프트" && <span><b>엎드린 상태에서 한다리씩 들어올리는 운동</b></span>}
                    {selectedProgram === "08 레그레이즈" && <span><b>다리를 올렸다 내렸다하는 코어운동</b></span>}
                    {/* 수요일 */}
                    {selectedProgram === "01 와이드 스쿼트" && <span><b>다리를 넓게 벌리고 하는 스쿼트</b></span>}
                    {selectedProgram === "02 리버스 런지" && <span><b>다리를 뒤로빼면서 하는 런지</b></span>}
                    {selectedProgram === "03 슈퍼맨" && <span><b>엎드린 상태에서 양팔 다리를 동시에 올리는 전신 운동</b></span>}
                    {selectedProgram === "04 오버헤드 스윙" && <span><b>머리위까지 올리는 케틀벨 스윙</b></span>}
                    {selectedProgram === "05 사이드 스쿼트" && <span><b>한쪽만 앉는 스쿼트</b></span>}
                    {selectedProgram === "06 크로스오버 스쿼트" && <span><b>한쪽다리를 대각선으로 빼면서 하는 하체운동</b></span>}
                    {selectedProgram === "07 플로우 푸쉬 업" && <span><b>무릎을 대고 하는 가슴운동</b></span>}
                    {selectedProgram === "08 플랭크1" && <span><b>팔꿈치와 발끝을 바닥에댄후 버티는 코어운동</b></span>}
                    {/* 목요일 */}
                    {selectedProgram === "01 점프 스쿼트" && <span><b>래더를 이용한 하체운동</b></span>}
                    {selectedProgram === "02 오버헤드 스윙" && <span><b>머리위까지 올리는 케틀벨 스윙</b></span>}
                    {selectedProgram === "03 버피&점프" && <span><b>스텝박스를 이용한 전신 운동</b></span>}
                    {selectedProgram === "04 점프 스쿼트1" && <span><b>점프를 이용한 하체 운동</b></span>}
                    {selectedProgram === "05 마운틴 클라이밍" && <span><b>스텝박스를 이용하는 전신 운동</b></span>}
                    {selectedProgram === "06 사이드 런지2" && <span><b>양손으로 케틀벨을 잡은 후 하는 사이드 런지</b></span>}
                    {selectedProgram === "07 스텝 대쉬" && <span><b>스텝박스를 이용하는 전신 운동</b></span>}
                    {selectedProgram === "08 하이 플랭크 와이퍼" && <span><b>엎드린 상태에서 몸을 좌우로 틀어주는 코어운동</b></span>}
                    {/* 금요일 */}
                    {selectedProgram === "01 오버헤드 스윙" && <span><b>머리위까지 올리는 케틀벨 스윙</b></span>}
                    {selectedProgram === "02 데드리프트" && <span><b>바이퍼를 이용한 데드리프트</b></span>}
                    {selectedProgram === "03 스쿼트" && <span><b>바이퍼를 세운상태에서 손으로 지지한 후 앉는 동시에 앞으로 밀어주면서 스쿼트를 진행한다. 바이퍼를 너무 앞으로 기울이지 않도록 해준다.</b></span>}
                    {selectedProgram === "04 버피&점프" && <span><b>스텝박스를 이용한 전신 운동</b></span>}
                    {selectedProgram === "05 마운틴 클라이밍1" && <span><b>스텝박스를 이용하는 전신 운동</b></span>}
                    {selectedProgram === "06 스텝 대쉬" && <span><b>스텝박스를 이용하는 전신 운동</b></span>}
                    {selectedProgram === "07 암 워킹" && <span><b>상체를 이용한 전신운동</b></span>}
                    {selectedProgram === "08 플랭크 업&다운" && <span><b>플랭크동작에서 팔을 폈다 접었다 반복하는 운동</b></span>}
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
        <b>운동효과: {stretchingInfo.effect}</b>
    </td>
    <td className="tg-0pky"><b>운동부위: {stretchingInfo.part}</b></td>
  </tr>
  <tr style={{ height: "20px" }}>
    <td className="tg-0pky">
      <b>목표 칼로리: {stretchingInfo.calorie}</b>
    </td>
    <td className="tg-0pky"><b>운동명: {stretchingInfo.ename}</b></td>
  </tr>
  <tr style={{ height: "20px", backgroundColor: "#F14748" }}>
    <td
      className="tg-0lax"
      colSpan="2"
      style={{ color: "white", textAlign: "center" }}
    >
      운동프로그램
    </td>
  </tr>
  <tr style={{ height: "300px" }}>
    <td className="tg-0lax" colSpan="2">
    <div style={{ maxHeight: '310px', overflowY: 'scroll' }}>
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

export default Exercise;
