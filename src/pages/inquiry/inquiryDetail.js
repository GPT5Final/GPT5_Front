import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Mypageheader from "../mypage/Mypageheader";
import Mypagemenu from "../mypage/Mypagemenu";
import "./carousel.css";

import { Container, Table, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function InquiryDetail() {
  const [nickname, setNickname] = useState("");
  const [images, setImages] = useState([]);
  const [dto, setDto] = useState([]);

  let params = useParams();
  // console.log(params.seq);

  let navigate = useNavigate();

  const fetchInquiryData = async (seq) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/getInquiryBbs",
        null,
        {
          params: { seq: seq },
        }
      );
      // console.log(response.data.list);
      // console.log(response.data.dto);
      setImages(response.data.list);
      setDto(response.data.dto);
    } catch (error) {
      console.error(error);
      alert("데이터를 가져오는 중에 오류가 발생했습니다.");
    }
  };

  const backBtn = () => {
    navigate("/Inquiry");
  };

  const deleteBtn = async () => {
    await axios
      .post("http://localhost:3000/deleteInquiryBbs", null, {
        params: { seq: params.seq },
      })
      .then(function (resp) {
        if (resp.data === "SUCCESS") {
          alert("게시글이 삭제 되었습니다.");
          navigate("/Inquiry");
        }
      })
      .catch(function (err) {
        // alert(err);
        alert("실패하였습니다.");
      });
  };

  useEffect(() => {
    const user = localStorage.getItem("login");

    if (user !== undefined && user !== null) {
      setNickname(user.nickname);
      fetchInquiryData(params.seq);
    } else {
      alert("로그인 해주십시오.");
      navigate("/login");
    }
  }, [params.seq, navigate]);

  return (
    <>
      <div className="main_layout">
        <Mypageheader />
        <Container className="main_box">
          <Mypagemenu />
          <br />
          <h1 align="center">
            <strong>{dto.category}</strong>
          </h1>
          <br />
          <Carousel variant="dark">
            {images.map((img, i) => (
              <Carousel.Item key={i}>
                <div className="carousel-image-container">
                  <img
                    className="carousel-image"
                    src={`http://localhost:3000/static/inqImages/${img}`}
                    alt={img}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <br />
          <Table hover responsive>
            <tbody>
              <tr>
                <th>글 번호</th>
                <td>{dto.seq}</td>
                <th>문제유형</th>
                <td>{dto.category}</td>
              </tr>
              <tr>
                <th>작성자</th>
                <td>{nickname}</td>
                <th scope="row">작성일</th>
                <td>{dto.wdate}</td>
              </tr>
              <tr>
                <th>제목</th>
                <td colSpan="3">
                  <input
                    type="text"
                    className="form-control"
                    value={dto.title}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="4">
                  <textarea
                    style={{ height: "300px" }}
                    className="form-control"
                    value={dto.content}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
          <Row className="justify-content-end">
            <Col>
              <div
                style={{
                  display: "flex",
                  marginTop: "5px",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  type="button"
                  variant="primary"
                  onClick={backBtn}
                  style={{ marginRight: "5px" }}
                >
                  돌아가기
                </Button>
                <Button type="button" variant="primary" onClick={deleteBtn}>
                  삭제하기
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default InquiryDetail;
