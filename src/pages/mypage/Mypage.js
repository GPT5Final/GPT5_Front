import React, { useState,useEffect,useMemo } from "react";
import { Container, Button,Form } from "react-bootstrap";
import Mypageheader from './Mypageheader';
import Modal from 'react-bootstrap/Modal';
import './Mypage.css';
import axios from 'axios';
import Mypagemenu from "./Mypagemenu";

function Mypage(){
    
    const [nickname, setNickname] = useState("");
    const [pwd, setPwd] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");

    const TokenEmail = localStorage.getItem("email");
    const token = useMemo(() => ({ email: TokenEmail }), [TokenEmail]);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
    }, [token]);
    
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
                    <Form.Control type="email" style={{width:"500px"}} onChange={(e)=>setEmail(e.target.value)} placeholder={email} ></Form.Control>
                    <Form.Label>비밀번호 수정</Form.Label><br/>
                    <Form.Control type="password" style={{width:"500px", display:"inline-block"}} onChange={(e)=>setPwd(e.target.value)} />
                    
                    <Button className="up_btn" variant="outline-dark" type="button" size="sm" onClick={updateBtn}>수정</Button>
                    <Form.Label>닉네임 수정</Form.Label><br/>
                    <Form.Control type="text" style={{width:"500px", display:"inline-block"}} onChange={(e)=>setNickname(e.target.value)} placeholder={nickname} />
                    
                    <Button className="up_btn" variant="outline-dark" type="button" size="sm" onClick={updateBtn}>수정</Button>
                    <Form.Label>연락처</Form.Label><br/>
                    <Form.Control type="text" style={{width:"500px", display:"inline-block"}} onChange={(e)=>setContact(e.target.value)} placeholder={contact} />
                    
                    <Button  variant="outline-dark" size="sm" onClick={handleShow}>수정</Button>

                    
                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                        <Modal.Title >{name}님의 회원정보 중 닉네임을 수정시겠습니까?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Control type="text" onChange={(e)=>setNickname(e.target.value)} placeholder={nickname} />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="dark" size="sm" onClick={updateBtn}>수정</Button>
                        <Button variant="dark" size="sm" onClick={handleClose}>취소</Button>
                        </Modal.Footer>
                    </Modal>

                    
                </Form.Group>
            </Form>
        </Container>
        </div>
        
    )
}

export default Mypage;