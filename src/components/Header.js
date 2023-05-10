import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


function Header() {
  const [logIn, setLogIn] = useState(false);
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const logInUser = JSON.parse(localStorage.getItem("login"));
    if (logInUser && logInUser.nickname) {
      setLogIn(true);
      setNickname(logInUser.nickname);
    }
  }, []);

  return (
    <Navbar bg="light" expand="lg" style={{ padding: "0.5rem 1rem" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="/gpt_logo.png"
              style={{
                width: "6vw",
                marginRight: "1rem",
              }}
              alt="GPT Logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mx-auto">
          <NavDropdown title="GYMS" id="gyms-dropdown" style={{ marginLeft: "5vw" }}>
            <NavDropdown.Item as={Link} to="/gyms">
              GYMS
            </NavDropdown.Item>            
            <NavDropdown.Item as={Link} to="/trainers">
              TRAINERS
            </NavDropdown.Item>
          </NavDropdown>

            <Nav.Link
              as={Link}
              to="/information"
              className="nav-link"
              style={{ marginLeft: "5vw" }}
            >
              INFORMATION
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/community/Home"
              className="nav-link"
              style={{ marginLeft: "5vw" }}
            >
              MAKEGROUP
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/guide"
              className="nav-link"
              style={{ marginLeft: "5vw" }}
            >
              GUIDE
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto" style={{ marginTop: "-6rem" }}>
          {logIn ? (
        <>
          <Nav.Link
            as={Link}
            to="/mypage"
            className="nav-link"
            style={{ fontSize: "0.9rem" }}
          >
            {nickname}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/logout"
            className="nav-link"
            style={{ fontSize: "0.9rem" }}
          >
            LOGOUT
          </Nav.Link>
        </>
      ) : (
        <>
          <Nav.Link
            as={Link}
            to="/mypage"
            className="nav-link"
            style={{ fontSize: "0.9rem" }}
          >
            MYPAGE
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/login"
            className="nav-link"
            style={{ fontSize: "0.9rem" }}
          >
            LOGIN
          </Nav.Link>
        </>
      )}
    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
