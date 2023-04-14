import React, { useEffect } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { Map } from 'react-kakao-maps-sdk'

const BtnOne = styled.button`
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    background-color: white;
    border-color: black;
    width: 100px;
    height: 40px;
`;

const BtnTwo = styled.button`
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: white;
    border-color: black;
    width: 150px;
    height: 40px;
`;

const GymInfo = styled.div``;

const GymInfoTwo = styled.div`
    height: 300px;
    div {
        margin-left: 20px;
    }
    input {
        background-color: #D9D9D9;
        border-style: none;
        width: 90%;
    }
    .input-tag {
        margin-top: 10px;
    }
    .input-contents {
        margin-top: 10px;
    }

`;

const AdGroup = styled.div`
    border: 1px solid black;
    border-radius: 15px;
    text-align: center;
    background-color: white;
    margin-top: 20px;
    height: 100px;
    font-size: 15px;
`;

const Chat = styled.div`
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color: #C4C4C4;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 50px solid #C4C4C4; */
    border-radius: 50%;
`;

function MakeGroup() {

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col style={{ textAlign: 'center', paddingTop: '10px', backgroundColor: '#C4C4C4' }}>
                        <div>
                            <div style={{ marginTop: '10px' }}><BtnOne>커뮤 홈</BtnOne></div>
                            <div style={{ marginTop: '10px' }}><BtnOne>나의 그룹</BtnOne></div>
                        </div>
                        <div style={{ marginTop: '50px' }}>
                            <div style={{ marginTop: '10px' }}><BtnTwo>인증 멘토 찾기</BtnTwo></div>
                            <div style={{ marginTop: '10px' }}><BtnTwo>{`멘토&멘티 찾기`}</BtnTwo></div>
                            <div style={{ marginTop: '10px' }}><BtnTwo>같이 운동해요</BtnTwo></div>
                            <div style={{ marginTop: '10px' }}><BtnTwo>운동 이야기</BtnTwo></div>
                        </div>
                        <div style={{ marginTop: '50px' }}>
                            <div style={{ marginTop: '10px' }}><BtnOne>그룹 만들기</BtnOne></div>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <GymInfo style={{ backgroundColor: '#C4C4C4' }}>
                            <div className="gym-info-one" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                <div>
                                    <div style={{ display: 'flex' }}>
                                        <div>
                                            <select name="pets" id="pet-select" style={{ backgroundColor: '#D9D9D9', borderStyle: 'none', marginLeft: '10px' }}>
                                                <option value="">카테고리선택</option>
                                                <option value="dog">Dog</option>
                                                <option value="cat">Cat</option>
                                                <option value="hamster">Hamster</option>
                                            </select>
                                        </div>
                                        <div style={{ display: 'flex', marginLeft: '20px' }}>
                                            <div>배너광고</div>
                                            <select name="pets" id="pet-select" style={{ backgroundColor: '#D9D9D9', borderStyle: 'none', marginLeft: '10px' }}>
                                                <option value="">일 / 1000 코인</option>
                                                <option value="dog">Dog</option>
                                                <option value="cat">Cat</option>
                                                <option value="hamster">Hamster</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="gym-info-one-section">
                                        <div style={{ marginTop: '10px' }}>그룹명<input style={{ backgroundColor: '#D9D9D9', borderStyle: 'none', marginLeft: '30px' }}></input></div>
                                        <div style={{ marginTop: '10px' }}>경력 및 수상내역<input style={{ backgroundColor: '#D9D9D9', borderStyle: 'none', marginLeft: '30px' }}></input></div>
                                        <div style={{ marginTop: '10px' }}>포인트 / 회<input style={{ backgroundColor: '#D9D9D9', borderStyle: 'none', marginLeft: '30px' }}></input></div>
                                        <div style={{ display: 'flex', marginTop: '10px' }}>시간 <input style={{ height: '30px', width: '100px', marginLeft: '30px', backgroundColor: '#D9D9D9', borderStyle: 'none' }} /> ~ <input style={{ height: '30px', width: '100px', backgroundColor: '#D9D9D9', borderStyle: 'none' }} /></div>
                                    </div>
                                </div>
                                <div className="kakao-map-section" style={{ display: 'flex' }}>
                                    <div>장소</div>
                                    <div><Map // 지도를 표시할 Container
                                        center={{
                                            // 지도의 중심좌표
                                            lat: 33.450701,
                                            lng: 126.570667,
                                        }}
                                        style={{
                                            // 지도의 크기
                                            width: "160px",
                                            height: "170px",
                                        }}
                                        level={3} // 지도의 확대 레벨
                                    />
                                    </div>
                                </div>
                            </div>
                        </GymInfo>
                        <GymInfoTwo style={{ backgroundColor: '#C4C4C4' }}>
                            <div>
                                <div><input placeholder="제목" /></div>
                                <div className="input-tag"><input placeholder="태그" /></div>
                                <div className="input-contents"><input placeholder="내용" type="text" style={{ height: '150px' }} /></div>
                            </div>
                            <div style={{ display: 'flex', marginTop: '30px', marginLeft: '0px' }}>
                                <div style={{ display: 'flex' }} >
                                    <div>실력</div>
                                    <select name="pets" id="pet-select" style={{ borderStyle: 'none', marginLeft: '10px' }}>
                                        <option value="">헬스 그게 뭐죠?</option>
                                        <option value="dog">Dog</option>
                                        <option value="cat">Cat</option>
                                        <option value="hamster">Hamster</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex' }} >
                                    <div>분위기</div>
                                    <select name="pets" id="pet-select" style={{ borderStyle: 'none', marginLeft: '10px' }}>
                                        <option value="">운동에만 집중!</option>
                                        <option value="dog">Dog</option>
                                        <option value="cat">Cat</option>
                                        <option value="hamster">Hamster</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex' }} >
                                    <div>스타일</div>
                                    <select name="pets" id="pet-select" style={{ borderStyle: 'none', marginLeft: '10px' }}>
                                        <option value="">프리웨이트</option>
                                        <option value="dog">Dog</option>
                                        <option value="cat">Cat</option>
                                        <option value="hamster">Hamster</option>
                                    </select>
                                </div>
                            </div>
                        </GymInfoTwo>
                        <div style={{ textAlign: 'right', backgroundColor: '#C4C4C4', paddingBottom: '10px', paddingRight: '10px' }}>
                            <BtnOne>생성하기</BtnOne>
                        </div>
                    </Col>
                    <Col >
                        <div style={{ backgroundColor: '#C4C4C4', borderRadius: '15px', padding: '20px' }}>
                            <AdGroup>배너 그룹 홍보</AdGroup>
                            <AdGroup>배너 그룹 홍보</AdGroup>
                            <AdGroup>배너 그룹 홍보</AdGroup>
                        </div>
                        <div style={{ marginTop: '20px'}}>
                            <Chat>
                                채팅
                            </Chat>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer marginTop={'30px'} />
        </>
    )
}

export default MakeGroup
