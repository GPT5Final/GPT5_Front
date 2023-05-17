import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Pagination from "react-js-pagination";

import Mypageheader from "../mypage/Mypageheader";
import Mypagemenu from "../mypage/Mypagemenu";
import { Container, Table, Form, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Inquiry() {
  const [nickname, setNickname] = useState("");
  const [inqBbs, setInqBbs] = useState([]);

  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0);

  let navigate = useNavigate();

  //choice, search, page, user
  const fetchData = async (c, s, p, u) => {
    await axios
      .post("http://localhost:3000/InquiryBbs", null, {
        params: { choice: c, search: s, pageNumber: p, nickname: u },
      })
      .then(function (resp) {
        //console.log(resp.data.list);
        //console.log(resp.data.cnt);

        setInqBbs(resp.data.list);
        setTotalCnt(resp.data.cnt);
      })
      .catch(function (err) {
        alert(err);
      });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("login"));

    if (user !== undefined && user !== null) {
      setNickname(user.nickname);
    } else {
      alert("로그인 해주십시오.");
      navigate("/login");
    }

    fetchData("", "", 0, user.nickname);
  }, []);

  //console.log(nickname);

  function searchBtn() {
    if (choice.toString().trim() !== "" && search.toString().trim() !== "") {
      navigate("/Inquiry/" + choice + "/" + search + "/" + nickname);
    } else {
      navigate("/Inquiry/");
    }

    fetchData(choice, search, -0, nickname);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchData(choice, search, page - 1, nickname);
  }

  const InqWriteBtn = () => {
    navigate("/InqWrite");
  };

  const bbsDetailBtn = (seq) => {
    navigate("/InquiryDetail/" + seq);
  };

  return (
    <>
      <div className="main_layout">
        <Mypageheader />
        <Container className="main_box">
          <Mypagemenu />
          <br /> <br />
          <h1 align="center">
            <strong>Inquiry</strong>
          </h1>
          <br />
          <Row className="justify-content-center g-2 search-container">
            <Col md={3}>
              <Form.Select
                className="custom-select"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
              >
                <option value="">검색</option>
                <option value="category">문의유형</option>
                <option value="title">제목</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Control
                className="search-input"
                type="text"
                placeholder="검색어"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
            <Col md={2}>
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
          <Table hover responsive>
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th>번호</th>
                <th>문의 유형</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              {inqBbs.map(function (bbs, i) {
                return (
                  <tr key={i} onClick={() => bbsDetailBtn(bbs.seq)}>
                    <td>{i + 1}</td>
                    <td>{bbs.category}</td>
                    <td>{bbs.title}</td>
                    <td>{bbs.nickname}</td>
                    <td>{bbs.wdate}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={totalCnt}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              className="inq-write-btn"
              variant="primary"
              onClick={InqWriteBtn}
            >
              InqWrite
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Inquiry;
