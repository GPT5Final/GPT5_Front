import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';





function CommunityMenu() {
    return (
        <Container style={{ float: 'left', textAlign: 'center', padding: '5px', backgroundColor: '#C4C4C4', borderRadius: '30px', width: '200px', marginRight: '10px' }}>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link as={Link} to="/community/Home" className="nav-link" style={{ color: 'black', textDecoration: 'none' }}>
                    홈
                </Nav.Link>
                <Nav.Link as={Link} to="/community/ExerciseTalk" className="nav-link" style={{ marginTop: '30px', color: 'black', textDecoration: 'none' }}>
                    운동 이야기
                </Nav.Link>
                <Nav.Link as={Link} to="/community/PartnerMentor" className="nav-link" style={{ marginTop: '30px', color: 'black', textDecoration: 'none' }} >
                    인증멘토 찾기
                </Nav.Link>
                <Nav.Link as={Link} to="/community/MentorMentee" className="nav-link" style={{ color: 'black', textDecoration: 'none' }}>
                    멘토&멘티 찾기
                </Nav.Link>
                <Nav.Link as={Link} to="/community/MakeGroup" className="nav-link" style={{ marginTop: '50px', color: 'black', textDecoration: 'none' }} >
                    그룹 만들기
                </Nav.Link>
                <Nav.Link as={Link} to="/community/MyGroup" className="nav-link" style={{ color: 'black', textDecoration: 'none' }}>
                    나의 그룹
                </Nav.Link>
            </Nav>
        </Container>
    );
}

export default CommunityMenu;







