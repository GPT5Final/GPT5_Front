import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

import Header from "../components/Header";

const StyledNavbar = styled(Navbar)`
  padding: 0;
  margin-bottom: 0;

  & .nav-link {
    font-family: "Helvetica Neue", sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    margin: 0 3rem;
  }
`;

function Information() {
  return (
    <>
      <Header />
      <div style={{ padding: "0.5rem 1rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "3.5rem", marginBottom: "0" }}>INFORMATION</h1>
      </div>

      <StyledNavbar expand="lg">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/charge">
              charge
            </Nav.Link>
            <Nav.Link as={Link} to="/payBbs">
              payBbs
            </Nav.Link>
            <Nav.Link as={Link} to="/payCoin">
              payCoin
            </Nav.Link>
          </Nav>
        </Container>
      </StyledNavbar>
    </>
  );
}

export default Information;
