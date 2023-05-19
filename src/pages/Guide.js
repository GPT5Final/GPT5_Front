import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Player } from "video-react";
import "../../node_modules/video-react/dist/video-react.css";

const Btn = styled.button`
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #c4c4c4;
  border-style: none;
  width: 100px;
  height: 40px;
`;


function Guide() {
  const history = useNavigate(); 
  const handleInquiryClick =() => {
    history('/inquiry');
  }
  return (
    <Container>
      <Header />
      <Row style={{ marginTop: "5vh" }}>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>GPT-5</h1>
          <div style={{ fontSize: "1vw" }}>
            <div>GymPT-5는 대한민국 최대, 최고의 GYMs 플렛폼으로</div>
            <div>제휴GYM과 회원님들뿐 아니라 가입한 모든 사람들이 소통</div>
            <div>하며 건강한 생활체육문화 조성을 지향합니다.</div>
          </div>
          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',

                        }}>
                            
                            <Btn onClick={handleInquiryClick} style={{
                                
                                backgroundColor: '#D9D9D9'
                            }}>문의하기</Btn>
                        </div>
        </Col>
        <Col>
          <img
            src="./gpt_logo.png"
            style={{
              width: "250px",
              marginLeft: "10vw",
            }}
          />
        </Col>
      </Row>
      <>
        <br />
        <br />
        <br />

        <div align="center">
          <Link
            to="/Diet"
            style={{ position: "relative", display: "inline-block" }}
          >
            <img
              src="./Gdiet.png"
              alt="Diet"
              style={{
                width: "250px",
                height: "350px",
                opacity: 0.4,
                marginRight: "20px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "21%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "2",
                color: "black",
                textAlign: "center",
              }}
            >
              <h4 style={{ fontWeight: "bold" }}>Diet</h4>
              <span>Recommended diet</span>
            </div>
          </Link>
          <Link
            to="/Exercise"
            style={{ position: "relative", display: "inline-block" }}
          >
            <img
              src="./Gexer.png"
              alt="Diet"
              style={{
                width: "250px",
                height: "350px",
                opacity: 0.4,
                margin: "0 20px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "21%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "2",
                color: "black",
                textAlign: "center",
              }}
            >
              <h4 style={{ fontWeight: "bold" }}>Exercise</h4>
              <span>Recommended exercise</span>
            </div>
          </Link>
          <Link
            to="/Stretching"
            style={{ position: "relative", display: "inline-block" }}
          >
            <img
              src="./Gstret.png"
              alt="Diet"
              style={{
                width: "250px",
                height: "350px",
                opacity: 0.4,
                marginLeft: "20px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "21%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "2",
                color: "black",
                textAlign: "center",
              }}
            >
              <h4 style={{ fontWeight: "bold" }}>Stretching</h4>
              <span>Recommended Stretching</span>
            </div>
          </Link>
        </div>
        <Footer />
      </>
    </Container>
  );
}

export default Guide;
