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
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    name: '',
    gender: '',
    birthdate: '',
    phone: '',
  });

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
                <Form.Control type="email" placeholder="이메일을 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>비밀번호 확인</Form.Label>
                <Form.Control type="password" placeholder="비밀번호를 다시 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>닉네임</Form.Label>
                <Form.Control type="text" placeholder="닉네임을 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>이름</Form.Label>
                <Form.Control type="text" placeholder="이름을 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>성별</Form.Label>
                <Form.Select>
                  <option value="" disabled selected>성별을 선택하세요</option>
                  <option value="M">남성</option>
                  <option value="F">여성</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>생년월일</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>연락처</Form.Label>
                <Form.Control type="tel" placeholder="전화번호를 입력하세요" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-3">
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