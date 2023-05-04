import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
import axiosInstance from '../../axiosInstance'; // 경로는 실제 파일 위치에 맞게


const TrainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TrainerItem = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: 1rem;
  cursor: pointer;
  background-color: #f1f1f1;
  padding: 1rem;
  border-radius: 10px;
  pointer-events: auto;
`;


const TrainerImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 1rem;
  pointer-events: auto;
`;

const TrainerContent = styled.div`
  display: flex;
  flex-direction: column;
  pointer-events: auto;
`;

const Trainers = () => {
  const [logIn, setLogIn] = useState(false);
  const [nickname, setNickname] = useState("");
  const [trainers, setTrainers] = useState([]);
  const [userAuth, setUserAuth] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const logInUser = JSON.parse(localStorage.getItem("login"));
    if (logInUser && logInUser.nickname) {
      setLogIn(true);
      setNickname(logInUser.nickname);
      setUserAuth(logInUser.auth);
    }
  }, []);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axiosInstance.get("/trainerlist", {
          params: {
            nickname: nickname,
          },
        });
        setTrainers(
          response.data.trainers.map((trainer) => ({
            ...trainer,
            isLiked: false, // 초기 상태를 false로 설정
            }))
          );
        } catch (error) {
        console.error("트레이너 데이터를 가져오는데 실패했습니다.", error);
        }
      };
  
      fetchTrainers();
    }, [nickname]);
  

  const handleTrainerClick = (id) => {
    navigate(`/trainer/${id}`);
  };

  const handleLikeButtonClick = async (event, id, isLiked) => {
    event.stopPropagation();
    console.log('handleLikeButtonClick 호출됨');
    console.log('id:', id);
    console.log('isLiked:', isLiked);
  
    try {
      const formData = new FormData();
      formData.append("pt_seq", id);
      formData.append("nickname", nickname);
      formData.append("isLiked", !isLiked);
  
      const response = await axios.post("http://localhost:3000/toggleLike", formData);
  
      if (response.status === 200) {
        const { success, updatedLikes } = response.data;
        if (success) {
          console.log('updatedLikes:', updatedLikes);
  
          setTrainers((prevTrainers) =>
            prevTrainers.map((trainer) => {
              if (trainer.seq === id) {
                return { ...trainer, isLiked: !isLiked, love: updatedLikes };
              }
              return trainer;
            })
          );
        }
      }
    } catch (error) {
      console.error("좋아요 기능에 문제가 발생했습니다.", error);
    }
  };
  
  
  

  const handleCreate = () => {
    if (userAuth === 0) {
      navigate('/trainersupload');
    } else {
      alert("운영자만 글을 작성할 수 있습니다.");
    }
  };

  return (
    <>
      <Header />
      <TrainerList>
        {/* 트레이너 정보 출력 */}
        {trainers.length > 0 ? (
          trainers.map((trainer) => (
            <TrainerItem key={trainer.seq} onClick={() => handleTrainerClick(trainer.seq)}>           
            {/* <TrainerImage src={`http://localhost:3000/resources/static/images/${trainer.newfilename}`} alt={trainer.nickname} /> */}
            {/* <TrainerImage src={`/resources/static/images/${trainer.newfilename}`} alt={trainer.nickname} /> */}
            {/* <TrainerImage src={`/resources/${trainer.newfilename}`} alt={trainer.nickname} /> */}
            {/* <TrainerImage src={`http://localhost:3000/${trainer.newfilename}`} alt={trainer.nickname} /> */}
            {/* <TrainerImage src={`${trainer.newfilename}`} alt={trainer.nickname} /> */}
            <TrainerImage src={`http://localhost:3000/static/images/${trainer.newfilename}`} alt={trainer.nickname} />
            {/* <TrainerImage src={`/images/${trainer.newfilename}`} alt={trainer.nickname} /> */}
            
              <TrainerContent>
                <div>이름: {trainer.nickname}</div>
                <div>제목: {trainer.title}</div>
                <button
                  style={{ pointerEvents: 'auto' }}
                  onClick={(e) => {
                    handleLikeButtonClick(e, trainer.seq, trainer.isLiked);
                  }}
                >
                  {trainer.isLiked ? "💔 좋아요 취소" : "❤️ 좋아요"}
                </button>
                <span>{trainer.love}개</span>
              </TrainerContent>
            </TrainerItem>
          ))
        ) : (
          <div>게시글이 없습니다.</div>
        )}


        {userAuth === 0 && <button onClick={handleCreate}>글 작성</button>}
      </TrainerList>
      <Footer />
    </>
  );
};

export default Trainers;
