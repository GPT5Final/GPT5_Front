import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import styled from "styled-components";
import { Footer } from "../../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { random } from "../utilites/RandomKey";

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

function PayCoin() {
  const [buyer, setBuyer] = useState("");
  const [coin, setCoin] = useState(0);
  const [payCoin, setPayCoin] = useState(0);
  const [afterCoin, setAfterCoin] = useState(0);

  const [ordername, setOrdername] = useState("");
  const [seller, setSeller] = useState("");

  let history = useNavigate();

  useEffect(
    () => {
      const user = JSON.parse(localStorage.getItem("login"));

      if (user !== undefined && user !== null) {
        setCoin(user.coin);
        setAfterCoin(user.coin);
        setBuyer(user.nickname);
      } else {
        alert("로그인해 주십시오");
        history("/login");
      }
    },
    [],
    [history]
  );

  function culBtn(n, p, s) {
    if (coin < p) {
      alert("코인이 부족합니다. 충전 후 구매해 주십시오.");
      return;
    } else {
      setOrdername(n);
      setPayCoin(p);
      setSeller(s);
      setAfterCoin(coin - p);
    }
  }

  function payBtn() {
    if (payCoin === 0) {
      alert("상품을 선택해 주십시오.");
      return;
    }

    let key = random();
    console.log(key);

    let payData = {
      paymentkey: key,
      buyer: buyer,
      seller: seller,
      amount: payCoin,
      ordername: ordername,
    };

    axios
      .post("http://localhost:3000/addCoinPayment", null, {
        params: payData,
      })
      .then(function (resp) {
        if (resp.data === "SUCCESS") {
          axios
            .post("http://localhost:3000/updateBuyerCoin", null, {
              params: {
                nickname: buyer,
                coin: payCoin,
              },
            })
            .catch(function (err) {
              alert(err);
            });

          axios
            .post("http://localhost:3000/updateSellerCoin", null, {
              params: {
                nickname: seller,
                coin: payCoin,
              },
            })
            .catch(function (err) {
              alert(err);
            });

          axios
            .post("http://localhost:3000/getMember", null, {
              params: { nickname: buyer },
            })
            .then(function (resp) {
              const men = JSON.stringify(resp.data);
              localStorage.setItem("login", men);
            })
            .catch(function (err) {
              alert(err);
            });

          alert("구매가 완료 되었습니다.");
          history("/payCoin");
        } else {
          alert("구매에 실패 했습니다.");
        }
      })
      .catch(function (err) {
        alert(err);
      });
  }

  function initBtn() {
    setPayCoin(0);
    setSeller("");
    setOrdername("");
    setAfterCoin(coin);
  }

  return (
    <>
      <Header />
      <Container>
        <div style={{ marginTop: "3vh", textAlign: "center" }}>
          <h1>payCoin</h1>
        </div>
        <div style={{ marginTop: "3vh" }}></div>
        <div style={{ backgroundColor: "black", paddingBottom: "10vh" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              paddingTop: "2vh",
            }}
          >
            <CoinSelectBox
              type="button"
              onClick={() => culBtn("Product A", 5000, "GPT5")}
            >
              <h6>Product A</h6>
              <div style={{ marginTop: "3vh" }}>5000 coin</div>
              <div style={{ marginTop: "3vh" }}>Seller : GPT5</div>
            </CoinSelectBox>
            <CoinSelectBox
              type="button"
              onClick={() => culBtn("Product B", 10000, "GPT5")}
            >
              <h6>Product B</h6>
              <div style={{ marginTop: "3vh" }}>10000 coin</div>
              <div style={{ marginTop: "3vh" }}>Seller : GPT5</div>
            </CoinSelectBox>
            <CoinSelectBox
              type="button"
              onClick={() => culBtn("Product C", 20000, "GPT5")}
            >
              <h6>Product C</h6>
              <div style={{ marginTop: "3vh" }}>20000 coin</div>
              <div style={{ marginTop: "3vh" }}>Seller : GPT5</div>
            </CoinSelectBox>
            <CoinSelectBox
              type="button"
              onClick={() => culBtn("Product D", 30000, "GPT5")}
            >
              <h6>Product D</h6>
              <div style={{ marginTop: "3vh" }}>30000 coin</div>
              <div style={{ marginTop: "3vh" }}>Seller : GPT5</div>
            </CoinSelectBox>
            <CoinSelectBox
              type="button"
              onClick={() => culBtn("Product F", 40000, "GPT5")}
            >
              <h6>Product F</h6>
              <div style={{ marginTop: "3vh" }}>40000 coin</div>
              <div style={{ marginTop: "3vh" }}>Seller : GPT5</div>
            </CoinSelectBox>
          </div>
          <Container style={{ marginTop: "10vh" }}>
            <Row>
              <Col>
                <div>
                  <h3 style={{ color: "white" }}>{buyer}님의 Current coin</h3>
                  <CoinInputBox>{coin}</CoinInputBox>
                </div>
                <div style={{ marginTop: "2vh" }}>
                  <h3 style={{ color: "white" }}>지불 금액</h3>
                  <CoinInputBox>{payCoin}</CoinInputBox>
                </div>
                <div style={{ marginTop: "2vh" }}>
                  <h3 style={{ color: "white" }}>After coin</h3>
                  <CoinInputBox>{afterCoin}</CoinInputBox>
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "23vh",
                  }}
                  type="button"
                  onClick={payBtn}
                >
                  <CoinClickBox>pay</CoinClickBox>
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "23vh",
                  }}
                  type="button"
                  onClick={initBtn}
                >
                  <CoinClickBox>init</CoinClickBox>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      <Footer marginTop={"0px"} />
    </>
  );
}

export default PayCoin;
