import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import { Footer } from '../components/Footer';;


function Register() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [birth, setBirth] = useState('');
  

  let history = useNavigate();

  function account(){
    let member = { "email":email, "pwd":pwd, "nickname":nickname, "gender":gender, "name":name, "contact":contact, "birth":birth};
    axios.post("http://localhost:3000/addmember", null, { params:member })
    .then(function(resp){
        if(resp.data === "YES"){
            alert('정상적으로 가입되었습니다');
            history("/");  // 이동(link)
        }else{
            alert('가입되지 않았습니다');
        }
    })
    .catch(function(err){
        alert('err')
    })
}
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2 className="text-center mb-4">회원가입</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>이메일</Form.Label>
                <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="이메일을 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control onChange={(e)=>setPwd(e.target.value)} type="password" placeholder="비밀번호를 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>비밀번호 확인</Form.Label>
                <Form.Control type="password" placeholder="비밀번호를 다시 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>닉네임</Form.Label>
                <Form.Control onChange={(e)=>setNickname(e.target.value)} type="text" placeholder="닉네임을 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>이름</Form.Label>
                <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="이름을 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>성별</Form.Label>
                <Form.Select onChange={(e)=>setGender(e.target.value)}>
                  <option value="" disabled selected>성별을 선택하세요</option>
                  <option value="M">남성</option>
                  <option value="F">여성</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>생년월일</Form.Label>
                <Form.Control onChange={(e)=>setBirth(e.target.value)} type="date" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>연락처</Form.Label>
                <Form.Control onChange={(e)=>setContact(e.target.value)} type="tel" placeholder="전화번호를 입력하세요" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-3" onClick={account}>
                회원가입
              </Button>
            </Form>
            <div className="mt-3 text-center">
              이미 계정이 있으신가요? <Link to="/login">로그인</Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Register;