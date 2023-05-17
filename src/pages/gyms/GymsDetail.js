import Header from '../../components/Header';
import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Footer } from '../../components/Footer';
import styles from './TrainersDetail.module.css';




const GymsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [gym, setGym] = useState(null);
  const [user, setUser] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  const removePTags = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const pTags = doc.getElementsByTagName("p");
    for (let i = 0; i < pTags.length; i++) {
      const pTag = pTags[i];
      pTag.outerHTML = pTag.innerHTML; // <p> 태그를 제거하고 내용만 남깁니다
    }
    return doc.body.innerHTML;
  }

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("login"));
    if (loggedInUser && loggedInUser.nickname) {
      setUser(loggedInUser);
    }
  }, []);

  useEffect(() => {
    if (gym) {
      setIsLiked(gym.isLiked);
    }
  }, [gym]);

  const handleLike = async () => {
    console.log("handleLike 함수 실행");
    if (!user) {
      alert("로그인이 필요한 기능입니다. 로그인해주세요.");
      navigate("/login");
      return;
    }
  
    const requestData = {
      gymSeq: id,
      nickname: user.nickname,
      isLiked: !isLiked,
    };
  
    try {
      console.log("axios.post called", requestData);
      const response = await axios.post("http://localhost:3000/gtoggleLike", requestData, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.status === 200) {
        const { success, updatedLikes } = response.data;
        if (success) {
          setGym({ ...gym, isLiked: !isLiked, love: updatedLikes });
          setIsLiked(!isLiked);
          console.log("handleLike called");
        }
      } else {
        console.log("응답 상태 코드:", response.status);
        console.log("응답 데이터:", response.data);
      }
    } catch (error) {
      console.error("좋아요 기능에 문제가 발생했습니다.", error);
    }
  };

  const fetchGym = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/getGym?gSeq=${id}`);
      const gymData = response.data;
      if (gymData.isLiked !== undefined) {
        setIsLiked(gymData.isLiked);
      }
      // <p> 태그 제거
      gymData.content = removePTags(gymData.content);
      setGym(gymData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    fetchGym();
  }, [fetchGym]);

  // 수정
  const handleUpdate = () => {
    if (!user || user.auth !== 0) {
      alert("권한이 없습니다.");
      return;
    }
    navigate('/GymsUpdate', { state: { id } });
  };


  // 삭제
  const handleDelete = async () => {
    if (!user || user.auth !== 0) {
      alert("권한이 없습니다.");
      return;
    }

    try {
      await axios.post(`http://localhost:3000/gymdelete?gSeq=${id}`);
      alert("삭제완료");
      navigate('/gyms');
    } catch (error) {
      console.error(error);
    }
  };

  if (!gym) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className={styles["detail-container"]}>
        {gym.images.map((image, index) => (
          <img
            key={index}
            className={styles["detail-image"]}
            src={`http://localhost:3000/static/images/${image.newfilename}`}
            alt={gym.nickname}
          />
        ))}
        <div className={styles["detail-info"]}>
          <div className={styles["detail-info-texts"]}>
            <div className={`${styles["detail-text"]} ${styles["detail-text-bold"]}`}>{gym.title}</div>
            <div className={`${styles["detail-text"]} ${styles["detail-text-bold"]}`}>편의시설: {gym.content}</div>
          </div>
          <div className={styles["detail-like"]}>
            <button
              onClick={handleLike}
              className={`${styles["detail-button"]} ${styles["like-button"]}`}
            >
              {isLiked ? "💔좋아요취소" : "❤️좋아요"}
              <span>{gym.love}</span>
            </button>
          </div>
          {user && user.auth === 0 && (
            <div className={styles["detail-buttons"]}>
              {/* <button onClick={handleUpdate} className={styles["detail-button"]}> */}
              <button onClick={() => handleUpdate(gym.id)} className={styles["detail-button"]}>
                수정
              </button>
              <button onClick={handleDelete} className={styles["detail-button"]}>
                삭제
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GymsDetail;