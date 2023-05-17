import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './TrainersUpload.module.css';

const GymsUpload = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);
  const quillRef = useRef();
  const [previewImage, setPreviewImage] = useState([]);
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
    files.forEach((file, index) => {
      formData.append(`file`, file);
    });
    formData.append('nickname', nickname);
  
    axios.post("http://localhost:3000/gymwrite", formData) // 변경된 부분: endpoint 수정
      .then(res => {
        console.log(res.data);
        if (res.data === "YES") {
          alert("등록됐습니다.");
          navigate("/gyms"); // 변경된 부분: navigate 수정
        } else {
          alert("등록에 실패했습니다.");
        }
      }).catch(function (err) {
        alert(err);
      });
  };
  
  const handleImageChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files);
    setFiles(prev => [...prev, ...fileArray]);
    fileArray.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(prev => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handlePreviewImageClick = (index) => {
    const quill = quillRef.current.getEditor();
    quill.focus();
    const range = quill.getSelection(true);
    quill.insertEmbed(range.index, "image", previewImage[index]);
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
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles['upload-file']}
            multiple
          />
          {
            previewImage && previewImage.map((image, index) => (
              <div className={styles['image-preview']} key={index}>
                <img
                src={image}
                alt="preview"
                onClick={() => handlePreviewImageClick(index)}
                />
                </div>
                ))
            }
            <label className={styles['upload-label']}></label>
            <ReactQuill
                ref={quillRef}
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
    
export default GymsUpload;
