import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';


function Login() {
  return (
    <>
    <Header />
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <div className="text-center mb-4">
            <h2>로그인</h2>
            <p className="text-muted">환영합니다! 계정 정보를 입력해주세요.</p>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>이메일 주소</Form.Label>
              <Form.Control type="email" placeholder="이메일을 입력하세요" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                로그인
              </Button>
            </div>

            <div className="text-center mt-3">
              <p className="text-muted">
                계정이 없으신가요?{' '}
                <Link to="/register" className="text-primary">
                  회원가입
                </Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
}

export default Login;
