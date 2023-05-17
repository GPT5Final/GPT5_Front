import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Mypageheader from "../mypage/Mypageheader";
import Mypagemenu from "../mypage/Mypagemenu";
import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Pagination from "react-js-pagination";

function PaymentBbs() {
  const [paymentlist, setPaymentlist] = useState([]);

  //paging
  const [page, setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0);

  const [nickname, setNickname] = useState("");
  const history = useNavigate();
  const fetchData = async (user, p) => {
    console.log(p);

    await axios
      .post("http://localhost:3000/getPaymentBbs", null, {
        params: { buyer: user, pageNumber: p },
      })
      .then(function (resp) {
        console.log(resp.data.list);
        setPaymentlist(resp.data.list);

        setTotalCnt(resp.data.cnt);
      })
      .catch(function (err) {
        alert(err);
      });
  };

  function handlePageChange(page) {
    setPage(page);
    fetchData(nickname, page - 1);
  }

  useEffect(
    () => {
      const user = JSON.parse(localStorage.getItem("login"));

      if (user !== undefined && user !== null) {
        console.log(user.nickname);
        setNickname(user.nickname);
        fetchData(user.nickname, 0);
      } else {
        alert("로그인 해주십시오.");
        history("/login");
      }
    },
    [],
    [fetchData],
    [history]
  );

  return (
    <>
      <div className="main_layout">
        <Mypageheader />
        <Container className="main_box">
          <Mypagemenu />
          <br /> <br />
          <h1 align="center">
            <strong>Coin Payment History</strong>
          </h1>
          <br />
          <Table hover responsive>
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th>구매자</th>
                <th>주문명</th>
                <th>판매자</th>
                <th>금액</th>
                <th>날짜</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              {paymentlist.map(function (bbs, i) {
                return (
                  <tr key={i}>
                    <td>{nickname}</td>
                    <td>{bbs.ordername}</td>
                    <td>{bbs.seller}</td>
                    <td>{bbs.amount}</td>
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
        </Container>
      </div>
    </>
  );
}

export default PaymentBbs;
