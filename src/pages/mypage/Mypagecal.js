import React, { useEffect, useState } from 'react';
import Mypageheader from './Mypageheader';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import axios from 'axios';
import './Mypagecal.css';


function Mypagecal(){
    const [email, setEmail] = useState('');
    const [event, setEvent] = useState('');
    const [dateandtime, setDateandtime] = useState('');
    
    

    const TokenEmail = localStorage.getItem("email");
    const token = { email: TokenEmail };

    useEffect(() => {
        axios.post("http://localhost:3000/allmember", token)
        .then((resp) => {
            setEmail(resp.data.email);
            setEvent(resp.data.event);
            setDateandtime(resp.data.dateandtime);
        })
        .catch((err) => {
            alert(err);
        });
    }, [])

    function calHandler() {
        
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleDateClick(arg){
        alert(arg.dateStr);
    }

    function renderEventContent(resp){
        axios.get("http://localhost:3000/allmember", token)
        .then((resp)=> {
            alert(resp.data.email);
        })
        .catch((err)=>{
            alert(err);
        })
    }
    return(
        <div className='cal_layout'>
            <Mypageheader />
            <div className="cal_box" >
            <FullCalendar
                plugins={[ dayGridPlugin, interactionPlugin ]}
                locale="ko"
                dateClick={handleDateClick}
                eventContent={renderEventContent}
            />
            <>
                <Button variant="primary" onClick={handleShow}>
                    일정추가
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>나의 운동</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>날짜선택</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>
                        <input type='text' placeholder={email}></input>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        취소
                    </Button>
                    <Button variant="primary" onClick={calHandler}>
                        등록
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
            </div>
        </div>
    )
}

export default Mypagecal
