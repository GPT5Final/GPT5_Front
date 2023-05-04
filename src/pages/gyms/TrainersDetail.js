import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TrainersDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trainer, setTrainer] = useState(null);
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    const logInUser = JSON.parse(localStorage.getItem("login"));
    if (logInUser && logInUser.nickname) {
      setUserAuth(logInUser.auth);
    }
  }, []);

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
    <div>
      <img src={`http://localhost:3000/static/images/${trainer.newfilename}`} alt={trainer.nickname} />
      <div>이름: {trainer.nickname}</div>
      <div>제목: {trainer.title}</div>
  
      {userAuth === 0 && (
        <>
          <button onClick={handleUpdate}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </>
      )}
    </div>
  );
};

export default TrainersDetail;