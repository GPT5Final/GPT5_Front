import React, { useState, useEffect, useRef } from "react";
import { Container, ListGroup, Card, Button } from "react-bootstrap";
import "./Mypage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Mypageheader() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [coin, setCoin] = useState("");
  const [profile, setProfile] = useState("default.png");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef();

  const TokenEmail = localStorage.getItem("email");
  const token = { email: TokenEmail };

  const history = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:3000/allmember", token)
      .then((response) => {
        setEmail(response.data.email);
        setNickname(response.data.nickname);
        setProfile(response.data.profile);
        setCoin(response.data.coin);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("profile", profile);
    formData.append("image", image);
    axios
      .post("http://localhost:3000/updatemember", formData)
      .then(function (resp) {
        if (resp.data === "YES") {
          alert("정상적으로 변경");
          window.location.reload();
        } else {
          alert("가입되지 않았습니다");
        }
      })
      .catch(function (err) {
        alert("err");
      });
  };

  const coinBtn = () => {
    history("/charge");
  };

  return (
    <div className="nav_box">
      <Container>
        <Link to="/">
          <img
            src="../gpt_logo.png"
            style={{ width: "4vw", marginRight: "1rem" }}
            alt="GPT-5"
          ></img>
        </Link>
        <div align="center">
          <form onSubmit={handleSubmit}>
            <div className="edit-form-content">
              {previewUrl ? (
                <div>
                  <img
                    src={previewUrl}
                    alt="프로필 이미지"
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                    width="130"
                    height="130"
                  />
                  <br />
                  <Button
                    className="up_btn"
                    variant="dark"
                    type="submit"
                    size="sm"
                    onClick={handleSubmit}
                  >
                    변경
                  </Button>
                </div>
              ) : (
                <div>
                  <img
                    src={`http://localhost:3000/images/${profile}`}
                    alt="프로필 이미지"
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                    width="130"
                    height="130"
                  />
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>
          </form>
        </div>
        <br />
        <div className="mypage_info">
          <p align="center">{nickname}</p>
          <p align="center">{email}</p>
          <p align="center">
            보유코인 : {coin} coin{" "}
            <Button variant="dark" size="sm" onClick={coinBtn}>
              충전
            </Button>
          </p>
        </div>
        <Card className="left_card" style={{ width: "18rem", border: "none" }}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Link to="/Mypage">내 프로필</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/Mypagecal">운동 일정</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/Mypagegroup">나의 그룹</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/ChargeBbs">코인 충전 내역</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/PaymentBbs">코인 결제 내역</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/Mypagereference">문의 하기</Link>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <br />
        <br />
        <br />
        <Card className="left_card" style={{ width: "18rem", border: "none" }}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Link to="/Mypageleave">회원 탈퇴</Link>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
      <div></div>
    </div>
  );
}

export default Mypageheader;
