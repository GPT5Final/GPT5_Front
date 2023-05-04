import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';


const Banner = styled.div`
    border: 1px solid black;
    border-radius: 15px;
    text-align: center;
    background-color: white;
    height: 110px;
    font-size: 15px;
`;

const Chat = styled.div`
    margin: 0 auto;
    width: 70px;
    height: 70px;
    background-color: #C4C4C4;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 50px solid #C4C4C4; */
    border-radius: 50%;
`;

function CommunityBanner() {
    return (
        <Container style={{ float: 'left', textAlign: 'center', backgroundColor: '#C4C4C4', borderRadius: '30px', width: '250px', height: '630px' }}>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link as={Link} to="/community/Home" className="nav-link" style={{ color: 'black', textDecoration: 'none' }}>
                    <div>
                        <Banner>배너 그룹 홍보</Banner>
                    </div>
                </Nav.Link>
                <Nav.Link as={Link} to="/community/Home" className="nav-link" style={{ color: 'black', textDecoration: 'none' }}>
                    <div >
                        <Banner>배너 그룹 홍보</Banner>
                    </div>
                </Nav.Link>
                <Nav.Link as={Link} to="/community/Home" className="nav-link" style={{ color: 'black', textDecoration: 'none' }} >
                    <div >
                        <Banner>배너 그룹 홍보</Banner>
                    </div>
                </Nav.Link>
                <Nav.Link as={Link} to="/community/Home" className="nav-link" style={{ color: 'black', textDecoration: 'none' }}>
                    <div >
                        <Banner>배너 그룹 홍보</Banner>
                    </div>
                </Nav.Link>
                <Nav.Link as={Link} to="/community/Home" className="nav-link" style={{ color: 'black', textDecoration: 'none' }}>
                    <div >
                        <Banner>배너 그룹 홍보</Banner>
                    </div>
                </Nav.Link>
            </Nav>
            <div style={{ marginTop: '50px' }}>
                <Chat>
                    채팅
                </Chat>
            </div>
        </Container>
    );
}

export default CommunityBanner;