import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand >
                    <Link to='/'><img 
                        src="./gpt_logo.png"
                        style={{
                            width: '13vw'
                        }}
                    ></img></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{ marginLeft: '9vw'}}>
                        <Nav.Link href="#home" style={{ marginLeft: '2vw'}}>
                            <Link style={{ textDecoration: 'none', color: '#505050'}} to="/gyms">GYMS</Link></Nav.Link>
                        <Nav.Link href="#link" style={{ marginLeft: '2vw'}} >
                            <Link style={{ textDecoration: 'none', color: '#505050'}} to="/charge">CHARGE</Link></Nav.Link>
                        <Nav.Link href="#link" style={{ marginLeft: '2vw'}}>
                            <Link style={{ textDecoration: 'none', color: '#505050'}} to="/makeGroup">MAKEGROUP</Link></Nav.Link>
                        <Nav.Link href="#link" style={{ marginLeft: '2vw'}}>
                            <Link style={{ textDecoration: 'none', color: '#505050'}} to="/stretching">STRETCHING</Link>
                        </Nav.Link>
                    </Nav>
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between',
                            marginBottom: '10vh',
                            fontSize: '15px'
                        }}
                    >
                        <div>coin:2000pt</div>
                        <div>MYPAGE</div>
                        <div>LOGOUT</div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
