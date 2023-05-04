import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import styled from "styled-components";
import { Footer } from "../../components/Footer";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { random } from "../utilites/RandomKey";

// npm install @tosspayments/payment-sdk --save
import { loadTossPayments } from "@tosspayments/payment-sdk";
const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";

const CoinSelectBox = styled.div`
  width: 100px;
  height: 150px;
  border-radius: 15px;
  border: 1px solid black;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CoinInputBox = styled.div`
  width: 400px;
  height: 50px;
  border-radius: 15px;
  border: 1px solid black;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
`;

const CoinClickBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  border: 1px solid black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

function Charge() {
  let history = useNavigate();

  const [index, setIndex] = useState(0);

  const [nickname, setNickname] = useState("");

  const [email, setEmail] = useState("");

  const [currentCoin, setCurrentCoin] = useState(0);
  const [chargeCoin, setChargeCoin] = useState(0);

  const [pay, setPay] = useState(0);

  useEffect(
    () => {
      const user = JSON.parse(localStorage.getItem("login"));

      if (user !== undefined && user !== null) {
        setNickname(user.nickname);
        setCurrentCoin(user.coin);
        setEmail(user.email);
      } else {
        alert("로그인해 주십시오");
        history("/login");
      }
    },
    [],
    [currentCoin],
    [pay]
  );

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function chargeBtn(p) {
    if (p === 5000) {
      setChargeCoin(chargeCoin + 5000);
      setPay(pay + 5000);
    } else if (p === 11000) {
      setChargeCoin(chargeCoin + 11000);
      setPay(pay + 10000);
    } else if (p === 30000) {
      setChargeCoin(chargeCoin + 30000);
      setPay(pay + 28000);
    } else if (p === 50000) {
      setChargeCoin(chargeCoin + 50000);
      setPay(pay + 45000);
    } else if (p === 100000) {
      setChargeCoin(chargeCoin + 100000);
      setPay(pay + 85000);
    }
  }

  async function payBtn(p, c, n, e) {
    if (p === 0) {
      alert("상품을 선택해 주십시오.");
      return;
    }

    const tossPayments = await loadTossPayments(clientKey);

    let key = random();
    console.log(key);

    tossPayments
      .requestPayment("카드", {
        amount: p, // 결재 금액
        orderId: key, // 주문 ID
        orderName: c, // 주문명
        customerName: n, // 고객이름
      })
      .then(function (data) {
        console.log(data);
        alert(data.amount + "원 결제가 완료 되었습니다.");

        let paymentParams = {
          nickname: nickname,
          amount: data.amount,
          ordername: chargeCoin,
          orderid: data.orderId,
          paymentkey: data.paymentKey,
        };
        axios
          .post("http://localhost:3000/addPayment", null, {
            params: paymentParams,
          })
          .then(function (resp) {
            if (resp.data === "SUCCESS") {
              console.log(resp.data);
            } else {
              alert("FAIL addPayment");
              return;
            }
          })
          .catch(function (err) {
            alert(err);
          });

        axios
          .post("http://localhost:3000/chargeCoin", null, {
            params: {
              coin: chargeCoin,
              nickname: nickname,
            },
          })
          .then(function (resp) {
            if (resp.data === "SUCCESS") {
              axios
                .post("http://localhost:3000/getMember", null, {
                  params: { nickname: nickname },
                })
                .then(function (resp) {
                  let mem = JSON.stringify(resp.data);
                  localStorage.setItem("login", mem);
                })
                .catch(function (err) {
                  alert(err);
                });

              history("/main");
            }
          })
          .catch(function (err) {
            alert(err);
            tossPayments.cancelPayment();
          });
      })
      .catch(function (error) {
        if (error.code === "USER_CANCEL") {
          // 결제 고객이 결제창을 닫았을 때 에러 처리
          tossPayments.cancelPayment();
        } else if (error.code === "INVALID_CARD_COMPANY") {
          // 유효하지 않은 카드 코드에 대한 에러 처리
          tossPayments.cancelPayment();
        }
      });
  }

  function init() {
    setChargeCoin(0);
    setPay(0);
  }

  return (
    <>
      <Header />
      <div style={{ marginTop: "3vh", textAlign: "center" }}>
        <h1>Charge</h1>
      </div>
      <div style={{ marginTop: "3vh" }}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./banner.png"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./banner.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./banner.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{ backgroundColor: "black", paddingBottom: "10vh" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "2vh",
          }}
        >
          <CoinSelectBox type="button" onClick={() => chargeBtn(5000)}>
            <h6>5000 Coin</h6>
            <div style={{ marginTop: "3vh" }}>5000 won</div>
          </CoinSelectBox>
          <CoinSelectBox type="button" onClick={() => chargeBtn(11000)}>
            <h6>11000 Coin</h6>
            <div style={{ marginTop: "3vh" }}>10000 won</div>
          </CoinSelectBox>
          <CoinSelectBox type="button" onClick={() => chargeBtn(30000)}>
            <h6>30000 Coin</h6>
            <div style={{ marginTop: "3vh" }}>28000 won</div>
          </CoinSelectBox>
          <CoinSelectBox type="button" onClick={() => chargeBtn(50000)}>
            <h6>50000 Coin</h6>
            <div style={{ marginTop: "3vh" }}>45000 won</div>
          </CoinSelectBox>
          <CoinSelectBox type="button" onClick={() => chargeBtn(100000)}>
            <h6>10000 Coin</h6>
            <div style={{ marginTop: "3vh" }}>88000 won</div>
          </CoinSelectBox>
        </div>
        <Container style={{ marginTop: "10vh" }}>
          <Row>
            <Col>
              <div>
                <h3 style={{ color: "white" }}>{nickname}님의 Current coin</h3>
                <CoinInputBox>{currentCoin}</CoinInputBox>
              </div>
              <div style={{ marginTop: "2vh" }}>
                <h3 style={{ color: "white" }}>Charge coin</h3>
                <CoinInputBox>{chargeCoin}</CoinInputBox>
              </div>
              <div style={{ marginTop: "2vh" }}>
                <h3 style={{ color: "white" }}>After coin</h3>
                <CoinInputBox>{currentCoin + chargeCoin}</CoinInputBox>
              </div>
              <div style={{ marginTop: "2vh" }}>
                <h3 style={{ color: "white" }}>지불 금액</h3>
                <CoinInputBox>{pay} 원</CoinInputBox>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "35vh",
                }}
                type="button"
                onClick={() => payBtn(pay, chargeCoin, nickname, email)}
              >
                <CoinClickBox>Charge</CoinClickBox>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "35vh",
                }}
                type="button"
                onClick={init}
              >
                <CoinClickBox>init</CoinClickBox>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer marginTop={"0px"} />
    </>
  );
}

export default Charge;
