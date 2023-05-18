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



const BtnOne = styled.button`
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
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


function ExerciseTalkWrite() {
    let history = useNavigate();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [groupname, setGroupname] = useState('');
    const [career, setCareer] = useState('');
    const [stime, setStime] = useState('');
    const [etime, setEtime] = useState('');
    const [category, setCategory] = useState('운동이야기');
    const [banner, setBanner] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tag1, setTag1] = useState('');
    const [tag2, setTag2] = useState('');
    const [tag3, setTag3] = useState('');
    const [Place, setPlace] = useState('')


    const Communitywrite = () => {

        if (title === undefined || title.trim() === '') {
            alert('제목을 입력해 주십시오');
            return;
        }
        if (content === undefined || content.trim() === '') {
            alert('내용을 입력해 주십시오');
            return;
        }


        axios.post("http://localhost:3000/Communitywrite", null,
            { params: { "email": email, "nickname": nickname, "groupname": groupname, "career": career, "stime": stime, "etime": etime, "category": category, "banner": banner, "price": price, "location": location, "title": title, "content": content, "tag1": tag1, "tag2": tag2, "tag3": tag3, } })
            .then(res => {
                console.log(res.data);
                if (res.data === "YES") {
                    alert("성공적으로 등록되었습니다");
                    history('/community/ExerciseTalk');
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
            <Container style={{ float: 'center', height: '770px' }}>
                <CommunityMenu />
                <Row>
                    <Col style={{ float: 'left' }}>
                        <div style={{ display: 'flex', marginLeft: '40px', marginTop: '15px', float: 'left' }}>
                            <div>
                                <select className="category" onChange={(e) => setCategory(e.target.value)}>
                                    <option value="운동이야기">운동 이야기</option>
                                </select>
                            </div>
                        </div>
                        <GymInfo>
                            <div className="gym-info-one" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                <div>
                                    <div style={{ marginLeft: '30px', marginTop: '15px', float: 'left' }}>작성자<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginLeft: '10px', width: '262px' }} /></div>
                                    <div style={{ marginLeft: '30px', marginTop: '15px', float: 'left' }}>닉네임<input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} style={{ marginLeft: '10px', width: '262px' }} /></div>
                                </div>
                            </div>
                        </GymInfo>
                        <GymInfoTwo style={{ marginTop: '10px' }}>
                            <div style={{ marginTop: '10px' }}>
                                <textarea value={title} placeholder="제목" type="text" onChange={(e) => setTitle(e.target.value)} style={{ marginLeft: '20px', height: '30px', width: '720px' }} />
                                <textarea value={content} placeholder="내용" type="text" onChange={(e) => setContent(e.target.value)} style={{ marginTop: '15px', marginLeft: '20px', height: '250px', width: '720px' }} />
                            </div>
                            <button style={{ float: 'left', marginLeft: '40px' }} onClick={() => navigate(-1)}>
                                목록
                            </button>
                            <div style={{ float: 'right', marginRight: '40px' }}><BtnOne type="button" onClick={() => Communitywrite()}>생성하기</BtnOne></div>
                        </GymInfoTwo>
                    </Col>
                    <CommunityBanner />
                </Row>
            </Container>
            <Footer marginTop={'30px'} />
        </>
    )
}

export default ExerciseTalkWrite
