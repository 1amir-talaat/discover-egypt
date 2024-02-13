import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavbarComponant() {
  // by basmala
  const {language}=useLanguage();
  return (   
    language=="en"?
    //Navbar in English
      <Navbar expand="xxl" className="bg-warning ">
          <Container fluid>
            <Navbar.Brand href="#">Discover Egypt</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '200px' }}
                navbarScroll
              >
                <Nav.Link href="#action1" className='nav-link'>See & Do</Nav.Link>
                <Nav.Link href="#action2" className='nav-link'>Plan Your Trip</Nav.Link>
                <Nav.Link href="#action3" className='nav-link'>Travel Essentials</Nav.Link>
                <Nav.Link href="#action4" className='nav-link'>Egypt Calendar</Nav.Link>
                <Nav.Link href="#action5" className='nav-link'>Experiences</Nav.Link>
                <Nav.Link href="#action6" className='nav-link'>Egypt Map</Nav.Link>
                <NavDropdown className='lang-icon' title="lang" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Arabic</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">English</NavDropdown.Item>
                </NavDropdown>
              <Form className="d-flex form ">
                <Nav.Link href="#action7" className='nav-link user'>
                  language
                </Nav.Link>
                <Form.Control
                  type="search"
                  placeholder="Search For A Place"
                  className="me-1"
                  aria-label="Search"
                />
                <Button variant="dark">Search</Button>
              </Form>  
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        // Navbar in Arabic
        :<Navbar expand="xxl" className="bg-warning ">
        <Container fluid>
          <Navbar.Brand className="brand" href="#">اكتشف مصر </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" className='nav-link'>معالم وأنشطة</Nav.Link>
              <Nav.Link href="#action2" className='nav-link'> خطط رحلتك </Nav.Link>
              <Nav.Link href="#action3" className='nav-link'>أساسيات السفر </Nav.Link>
              <Nav.Link href="#action4" className='nav-link'>تقويم الفعاليات </Nav.Link>
              <Nav.Link href="#action5" className='nav-link'>التجارب السياحية</Nav.Link>
              <Nav.Link href="#action6" className='nav-link'>الخريطة التفاعلية </Nav.Link>
              <NavDropdown className='lang-icon' title="اللغة" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">عربي</NavDropdown.Item>
                <NavDropdown.Item href="#action4">انجليزي</NavDropdown.Item>
              </NavDropdown>
            <Form className="d-flex form ">
              <Nav.Link href="#action7" className='nav-link user'>ya</Nav.Link>
              <Form.Control
                type="search"
                placeholder="ابحث عن مكان"
                className="me-1"
                aria-label="Search"
              />
              <Button variant="dark">بحث</Button>
            </Form>  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
}

export default NavbarComponant;
