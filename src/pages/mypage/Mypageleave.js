import React, { useState } from "react";
import Mypageheader from './Mypageheader';
import { Button, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


function Mypageleave(){
    const [email, setEmail] = useState("");
    const [leavecheck, setLeavecheck] = useState('');

    let history = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function leave(e){
        e.preventDefault();
        let dm = JSON.parse(localStorage.getItem("login"));

        axios.post("http://localhost:3000/delmember",null, { params:dm })
        .then(function(resp){
            if(resp.data === "YES"){
                alert('탈퇴 성공');
                history("/logout")
            }else{
                alert('탈퇴 실패');
            }
        })
        .catch(function(err){
            alert(err)
        })
    }
    return(
        <div className='main_layout'>
            <Mypageheader />
            <Container className="main_box" >
                <h3>탈퇴안내</h3>
                <p>회원탈퇴를 신청하기 전에 안내 사항을 꼭 확인해주세요.</p>

                <p>사용하고 계신 이메일({email})는 탈퇴할 경우 재사용 및 복구가 불가능합니다.</p>
                <p>탈퇴한 이메일은 본인과 타인모두 재사용 및 복구가 불가하오니 신중하게 선택하시기 바랍니다.</p><br /><br />

                <div>
                <p>탈퇴 후에는 이메일 {email} 로 다시 가입할 수 없으며 아이디와 데이터는 복구할 수 없습니다.</p>
                <p>게시판형 서비스에 남아 있는 게시글은 탈퇴 후 삭제할 수 없습니다.</p>
                </div>
                <Button  variant="dark" size="sm" onClick={handleShow}>
                    탈퇴하기
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>나의 운동</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            탈퇴하시려면 y를 입력해주세요<br/><br/>
                            <input type="text"></input>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="dark" size="sm" onClick={leave}>
                        탈퇴
                    </Button>
                    <Button variant="dark" size="sm" onClick={handleClose}>
                        취소
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
            
        </div>
    )
}

export default Mypageleave;