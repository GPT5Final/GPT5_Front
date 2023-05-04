import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../../components/Header";
import { Footer } from '../../components/Footer';
import CommunityMenu from '../../components/CommunityMenu';
import CommunityBanner from '../../components/CommunityBanner';
import DraftEditor from './DraftEditor';
import { Map } from 'react-kakao-maps-sdk'


const BtnOne = styled.button`
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    width: 150px;
    height: 40px;
`;

const BtnTwo = styled.button`
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 150px;
    height: 40px;
`;

const GymInfo = styled.div`
width: 800px;
float: left; 
`;

const GymInfoTwo = styled.div`
    height: 500px;
    width: 800px;
    div {
        margin-left: 20px;
    }
    input {
        width: 95%;
    }
    .input-tag {
        margin-top: 10px;
    }
    .input-contents {
        margin-top: 10px;
    }
    float: left ;

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
    let history = useNavigate();

    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [category, setCategory] = useState('');
    const [banner, setBanner] = useState('');
    const [career, setCareer] = useState('');
    const [price, setPrice] = useState('');
    const [stime, setStime] = useState('');
    const [etime, setEtime] = useState('');
    const [tag, setTag] = useState('');
    const [groupname, setGroupname] = useState('');
    const [location, setLocation] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [wdate, setWdate] = useState('');


    const writeBbs = () => {
        // if (groupname === undefined || groupname.trim() === '') {
        //     alert('그룹명을 입력해 주십시오');
        //     return;
        // }
        // if (career === undefined || career.trim() === '') {
        //     alert('경력을 입력해 주십시오');
        //     return;
        // }
        // if (price === undefined || price.trim() === '') {
        //     alert('포인트를 입력해 주십시오');
        //     return;
        // }
        if (title === undefined || title.trim() === '') {
            alert('제목을 입력해 주십시오');
            return;
        }
        if (content === undefined || content.trim() === '') {
            alert('내용을 입력해 주십시오');
            return;
        }


        axios.post("http://localhost:3000/bbswrite", null,
            { params: { "email": email, "nickname": nickname, "category": category, "banner": banner, "career": career, "price": price, "stime": stime, "etime": etime, "tag": tag, "groupname": groupname, "title": title, "content": content } })
            .then(res => {
                console.log(res.data);
                if (res.data === "YES") {
                    alert("성공적으로 등록되었습니다");
                    history('/bbslist');
                } else {
                    alert("등록되지 않았습니다");
                }
            })
            .catch(function (err) {
                alert(err);
            })
    }

    useEffect(function () {
        let login = JSON.parse(localStorage.getItem("login"));
        setEmail(login.email);
        setNickname(login.nickname);
    }, []);

    return (
        <>
            <Header />
            <Container style={{ border: '1px solid', float: 'center', marginTop: '5vh' }}>
                <CommunityMenu />
                <Row>
                    <Col style={{ float: 'left' }}>
                        <GymInfo>
                            <div className="gym-info-one" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                <div>
                                    <div style={{ marginLeft: '30px', marginTop: '15px' }}>작성자<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginLeft: '10px', width: '262px' }} /></div>
                                    <div style={{ marginLeft: '30px', marginTop: '15px' }}>닉네임<input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} style={{ marginLeft: '10px', width: '262px' }} /></div>
                                    <div className="gym-info-one-section">
                                        <div className="group-className" id="group-className" style={{ marginTop: '20px', marginLeft: '30px' }}>그룹명<input value={groupname} onChange={(e) => setGroupname(e.target.value)} style={{ marginLeft: '10px', width: '262px' }}></input></div>
                                        <div style={{ marginTop: '20px', marginLeft: '30px' }}>경력 및 수상내역
                                            <input value={career} type="text" onChange={(e) => setCareer(e.target.value)} style={{ width: '320px' }}></input></div>
                                        <div style={{ display: 'flex', marginTop: '20px', marginLeft: '30px' }}>그룹 활동 시간
                                            <select className="stime" style={{ marginLeft: '35px', marginRight: '10px' }}>
                                                <option value="">시작</option>
                                                <option value="00:00">00 : 00</option>
                                                <option value="00:30">00 : 30</option>
                                                <option value="01:00">01 : 00</option>
                                                <option value="01:30">01 : 30</option>
                                                <option value="02:00">02 : 00</option>
                                                <option value="02:30">02 : 30</option>
                                                <option value="03:00">03 : 00</option>
                                                <option value="03:30">03 : 30</option>
                                                <option value="04:00">04 : 00</option>
                                                <option value="04:30">04 : 30</option>
                                                <option value="05:00">05 : 00</option>
                                                <option value="05:30">05 : 30</option>
                                                <option value="06:00">06 : 00</option>
                                                <option value="06:30">06 : 30</option>
                                                <option value="07:00">07 : 00</option>
                                                <option value="07:30">07 : 30</option>
                                                <option value="08:00">08 : 00</option>
                                                <option value="08:30">08 : 30</option>
                                                <option value="09:00">09 : 00</option>
                                                <option value="09:30">09 : 30</option>
                                                <option value="10:00">10 : 00</option>
                                                <option value="10:30">10 : 30</option>
                                                <option value="11:00">11 : 00</option>
                                                <option value="11:30">11 : 30</option>
                                                <option value="12:00">12 : 00</option>
                                                <option value="12:30">12 : 30</option>
                                                <option value="13:00">13 : 00</option>
                                                <option value="13:30">13 : 30</option>
                                                <option value="14:00">14 : 00</option>
                                                <option value="14:30">14 : 30</option>
                                                <option value="15:00">15 : 00</option>
                                                <option value="15:30">15 : 30</option>
                                                <option value="16:00">16 : 00</option>
                                                <option value="16:30">16 : 30</option>
                                                <option value="17:00">17 : 00</option>
                                                <option value="17:30">17 : 30</option>
                                                <option value="18:00">18 : 00</option>
                                                <option value="18:30">18 : 30</option>
                                                <option value="19:00">19 : 00</option>
                                                <option value="19:30">19 : 30</option>
                                                <option value="20:00">20 : 00</option>
                                                <option value="20:30">20 : 30</option>
                                                <option value="21:00">21 : 00</option>
                                                <option value="21:30">21 : 30</option>
                                                <option value="22:00">22 : 00</option>
                                                <option value="22:30">22 : 30</option>
                                                <option value="23:00">23 : 00</option>
                                                <option value="23:30">23 : 30</option>
                                            </select>
                                            ~
                                            <select className="etime" style={{ marginLeft: '10px' }}>
                                                <option value="">종료</option>
                                                <option value="00:00">00 : 00</option>
                                                <option value="00:30">00 : 30</option>
                                                <option value="01:00">01 : 00</option>
                                                <option value="01:30">01 : 30</option>
                                                <option value="02:00">02 : 00</option>
                                                <option value="02:30">02 : 30</option>
                                                <option value="03:00">03 : 00</option>
                                                <option value="03:30">03 : 30</option>
                                                <option value="04:00">04 : 00</option>
                                                <option value="04:30">04 : 30</option>
                                                <option value="05:00">05 : 00</option>
                                                <option value="05:30">05 : 30</option>
                                                <option value="06:00">06 : 00</option>
                                                <option value="06:30">06 : 30</option>
                                                <option value="07:00">07 : 00</option>
                                                <option value="07:30">07 : 30</option>
                                                <option value="08:00">08 : 00</option>
                                                <option value="08:30">08 : 30</option>
                                                <option value="09:00">09 : 00</option>
                                                <option value="09:30">09 : 30</option>
                                                <option value="10:00">10 : 00</option>
                                                <option value="10:30">10 : 30</option>
                                                <option value="11:00">11 : 00</option>
                                                <option value="11:30">11 : 30</option>
                                                <option value="12:00">12 : 00</option>
                                                <option value="12:30">12 : 30</option>
                                                <option value="13:00">13 : 00</option>
                                                <option value="13:30">13 : 30</option>
                                                <option value="14:00">14 : 00</option>
                                                <option value="14:30">14 : 30</option>
                                                <option value="15:00">15 : 00</option>
                                                <option value="15:30">15 : 30</option>
                                                <option value="16:00">16 : 00</option>
                                                <option value="16:30">16 : 30</option>
                                                <option value="17:00">17 : 00</option>
                                                <option value="17:30">17 : 30</option>
                                                <option value="18:00">18 : 00</option>
                                                <option value="18:30">18 : 30</option>
                                                <option value="19:00">19 : 00</option>
                                                <option value="19:30">19 : 30</option>
                                                <option value="20:00">20 : 00</option>
                                                <option value="20:30">20 : 30</option>
                                                <option value="21:00">21 : 00</option>
                                                <option value="21:30">21 : 30</option>
                                                <option value="22:00">22 : 00</option>
                                                <option value="22:30">22 : 30</option>
                                                <option value="23:00">23 : 00</option>
                                                <option value="23:30">23 : 30</option>
                                            </select>
                                        </div>
                                        <div style={{ display: 'flex', marginLeft: '30px', marginTop: '15px' }}>
                                            <div>
                                                <select className="category">
                                                    <option value="">카테고리 선택</option>
                                                    <option value="partner">인증 멘토 찾기</option>
                                                    <option value="mentor-mentee">멘토&멘티 찾기</option>
                                                    <option value="mentee-mentee">같이 운동해요</option>
                                                </select>
                                            </div>
                                            <div style={{ display: 'flex', marginLeft: '50px' }}>
                                                <select className="banner">
                                                    <option value="">배너 그룹 홍보</option>
                                                    <option value="1000">1일: 1000코인</option>
                                                    <option value="2500">3일: 2500코인</option>
                                                    <option value="5000">7일: 5000코인</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div style={{ marginLeft: '30px', marginTop: '15px' }}>신청 포인트 :<input value={price} type="text" onChange={(e) => setPrice(e.target.value)} placeholder="0" style={{ marginLeft: '10px', width: '217px' }}></input></div>
                                    </div>
                                </div>
                                <div className="gym-info-one" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className="map" style={{ display: 'flex' }}>
                                        <div style={{ marginTop: '15px', marginRight: '30px' }}>장소<input value={location} type="text" onChange={(e) => setLocation(e.target.value)} style={{ border: 'solid 1px', marginLeft: '10px', width: '308px' }}></input>
                                            <br />
                                            <Map // 지도를 표시할 Container
                                                center={{
                                                    // 지도의 중심좌표
                                                    lat: 33.450701,
                                                    lng: 126.570667,
                                                }}
                                                style={{
                                                    // 지도의 크기
                                                    width: "350px",
                                                    height: "300px",
                                                    marginTop: "10px",
                                                    border: '1px solid'
                                                }}
                                                level={3} // 지도의 확대 레벨
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </GymInfo>
                        <GymInfoTwo style={{ marginTop: '10px' }}>
                            <div style={{ marginTop: '10px' }}>
                                <div><input value={title} placeholder="제목" type="text" onChange={(e) => setTitle(e.target.value)} /></div>
                                <input value={content} placeholder="내용" type="text" onChange={(e) => setContent(e.target.value)} style={{ marginTop: '15px', marginLeft: '20px', height: '250px', width: '720px' }} />
                            </div>
                            {/* <DraftEditor /> */}
                            <div style={{ display: 'flex', marginTop: '30px', marginLeft:'50px' }}>
                                <div style={{ display: 'flex' }} >
                                    <div>실력</div>
                                    <select className="tag" style={{ borderRadius: '5px', marginLeft: '10px' }}>
                                        <option value="newbie">헬스 그게 뭐죠?</option>
                                        <option value="dog">Dog</option>
                                        <option value="cat">Cat</option>
                                        <option value="hamster">Hamster</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex' }} >
                                    <div>분위기</div>
                                    <select className="tag" id="tag" style={{ borderRadius: '5px', marginLeft: '10px' }}>
                                        <option value="focus">운동에만 집중!</option>
                                        <option value="dog">Dog</option>
                                        <option value="cat">Cat</option>
                                        <option value="hamster">Hamster</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex' }} >
                                    <div>스타일</div>
                                    <select className="tag" id="tag" style={{ borderRadius: '5px', marginLeft: '10px' }}>
                                        <option value="free-weight">프리웨이트</option>
                                        <option value="dog">Dog</option>
                                        <option value="cat">Cat</option>
                                        <option value="hamster">Hamster</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ float: 'right', marginTop: '20px', marginRight: '40px' }}><BtnOne type="button" onClick={() => writeBbs()}>생성하기</BtnOne></div>
                        </GymInfoTwo>
                    </Col>
                    <CommunityBanner />
                </Row>
            </Container>
            <Footer marginTop={'30px'} />
        </>
    )
}

export default MakeGroup
