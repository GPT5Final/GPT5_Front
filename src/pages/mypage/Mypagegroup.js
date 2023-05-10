import React from 'react';
import Mypageheader from './Mypageheader';
import { Container } from "react-bootstrap";



function Mypagecal(){
    return(
        <div className='main_layout'>
            <Mypageheader />
            <Container className="cal_box" >
            그룹인가
            </Container>
        </div>
    )
}

export default Mypagecal
