import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';

import { mainLogo } from "../../../asserts/images";
import CustomButton from "../../CustomButton";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="border-bottom pb-2">
          <Navbar.Brand href="#" as={Link} to="/" className="mainLogoImg">
            <img src={mainLogo} alt="site_logo"></img>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About us
              </Nav.Link>
              <Nav.Link as={Link} href="#" to="/portfolio">
                portfolio
              </Nav.Link>
              <Nav.Link as={Link} href="#" to="/shop">
                shop
              </Nav.Link>
              <Nav.Link as={Link} href="#" to="/blogs">
                blogs
              </Nav.Link>
              <Nav.Link as={Link} href="#" to="/contact-us">
                contact us
              </Nav.Link>
            </Nav>

            <div className="d-flex">
              <CustomButton
                type="button"
                className=""
                text="login"
                onClick={() => navigate("/about")}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
