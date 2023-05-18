import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import CommunityMenu from '../../components/CommunityMenu';
import CommunityBanner from '../../components/CommunityBanner';
import MapContainer from '../../components/MapContainer';

const BtnOne = styled.button`
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    width: 150px;
    height: 40px;
`;

const GymInfo = styled.div`
  width: 760px;
  float: left;
`;

const GymInfoTwo = styled.div`
  height: 500px;
  width: 800px;
  div {
    margin-left: 20px;
  }
  input {
    width: 95%;
  }
  .input-tag {
    margin-top: 10px;
  }
  .input-contents {
    margin-top: 10px;
  }
  float: left;
`;

function CommunityDetail() {
  const navigate = useNavigate();
  let history = useNavigate();

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [community, setCommunity] = useState(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(function () {
    let login = JSON.parse(localStorage.getItem("login"));
    setEmail(login.email);
    setNickname(login.nickname);
    setUser(login);
  }, []);

  const fetchCommunity = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/getCommunity?seq=${id}`);
      const communityData = response.data;
      setCommunity(communityData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    fetchCommunity();
  }, [fetchCommunity]);

  // const handleUpdate = async () => {
  //   if (!user || user.email !== community?.email) {
  //     alert("권한이 없습니다.");
  //     return;
  //   }

  //   try {
  //     await axios.post(`http://localhost:3000/Communityupdate?seq=${id}`);
  //     alert("수정완료");
  //     navigate(-1);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleDelete = async () => {
    if (!user || user.email !== community?.email) {
      alert("권한이 없습니다.");
      return;
    }

    try {
      await axios.post(`http://localhost:3000/Communitydelete?seq=${id}`);
      alert("삭제완료");
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  async function handleJoin() {
    axios.post("http://localhost:3000/Communityupdate", null, { params: { seq: id, memail: email, mnickname: nickname } }).then(function (resp) {
      alert(resp.data)
      history('/community/MyGroup');
    }).catch(function (err) {
      alert(err)
    })
  }

  const handleJoin2 = async () => {
    try {
      await axios.post(`http://localhost:3000/Communitydelete?seq=${id}`);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    const increaseReadCount = async () => {
      try {
        await axios.post(`http://localhost:3000/increaseReadCount?seq=${id}`);
      } catch (error) {
        console.error(error);
      }
    };

    increaseReadCount();
  }, [id]);



  return (
    <>
      <Header />
      <Container style={{ float: 'center', height: '870px' }}>
        <CommunityMenu />
        <Row>
          <Col style={{ float: 'left' }}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                {community?.category === '운동이야기' ? (
                  <GymInfo>
                    <div className="gym-info-one" style={{ justifyContent: 'space-between', padding: '10px' }}>
                      <p style={{ marginLeft: '20px', border: '1px solid' }}>작성자: {community?.email}</p>
                      <p style={{ marginLeft: '20px', marginTop: '15px', border: '1px solid' }}>닉네임: {community?.nickname}</p>
                      <p style={{ marginLeft: '20px', marginTop: '15px', border: '1px solid' }}>카테고리: {community?.category}</p>
                      <textarea readOnly={true} defaultValue={community?.title} style={{ marginLeft: '20px', height: '60px', width: '720px' }}></textarea>
                      <textarea readOnly={true} defaultValue={community?.content} style={{ marginTop: '15px', marginLeft: '20px', height: '250px', width: '720px' }}></textarea>
                      <button style={{ float: 'left', marginLeft: '20px' }} onClick={() => navigate(-1)}>
                        목록
                      </button>
                      <button style={{ float: 'right' }} onClick={handleDelete}>
                        삭제
                      </button>
                      {/* <button style={{ float: 'right', marginRight: '10px' }} onClick={handleUpdate}>
                        수정
                      </button> */}
                    </div>
                  </GymInfo>
                ) : (
                  <>
                    <GymInfo>
                      <div className="gym-info-one" style={{ float: 'left', justifyContent: 'space-between', padding: '10px' }}>
                        <p style={{ marginLeft: '30px' }}>카테고리: {community?.category}</p>
                        <p style={{ marginLeft: '30px' }}>작성자: {community?.email}</p>
                        <p style={{ marginLeft: '30px', marginTop: '15px' }}>닉네임: {community?.nickname}</p>
                        <p style={{ marginTop: '50px', marginLeft: '30px' }}>그룹명: {community?.groupname}</p>
                        <div style={{ marginTop: '20px', marginLeft: '30px' }}>경력 및 수상내역
                          <br />
                          <textarea readOnly={true} defaultValue={community?.career} style={{ width: '320px' }}></textarea>
                        </div>
                        <div style={{ display: 'flex', marginTop: '20px', marginLeft: '30px' }}>
                          <p>시작시간: {community?.stime}</p>
                          <p style={{ marginLeft: '35px' }}>~</p>
                          <p style={{ marginLeft: '35px' }}>종료시간: {community?.etime}</p>
                        </div>
                      </div>
                      <div style={{ float: 'right', display: 'flex', marginLeft: '30px', marginTop: '10px' }}>
                        장소: <textarea readOnly={true} defaultValue={community?.location} style={{ marginLeft: '10px', width: '300px', height: '30px' }}></textarea>
                      </div>
                      <div style={{ float: 'right', display: 'flex', marginLeft: '30px', marginTop: '15px' }}>
                        <MapContainer searchPlace={community?.location} />
                      </div>
                    </GymInfo>

                    <GymInfoTwo style={{ marginTop: '20px' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <p style={{ margin: '0 10px' }}>실력: {community?.tag1}</p>
                          <p style={{ margin: '0 10px' }}>분위기: {community?.tag2}</p>
                          <p style={{ margin: '0 10px' }}>스타일: {community?.tag3}</p>
                        </div>
                        <textarea readOnly={true} defaultValue={community?.title} style={{ marginTop: '15px', marginLeft: '20px', height: '60px', width: '720px' }}></textarea>
                        <textarea readOnly={true} defaultValue={community?.content} style={{ marginTop: '15px', marginLeft: '20px', height: '250px', width: '720px' }}></textarea>
                        <button style={{ float: 'left', marginLeft: '20px' }} onClick={() => navigate(-1)}>
                          목록
                        </button>
                        <button style={{ float: 'right', marginRight: '40px' }} onClick={handleDelete}>
                          삭제
                        </button>
                        {/* <button style={{ float: 'right', marginRight: '10px' }} onClick={handleUpdate}>
                          수정
                        </button> */}
                        <div style={{ marginTop: '80px', marginRight: '40px' }}>
                          {community.del !== 1 && (
                            <>
                              <BtnOne style={{ float: 'right' }} type="button" onClick={() => { handleJoin(); handleJoin2(); }}>
                                가입하기
                              </BtnOne>
                              <div style={{ float: 'right', marginRight: '15px', marginTop: '7.5px' }}>
                                가입에 필요한 포인트:
                                <p style={{ float: 'right', marginRight: '15px', marginLeft: '5px' }}>{community?.price}</p>
                              </div>
                            </>
                          )}
                        </div>

                      </div>
                    </GymInfoTwo>
                  </>

                )}
              </>
            )}
          </Col>
          <CommunityBanner />
        </Row>
      </Container>
      <Footer marginTop={'30px'} />
    </>
  );
}

export default CommunityDetail;