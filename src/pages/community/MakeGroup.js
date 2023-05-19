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
// import LandingPage from '../../components/LandingPage';
import MapContainer from '../../components/MapContainer';





const BtnOne = styled.button`
    border-radius: 15px;
    width: 150px;
    height: 40px;
    color: white;
    background-color: #007BFF;
    border: none;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #0056b3;
    }
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
    const navigate = useNavigate();
    let history = useNavigate();

    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [memail, setMemail] = useState('');
    const [mnickname, setMnickname] = useState('');
    const [groupname, setGroupname] = useState('');
    const [career, setCareer] = useState('');
    const [stime, setStime] = useState('');
    const [etime, setEtime] = useState('');
    const [category, setCategory] = useState('');
    const [banner, setBanner] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tag1, setTag1] = useState('');
    const [tag2, setTag2] = useState('');
    const [tag3, setTag3] = useState('');
    const [Place, setPlace] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        setPlace(location)
        setLocation(location)
    }


    const Communitywrite = () => {
        if (groupname === undefined || groupname.trim() === '') {
            alert('그룹명을 입력해 주십시오');
            return;
        }
        if (career === undefined || career.trim() === '') {
            alert('경력을 입력해 주십시오');
            return;
        }
        if (stime === undefined || stime.trim() === '') {
            alert('시작 시간을 선택해 주십시오');
            return;
        }
        if (etime === undefined || etime.trim() === '') {
            alert('종료 시간을 선택해 주십시오');
            return;
        }
        if (category === undefined || category.trim() === '') {
            alert('카테고리를 선택해 주십시오');
            return;
        }
        if (banner === undefined || banner.trim() === '') {
            alert('배너광고 유무를 선택해 주십시오');
            return;
        }
        if (price === undefined || price.trim() === '') {
            alert('신청 포인트를 입력해 주십시오');
            return;
        }
        if (location === undefined || location.trim() === '') {
            alert('위치를 지정해 주십시오');
            return;
        }
        if (title === undefined || title.trim() === '') {
            alert('제목을 입력해 주십시오');
            return;
        }
        if (content === undefined || content.trim() === '') {
            alert('내용을 입력해 주십시오');
            return;
        }
        if (tag1 === undefined || tag1.trim() === '') {
            alert('실력을 선택해 주십시오');
            return;
        }
        if (tag2 === undefined || tag2.trim() === '') {
            alert('분위기를 선택해 주십시오');
            return;
        }
        if (tag3 === undefined || tag3.trim() === '') {
            alert('스타일을 선택해 주십시오');
            return;
        }


        axios.post("http://localhost:3000/Communitywrite", null,
            { params: { "email": email, "nickname": nickname, "memail": memail, "mnickname": mnickname, "groupname": groupname, "career": career, "stime": stime, "etime": etime, "category": category, "banner": banner, "price": price, "location": location, "title": title, "content": content, "tag1": tag1, "tag2": tag2, "tag3": tag3, } })
            .then(res => {
                console.log(res.data);
                if (res.data === "YES") {
                    alert("성공적으로 등록되었습니다");
                    history('/community/Home');
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
            <Container style={{ float: 'center' }}>
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
                                            <select className="stime" onChange={(e) => setStime(e.target.value)} style={{ marginLeft: '35px', marginRight: '10px' }}>
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
                                            <select className="etime" onChange={(e) => setEtime(e.target.value)} style={{ marginLeft: '10px' }}>
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
                                                <select className="category" onChange={(e) => setCategory(e.target.value)}>
                                                    <option value="">카테고리 선택</option>
                                                    <option value="인증멘토">인증 멘토 찾기</option>
                                                    <option value="멘토&멘티">멘토&멘티 찾기</option>
                                                </select>
                                            </div>
                                            <div style={{ display: 'flex', marginLeft: '44px' }}>
                                                <select className="banner" onChange={(e) => setBanner(e.target.value)}>
                                                    <option value="">배너 홍보 유/무</option>
                                                    <option value="0">이용 안함</option>
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
                                        <div style={{ marginTop: '15px', marginRight: '30px' }}>
                                            <form className="inputForm" onSubmit={handleSubmit}>
                                                장소<input placeholder="도로명주소 입력 ex)테헤란로 212" value={location} onChange={(e) => setLocation(e.target.value)} style={{ border: 'solid 1px', marginLeft: '5px', width: '265px' }} />
                                                <button type="submit" style={{ border: 'solid 1px' }}>검색</button>
                                            </form>
                                            <MapContainer searchPlace={Place} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </GymInfo>
                        <GymInfoTwo style={{ marginTop: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                                <div style={{ display: 'flex' }} >
                                    <div>실력</div>
                                    <select className="tag1" onChange={(e) => setTag1(e.target.value)} style={{ borderRadius: '5px', marginLeft: '10px' }}>
                                        <option value="">선택</option>
                                        <option value="초보">초보</option>
                                        <option value="중수">중수</option>
                                        <option value="고수">고수</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex', marginLeft: '10px' }} >
                                    <div>분위기</div>
                                    <select className="tag2" onChange={(e) => setTag2(e.target.value)} style={{ borderRadius: '5px', marginLeft: '10px' }}>
                                        <option value="">선택</option>
                                        <option value="집중">운동에만 집중</option>
                                        <option value="친목도모">친목도모</option>
                                        <option value="쉬엄쉬엄">쉬엄쉬엄</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex', marginLeft: '10px' }} >
                                    <div>스타일</div>
                                    <select className="tag3" onChange={(e) => setTag3(e.target.value)} style={{ borderRadius: '5px', marginLeft: '10px' }}>
                                        <option value="">선택</option>
                                        <option value="프리웨이트">프리웨이트</option>
                                        <option value="머신위주">머신위주</option>
                                        <option value="맨몸운동">맨몸운동</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <textarea value={title} placeholder="제목" type="text" onChange={(e) => setTitle(e.target.value)} style={{ marginTop: '15px', marginLeft: '20px', height: '30px', width: '720px' }} />
                                <textarea value={content} placeholder="내용" type="text" onChange={(e) => setContent(e.target.value)} style={{ marginTop: '15px', marginLeft: '20px', height: '250px', width: '720px' }} />
                            </div>
                            {/* <DraftEditor /> */}
                            <button style={{ float: 'left', marginLeft: '40px' }} onClick={() => navigate(-1)}>
                                목록
                            </button>
                            <div style={{ float: 'right', marginRight: '40px' }}>
                                <BtnOne type="button" onClick={() => { Communitywrite(); }}>생성하기</BtnOne>
                            </div>
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
