import React, { useEffect, useState } from 'react';
import Mypageheader from './Mypageheader';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';



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
            alert(err)
        });
    }, [])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className='cal_layout'>
            <Mypageheader />
            <div className="cal_box" >
            <FullCalendar 
              defaultView="dayGridMonth"
              plugins={[ dayGridPlugin ]}
              events={[
                { title: 'event 1', date: '2023-05-12' },
                { title: 'event 2', date: '2023-05-21' }
            ]}
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
                        <input type="text" placeholder='오늘 한 운동' onChange={setEvent}/>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        취소
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
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
