import React from "react";
import { Container,ListGroup,Card } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import './Mypage.css';
import { Link } from "react-router-dom";

function Mypage(){
    return(
        <div className="main_layout">
        <Container className="nav_box" >
        <Link to="/"><img src="./gpt_logo.png" style={{ width: '4vw', marginRight: '1rem',}} alt="GPT Logo"></img></Link>
            <div align="center">
                <Link to="/mypage" className="avatar" align="center"><img src="./defaultman.png" style={{width: '150px', height: '150px'}}></img></Link>
            </div><br />
            <p align="center">닉네임</p>
            <p align="center">이메일</p>
            <p align="center">보유코인</p>
            <Card className="left_card" style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item><Link>내 프로필</Link></ListGroup.Item>
                    <ListGroup.Item><Link>운동 일정</Link></ListGroup.Item>
                    <ListGroup.Item><Link>나의 그룹</Link></ListGroup.Item>
                    <ListGroup.Item><Link>회원 탈퇴</Link></ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
        <Container className="main_box" >
            <div align="right">
                미니공주
                <Link><img src="./mail.webp" style={{ width: '30px', height : '30px' }}></img></Link>
                <Link><img src="./bell.webp" style={{ width: '30px', height : '30px' }}></img></Link>
            </div>
            <Card className="dm1" style={{ width: '38rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item><Link>기본정보</Link></ListGroup.Item>
                    <ListGroup.Item><Link>닉네임</Link></ListGroup.Item>
                    <ListGroup.Item><Link>비밀번호</Link></ListGroup.Item>
                </ListGroup>
            </Card><br />
            <Card className="dm1" style={{ width: '38rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item><Link>email</Link></ListGroup.Item>
                    <ListGroup.Item><Link>닉네임</Link></ListGroup.Item>
                    <ListGroup.Item><Link>비밀번호</Link></ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
        </div>
        
    )
}

export default Mypage