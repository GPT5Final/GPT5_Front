import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
import './TrainersUpload.css';

const TrainersUpload = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const logInUser = JSON.parse(localStorage.getItem("login"));
    if (logInUser && logInUser.nickname) {
      setNickname(logInUser.nickname);
    }
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === undefined || title.trim() === '') {
      alert('제목을 입력해 주세요');
      return;
    }
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('file', file);
    formData.append('nickname', nickname);
  
    axios.post("http://localhost:3000/trainerwrite", formData)
      .then(res => {
        console.log(res.data);
        if (res.data === "YES") {
          alert("등록됐습니다.");
          navigate("/trainers");
        } else {
          alert("등록에 실패했습니다.");
        }
      }).catch(function (err) {
        alert(err);
      });
  };

  return (
    <>
      <Header /> {/* nickname을 props로 전달 */}
      <div className="upload-container">
        <form onSubmit={handleSubmit} className="upload-form">
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="upload-input"
          />
          <label>내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="upload-textarea"
          />
          <label>이미지 업로드</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="upload-file"
          />
          <button type="submit" className="upload-submit">글 작성</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default TrainersUpload;
