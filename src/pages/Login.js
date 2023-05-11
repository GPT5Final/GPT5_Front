import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

function Login() {
  let history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies("");
  const [saveEmail, setSaveEmail] = useState(false);

  function CheckHandler() {
    setSaveEmail(!saveEmail);
    if (!saveEmail && email !== "") {
      setCookies("user_email", email, { path: "/" });
    } else {
      setCookies("user_email", "", { path: "/" });
    }
  }

  const handleLogin = async (e) => {
    await axios
      .post("http://localhost:3000/login", null, {
        params: { email: email, pwd: password },
      })
      .then(function (resp) {
        if (resp.data !== null && resp.data !== "") {
          alert(resp.data.nickname + "님 환영합니다");
          localStorage.setItem("login", JSON.stringify(resp.data));
          localStorage.setItem("email", resp.data.email);
          history("/main");
        } else {
          alert("email 또는 password를 확인해주세요.");
        }
      })
      .catch(function (error) {
        console.error(error);
        alert("서버 오류가 발생했습니다.");
      });
  };

  useEffect(
    function () {
      let user_email = cookies.user_email;
      if (user_email !== undefined && user_email !== "") {
        setEmail(user_email);
        setSaveEmail(true);
      } else {
        setEmail("");
        setSaveEmail(false);
      }
    },
    [cookies]
  );

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <div className="text-center mb-4">
              <h2>LOGIN</h2>
              <p className="text-muted">
                환영합니다! 계정 정보를 입력해주세요.
              </p>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>이메일 주소</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="이메일을 입력하세요"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <input
                type="checkbox"
                checked={saveEmail}
                onChange={CheckHandler}
              />
              아이디저장
              <br />
              <br />
              <div className="d-grid gap-2">
                <Button variant="primary" type="button" onClick={handleLogin}>
                  로그인
                </Button>
              </div>
              <div className="text-center mt-3">
                <p className="text-muted">
                  계정이 없으신가요?{" "}
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
