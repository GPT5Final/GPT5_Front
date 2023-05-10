import React, { useState,useRef } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import { Footer } from '../components/Footer';


function Register() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [birth, setBirth] = useState('');

  const [profile, setProfile] = useState("default.png");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef();

  let history = useNavigate();
  
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImage(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
}

const handleClick = () => {
    fileInputRef.current.click();
};

const deleteClick = () => {
    setPreviewUrl(null);
    setImage(null);
}

  function account(e){
    e.preventDefault();

      const formData = new FormData();
            formData.append("email", email);
            formData.append("pwd", pwd);
            formData.append("nickname", nickname);
            formData.append("gender", gender);
            formData.append("name", name);
            formData.append("birth", birth);
            formData.append("contact", contact);
            formData.append("profile", profile);
            formData.append("image", image);
    axios.post("http://localhost:3000/addmember", formData )
    .then(function(resp){
        if(resp.data === "YES"){
            alert('정상적으로 가입되었습니다');
            history("/");  // 이동(link)
        }else{
            alert('가입되지 않았습니다');
        }
    })
    .catch(function(err){
        alert('err')
    })
//   else{
//     const requestBody = {
//       email: email,
//       pwd: pwd,
//       nickname: nickname,
//       gender: gender,
//       name: name,
//       contact: contact,
//       birth: birth,
//       profile: profile,
//       image: null,
//   };
//   axios.post("http://localhost:3001/addmembernull", requestBody, {
//       headers: {
//           "Content-Type": "application/json",
//       },
//   }).then((response) => {
//       console.log(response.data);
//       alert("이미지가 없는 상태로 회원가입 되었음");
//       window.location.reload();
//   });
//   }
// }
  }
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2 className="text-center mb-4">회원가입</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>이메일</Form.Label>
                <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="이메일을 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control onChange={(e)=>setPwd(e.target.value)} type="password" placeholder="비밀번호를 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>비밀번호 확인</Form.Label>
                <Form.Control type="password" placeholder="비밀번호를 다시 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>닉네임</Form.Label>
                <Form.Control onChange={(e)=>setNickname(e.target.value)} type="text" placeholder="닉네임을 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>이름</Form.Label>
                <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="이름을 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>성별</Form.Label>
                <Form.Select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="" disabled>
                    성별을 선택하세요
                  </option>
                  <option value="M">남성</option>
                  <option value="F">여성</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>생년월일</Form.Label>
                <Form.Control onChange={(e)=>setBirth(e.target.value)} type="date" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>연락처</Form.Label>
                <Form.Control onChange={(e)=>setContact(e.target.value)} type="tel" placeholder="전화번호를 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3">
              <div className='edit-form-content'>
                            {previewUrl ? (
                                <div>
                                    <img src={previewUrl}
                                         alt="프로필 이미지"
                                         onClick={handleClick}
                                         style={{cursor: "pointer"}}
                                         width="130"
                                         height="130"
                                    /><br/>
                                    <button onClick={deleteClick}>삭제</button>
                                </div>
                            ) : (
                                <div>
                                    <img
                                        src={`http://localhost:3000/${profile}`}
                                        alt="프로필 이미지"
                                        onClick={handleClick}
                                        style={{cursor: "pointer"}}
                                        width="130"
                                        height="130"
                                    />
                                </div>
                            )}
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                style={{display: "none"}}
                            />
                        </div>             
              </Form.Group>
              <Button variant="primary" type="button" className="w-100 mt-3" onClick={account} >
                회원가입
              </Button>
            </Form>
            <div className="mt-3 text-center">
              이미 계정이 있으신가요? <Link to="/login">로그인</Link>
            </div>
            
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Register;