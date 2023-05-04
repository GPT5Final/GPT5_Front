import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TrainersDetail = ({ isAdmin }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trainer, setTrainer] = useState(null);

  const fetchTrainer = async () => {
    try {
      const response = await axios.get(`/api/trainers/${id}`);
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
      await axios.delete(`/api/trainers/${id}`);
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
      <img src={trainer.image} alt={trainer.name} />
      <div>이름: {trainer.name}</div>
      <div>경력: {trainer.experience}</div>

      {isAdmin && (
        <>
          <button onClick={handleUpdate}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </>
      )}
    </div>
  );
};

export default TrainersDetail;