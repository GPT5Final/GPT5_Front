import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Trainers = ({ isAdmin }) => {
  const navigate = useNavigate();
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await axios.get('/api/trainers');
      setTrainers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTrainerClick = (trainerId) => {
    if (isAdmin) {
      navigate(`/trainers/${trainerId}`);
    }
  };

  const handleCreate = () => {
    navigate('/trainers/upload');
  };

  return (
    <div>
      {/* 트레이너 정보 출력 */}
      {trainers.map((trainer) => (
        <div key={trainer.id} onClick={() => handleTrainerClick(trainer.id)}>
          <img src={trainer.image} alt={trainer.name} />
          <div>이름: {trainer.name}</div>
          <div>경력: {trainer.experience}</div>
          <button onClick={trainer.handleLikeButtonClick}>{trainer.isLiked ? '좋아요 취소' : '좋아요'}</button>
          <span>{trainer.likes}개</span>
        </div>
      ))}
      {isAdmin && <button onClick={handleCreate}>글 작성</button>}
    </div>
  );
};

export default Trainers;
