import React from 'react';
import Mypageheader from './Mypageheader';
import { Container } from "react-bootstrap";

function Mypagereference(){
    return(
        <div className='main_layout'>
            <Mypageheader />
            <Container className="main_box" >
                문의
            </Container>
        </div>
    )
}

export default Mypagereference
