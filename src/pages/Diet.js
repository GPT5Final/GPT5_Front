import Header from "../components/Header";
import { Footer } from "../components/Footer";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Pagination from "react-js-pagination";
import "./page.css";

import styled from "styled-components";
import { Container, Table, Form, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// import { Player } from 'video-react';
import "video-react/dist/video-react.css";

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

function Diet() {
  const [nickname, setNickname] = useState("");

  const [bbslist, setBbslist] = useState([]);

  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0);

  const navigate = useNavigate();

  async function getBbslist(c, s, p) {
    console.log(c + "/" + s + "/" + p);
    axios
      .post("http://localhost:3000/GuideBbs", null, {
        params: { choice: c, search: s, pageNumber: p },
      })
      .then(function (resp) {
        // console.log(resp.data);
        // alert(JSON.stringify(resp.data[0]));

        setBbslist(resp.data.list);
        setTotalCnt(resp.data.cnt);
      })
      .catch(function (err) {
        alert(err);
      });
  }

  useEffect(function () {
    const user = JSON.parse(localStorage.getItem("login"));

    if (user !== undefined && user !== null) {
      setNickname(user.nickname);
    } else {
      alert("로그인 해주십시오.");
      navigate("/login");
    }

    getBbslist("", "", 0);
  }, []);

  function searchBtn() {
    if (choice.toString().trim() !== "" && search.toString().trim() !== "") {
      navigate("/Diet/" + choice + "/" + search);
    } else {
      navigate("/Diet/");
    }
    //console.log(choice + " " + search);

    getBbslist(choice, search, 0);
  }

  function pageChange(page) {
    setPage(page);
    getBbslist(choice, search, page - 1);
  }

  const WriteBtn = () => {
    navigate("/GuideWrite");
  };

  const bbsDetailBtn = (seq) => {
    navigate("/GuideDetail/" + seq);
  };

  return (
    <>
      <Header />
      <Container>
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <Btn>개인상담</Btn>
              <Btn
                style={{
                  marginLeft: "30px",
                  backgroundColor: "#D9D9D9",
                }}
              >
                제휴상담
              </Btn>
            </div>
          </Col>
          <Col>
            <img
              src="./gpt_logo.png"
              alt="GPT Logo"
              style={{
                width: "250px",
                marginLeft: "10vw",
              }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "10vh" }}>
          <Col className="d-flex justify-content-center">
            <img src="./Diety.png" alt="Diety Image" style={{ width: "55%" }} />
          </Col>
        </Row>
        <Row style={{ marginTop: "20vh" }}>
          <Col>
            <div style={{ color: "#44CA7A", textAlign: "center" }}>
              <h4>Weekly Diet Schedule</h4>
            </div>
          </Col>
        </Row>{" "}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3>2023 다이어트 식단 추천(건강한 다이어트 식단짜기)</h3>
        <Row style={{ marginTop: "10vh" }}>
          <Col>
            <a href="https://itembbal.com/%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8-%EC%8B%9D%EB%8B%A8-%EC%B6%94%EC%B2%9C-%EA%B1%B4%EA%B0%95%ED%95%9C-%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8-%EC%8B%9D%EB%8B%A8-%EC%A7%9C%EA%B8%B0/">
              <img src="./eat.png" />
            </a>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div align="center">
        <h2>What You Eat</h2>
        <br />
        <Row className="justify-content-center g-2 search-container">
          <Col md={1}>
            <Form.Select
              className="custom-select"
              value={choice}
              onChange={(e) => setChoice(e.target.value)}
            >
              <option value="">검색</option>
              <option value="title">제목</option>
              <option value="content">내용</option>
              <option value="nickname">작성자</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Control
              className="search-input"
              type="text"
              placeholder="검색어"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col md={1}>
            <Button
              className="search-btn"
              variant="primary"
              type="button"
              onClick={searchBtn}
            >
              검색
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <div style={{ width: "60%", margin: "0 auto" }}>
          <Table hover responsive>
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th style={{ textAlign: "center" }}>번호</th>
                <th style={{ textAlign: "center" }}>제목</th>
                <th style={{ textAlign: "center" }}>작성자</th>
                <th style={{ textAlign: "center" }}>조회수</th>
                <th style={{ textAlign: "center" }}>작성일</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              {bbslist.map(function (bbs, i) {
                return (
                  <tr key={i} onClick={() => bbsDetailBtn(bbs.seq)}>
                    <td style={{ textAlign: "center" }}>{i + 1}</td>
                    <td>{bbs.title}</td>
                    <td style={{ textAlign: "center" }}>{bbs.nickname}</td>
                    <td style={{ textAlign: "center" }}>{bbs.readcount}</td>
                    <td style={{ textAlign: "center" }}>{bbs.wdate}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <br />
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={totalCnt}
          pageRangeDisplayed={5}
          prevPageText={"이전"}
          nextPageText={"다음"}
          onChange={pageChange}
        />
        <br />
        {/* <Link to="/bbs/bbswrite">글쓰기</Link> */}
        <Button className="inq-write-btn" variant="primary" onClick={WriteBtn}>
          글쓰기
        </Button>
      </div>

      <Footer />
    </>
  );
}

export default Diet;
