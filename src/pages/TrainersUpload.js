import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TrainerUpload = () => {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('experience', experience);
    formData.append('image', image);

    try {
      await axios.post('/api/trainers', formData);
      navigate('/trainers');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>트레이너 글 작성</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이름:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>경력:</label>
          <input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} />
        </div>
        <div>
          <label>사진:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button type="submit">작성</button>
      </form>
    </div>
  );
};

export default TrainerUpload;