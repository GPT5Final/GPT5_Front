import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
import axiosInstance from '../../axiosInstance';


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
  background-color: white;
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
  justify-content: space-between;
  width: 100%;
  position: relative;
  pointer-events: auto;
`;

const LikeWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;
const LikeButton = styled.button`
  padding: 10px 20px;
  background-color: #ff6b81;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #fff;
    color: #ff6b81;
  }
`;

const LikeCount = styled.span`
  margin-left: 5px;
`;



const Trainers = () => {
  const [logIn, setLogIn] = useState(false);
  const [nickname, setNickname] = useState("");
  const [trainers, setTrainers] = useState([]);
  const [userAuth, setUserAuth] = useState(null);
  const navigate = useNavigate();
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
            content: removePTags(trainer.content), // <p> 태그 제거
            isLiked: false,
            }))
            .sort((a, b) => b.love - a.love) // 좋아요(love) 수를 기반으로 내림차순 정렬            
          );
          console.log(response.data)
          // console.log(response.data.trainer.trainers);
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
      const requestData = {
        ptSeq: id,
        nickname: nickname,
        isLiked: !isLiked,
      };
  
      const response = await axios.post("http://localhost:3000/toggleLike", requestData, {
        headers: { 'Content-Type': 'application/json' },
      });
  
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
              <TrainerImage src={`http://localhost:3000/static/images/${trainer.firstImage.newfilename}`} alt={trainer.nickname} />                          
                <TrainerContent>
                  <div>이름: {trainer.title}</div>
                  <div>경력: {trainer.content}</div>
                  <LikeWrapper>
                    <LikeButton
                      onClick={(e) => {
                        handleLikeButtonClick(e, trainer.seq, trainer.isLiked);
                      }}
                    >
                      {trainer.isLiked ? "💔 좋아요 취소" : "❤️ 좋아요"}
                    <LikeCount>{trainer.love}</LikeCount>
                    </LikeButton>
                  </LikeWrapper>
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
