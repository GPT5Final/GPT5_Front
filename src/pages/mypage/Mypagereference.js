import React from 'react';
import Mypageheader from './Mypageheader';
import { Button, Container,Form } from "react-bootstrap";

function Mypagereference(){
    return(
        <div className='main_layout'>
            <Mypageheader />
            <Container className="main_box" >
            
                <h3>원하는 내용을 찾을 수 없으셨나요 ?</h3>
                <p>어떠한 내용이라도 답변드릴 준비가 되어있습니다 !</p>
                <p>문의를 보내주세요 !</p>
                <p>최대한 빨리 답변해 드리겠습니다 !</p>
                <Form.Select aria-label="Default select example">
                <option>문의하기</option>
                <option value="1">헬스장</option>
                <option value="2">트레이너</option>
                <option value="3">코인</option>
            </Form.Select>
            <textarea style={{width:'575px', height: "400px"}}></textarea>
            <Button type="button">전송</Button>
            </Container>
        </div>
    )
}

export default Mypagereference;
