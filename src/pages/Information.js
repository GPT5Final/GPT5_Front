import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
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
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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

      <Container
        style={{
          alignItems: "center",
          marginTop: "3vh",
          width: "100%",
          height: "300px",
          maxHeight: "300px",
        }}
      >
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./banner.png"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./banner.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./banner.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}

export default Information;
