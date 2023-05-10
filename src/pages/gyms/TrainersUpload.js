import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './TrainersUpload.module.css';

const TrainersUpload = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const quillRef = useRef();
  const [previewImage, setPreviewImage] = useState(null);
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  
    // 이미지를 Quill 에디터에 삽입
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const imageBase64 = reader.result;
    const quill = quillRef.current.getEditor();
    quill.focus(); // 포커스 주기
    const range = quill.getSelection(true); // 포커스가 있는 상태에서 range 얻기
    quill.insertEmbed(range.index, "image", imageBase64);
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
};
  

  return (
    <>
      <Header />
      <div className={styles['upload-container']}>
        <form onSubmit={handleSubmit} className={styles['upload-form']}>
          <label className={styles['upload-label']}></label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles['upload-input']}
            placeholder="제목을 기입해주세요"
          />
          <label className={styles['upload-label']}></label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles['upload-file']}
          />
          {previewImage && (
                  <div className={styles['image-preview']}>
                    <img src={previewImage} alt="preview" />
                  </div>
                )}
                
          <label className={styles['upload-label']}></label>
          <ReactQuill
            ref={quillRef} // ref 추가
            value={content}
            onChange={(e) => setContent(e)}
            className={`${styles['upload-textarea']} ${styles['upload-quill']}`}
            theme="snow"
          />
          <br/>
          <button type="submit" className={styles['upload-submit']}>글 작성</button>
              </form>
          
            </div>
            <Footer />
          </>
  );
};

export default TrainersUpload;
