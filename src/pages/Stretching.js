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

    const [stretching, setStretching] = useState('허리');

    const stretchingData = {
        허리: {
            time: '10분',
            recommendedAudience: '운동 전후 모든 분들에게 추천',
            effects: '허리 유연성 향상',
            programs: [
              '허리 스트레칭 프로그램 1',
              '허리 스트레칭 프로그램 2',
              '허리 스트레칭 프로그램 3',
              // 추가
            ],
          },
          하체: {
            time: '15분',
            recommendedAudience: '하체 근력 강화를 원하는 분들에게 추천',
            effects: '하체 근력 향상',
            programs: [
              '하체 스트레칭 프로그램 1',
              '하체 스트레칭 프로그램 2',
              // 추가
            ],
          },
          전신: {
            time: '20분',
            recommendedAudience: '전신 스트레칭을 원하는 분들에게 추천',
            effects: '전신 유연성 향상',
            programs: [
              '전신 스트레칭 프로그램 1',
              '전신 스트레칭 프로그램 2',
              // 추가
            ],
          },
          라운드숄더: {
            time: '12분',
            recommendedAudience: '어깨 근육을 풀어주고 싶은 분들에게 추천',
            effects: '어깨 유연성 향상',
            programs: [
              '라운드숄더 스트레칭 프로그램 1',
              '라운드숄더 스트레칭 프로그램 2',
              // 추가
            ],
          },
        };
      
        const stretchingInfo = stretchingData[stretching];
        const [selectedProgram, setSelectedProgram] = useState('허리 스트레칭 프로그램 1');

        useEffect(() => {
          setSelectedProgram('허리 스트레칭 프로그램 1');
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
                        <img src="./stretching.png" style={{ width: '55%' }} />
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
                        <img src="./Stretching2.png" style={{ width: '500px', maxHeight: '400px', marginRight: '1rem' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <img src="./logo192.png" style={{ maxWidth: '100px', marginBottom: '1rem', margin: 'auto' }} />
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
  {selectedProgram === "허리 스트레칭 프로그램 1" && (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      width="640px"
      height="360px"
    />
    
  )}
  {selectedProgram === "허리 스트레칭 프로그램 2" && (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_50mb.mp4"
      width="640px"
      height="360px"
    />
  )}
  {selectedProgram === "허리 스트레칭 프로그램 3" && (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="./playlist/jumpingjack.mp4"
      width="640px"
      height="360px"
    />
  )}
    {/* 추가영상 */}
  </Col>

  <Col>
  <VideoMainInfo>
                <table className="tg" style={{ backgroundColor: "#DDDDDD" }}>
                    <thead>
                        {/* ... */}
                    </thead>
                    <tbody>
                        <tr style={{ height: "40px" }}>
                            <td className="tg-0pky" style={{ width: "200px" }}>
                                {`부위: ${stretching}`}
                            </td>
                            <td className="tg-0pky">시간: {stretchingInfo.time}</td>
                        </tr>
                        <tr style={{ height: "40px" }}>
                            <td className="tg-0pky">
                                추천대상: {stretchingInfo.recommendedAudience}
                            </td>
                            <td className="tg-0pky">효과: {stretchingInfo.effects}</td>
                        </tr>
                        <tr style={{ height: "50px", backgroundColor: "#448ACA" }}>
                            <td
                                className="tg-0lax"
                                colSpan="2"
                                style={{ color: "white", textAlign: "center" }}
                            >
                                운동프로그램
                            </td>
                        </tr>
                        <tr style={{ height: "125px" }}>
                            <td className="tg-0lax" colSpan="2">
                                {stretchingInfo.programs.map((program, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedProgram(program)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            cursor: "pointer",
                                            fontWeight: selectedProgram === program ? "bold" : "normal",
                                            textDecoration: selectedProgram === program ? "underline" : "none",
                                        }}
                                    >
                                        <div>{program}</div>
{selectedProgram === program && (
    <>
        {program === "허리 스트레칭 프로그램 1" && <h5>df</h5>}
        {program === "허리 스트레칭 프로그램 2" && <h5>df2</h5>}
        {program === "허리 스트레칭 프로그램 3" && <h5>df3</h5>}
    </>
)}
<img
    src="./button.png"
    alt="Program Image"
    style={{ width: '30px', height: '40px' }}
/>
                                    </div>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </VideoMainInfo>
  </Col>
</Row>
   

                {/*  */}
                
            </Container>
            <Footer />
        </>
    )
}

export default Stretching
