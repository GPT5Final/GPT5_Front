import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Footer } from '../../components/Footer';
import styles from './TrainersDetail.module.css';
import Header from '../../components/Header';
import axiosInstance from '../../axiosInstance';

const TrainersDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trainer, setTrainer] = useState(null);
  const [userAuth, setUserAuth] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const logInUser = JSON.parse(localStorage.getItem("login"));
    if (logInUser && logInUser.nickname) {
      setUserAuth(logInUser.auth);
    }
  }, []);

  useEffect(() => {
    if (trainer) {
      setIsLiked(trainer.isLiked);
    }
  }, [trainer]);


  const handleLike = async () => {
    const formData = new FormData();
    formData.append("pt_seq", id);
    formData.append("nickname", JSON.parse(localStorage.getItem("login")).nickname);
    formData.append("isLiked", JSON.stringify(!isLiked));
  
    try {
      const response = await axiosInstance.post("/toggleLike", formData, {
        headers: { 'Content-Type': 'multipart/form-data; boundary=' + formData._boundary },
      });
  
      if (response.status === 200) {
        const { success, updatedLikes } = response.data;
        if (success) {
          setTrainer({ ...trainer, isLiked: !isLiked, love: updatedLikes });
          setIsLiked(!isLiked);
        }
      }
    } catch (error) {
      console.error("좋아요 기능에 문제가 발생했습니다.", error);
    }
  };

  const fetchTrainer = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/getTrainer?seq=${id}`);
      setTrainer(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTrainer();
  }, []);

  const handleUpdate = () => {
    // 글 수정 처리
  };

  const handleDelete = async () => {
    try {
      await axios.post(`http://localhost:3000/trainerdelete?seq=${id}`);
      alert("삭제완료");
      navigate('/trainers');
    } catch (error) {
      console.error(error);
    }
  };

  if (!trainer) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className={styles["detail-container"]}>
        <img
          className={styles["detail-image"]}
          src={`http://localhost:3000/static/images/${trainer.newfilename}`}
          alt={trainer.nickname}
        />
        <div className={styles["detail-info"]}>
          <div className={styles["detail-text"]}>이름: {trainer.title}</div>
          <div className={styles["detail-text"]}>내용: {trainer.content}</div>
          <div className={styles["detail-like"]}>
            <button
              onClick={handleLike}
              className={`${styles["detail-button"]} ${styles["like-button"]}`}
            >
              {isLiked ? "💔취소" : "❤️좋아요"}
            </button>
            <span>{trainer.love}</span>
          </div>
          {userAuth === 0 && (
            <div className={styles["detail-buttons"]}>
              <button onClick={handleUpdate} className={styles["detail-button"]}>
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

export default TrainersDetail;