import React, { useState,useEffect,useMemo } from "react";
import { Container, Button,Form } from "react-bootstrap";
import Mypageheader from './Mypageheader';
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

    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            updateBtn(); // Enter 입력이 되면 클릭 이벤트 실행
        }
      };

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
                alert('정상적으로 변경되었습니다.');
            }else{
                alert('변경에 실패하였습니다.');
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
                    
                    <h5 >{email}</h5>
                    <Form.Label>비밀번호 수정</Form.Label><br/>
                    <Form.Control type="password" style={{width:"500px", display:"inline-block"}} onChange={(e)=>setPwd(e.target.value)} onKeyUp={handleOnKeyPress}/>
                    
                    <Button className="up_btn" variant="outline-dark" type="button" size="sm" onClick={updateBtn}>수정</Button>
                    <Form.Label>닉네임 수정</Form.Label><br/>
                    <Form.Control type="text" style={{width:"500px", display:"inline-block"}} onChange={(e)=>setNickname(e.target.value)} placeholder={nickname} onKeyUp={handleOnKeyPress}/>
                    
                    <Button className="up_btn" variant="outline-dark" type="button" size="sm" onClick={updateBtn}>수정</Button>
                    <Form.Label>연락처</Form.Label><br/>
                    <Form.Control type="text" style={{width:"500px", display:"inline-block"}} onChange={(e)=>setContact(e.target.value)} placeholder={contact} onKeyUp={handleOnKeyPress}/>
                    <Button className="up_btn" variant="outline-dark" type="button" size="sm" onClick={updateBtn}>수정</Button>

                    
                </Form.Group>
            </Form>
        </Container>
        </div>
        
    )
}

export default Mypage;