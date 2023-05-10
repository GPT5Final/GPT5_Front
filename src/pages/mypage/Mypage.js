import React, { useState,useEffect } from "react";
import { Container, Button,Form } from "react-bootstrap";
import Mypageheader from './Mypageheader';
import { useNavigate } from 'react-router-dom';
import './Mypage.css';
import axios from 'axios';
import Mypagemenu from "./Mypagemenu";

function Mypage(){
    let history = useNavigate();

    const [nickname, setNickname] = useState("");
    const [pwd, setPwd] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");

    const TokenEmail = localStorage.getItem("email");
    const token = { email: TokenEmail };
    
    useEffect(() => {
        axios.post("http://localhost:3000/allmember", token)
            .then((response) => {
                setName(response.data.name);
                setEmail(response.data.email);
                setPwd(response.data.pwd);
                setNickname(response.data.nickname);
                setContact(response.data.contact);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    
    async function updateBtn(){
        axios.post("http://localhost:3000/updatemembernull", null, { params:{email:email, pwd:pwd, nickname:nickname, contact:contact }} )
        .then(function(resp){
            if(resp.data === "YES"){
                axios.post("http://localhost:3000/allmember", token)
                .then(function(res){
                    let men = JSON.stringify(res.data);
                    localStorage.setItem("login", men);
                    window.location.reload();
                })
                .catch(function(err){
                    alert(err);
                });
                alert('정상적으로 변경');
            }else{
                alert('가입되지 않았습니다');
            }
        })
        .catch(function(err){
            alert('err')
        })
    }
    
    return(
        <div className="main_layout">
        <Mypageheader />
        <Container className="main_box" >
            <Mypagemenu />
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>이메일</Form.Label>
                    <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} placeholder={email} ></Form.Control>
                    <Form.Label>비밀번호 수정</Form.Label>
                    <Form.Control  type="password" onChange={(e)=>setPwd(e.target.value)} />
                    <Button className="up_btn" variant="primary" type="button" size="sm" onClick={updateBtn}>수정</Button>
                    <Form.Label>닉네임 수정</Form.Label>
                    <Form.Control type="text" onChange={(e)=>setNickname(e.target.value)} placeholder={nickname} />
                    <Button className="up_btn" variant="primary" type="button" size="sm" onClick={updateBtn}>수정</Button>
                    <Form.Label>연락처 수정</Form.Label>
                    <Form.Control type="text" onChange={(e)=>setContact(e.target.value)} placeholder={contact} />
                    <Button className="up_btn" variant="primary" type="button" size="sm" onClick={updateBtn}>수정</Button>
                </Form.Group>
            </Form>
            
        </Container>
        </div>
        
    )
}

export default Mypage;