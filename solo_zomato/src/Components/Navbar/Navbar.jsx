import React from "react";
import { Button, Container, Dropdown, Form, Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { MdLocationPin } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import "./Navbar.css";

export function My_Navbar() {
  return (
    <div>
      <Navbar
        className="header d-flex"
        fixed="top"
        expand="lg"
        variant="light"
        bg="light"
      >
        <Container className="d-flex">
          <Navbar.Brand href="/">
            <Image
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="zomato_logo"
              className="header_img"
              width="100"
              height="40"
            />
          </Navbar.Brand>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 zomato_search"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <div>
            <div>
              <Dropdown className="d-flex main-location-container">
                <Dropdown.Toggle className="bg-transparent text-dark border-light h-100 dropdown_container">
                  <MdLocationPin className="icon_location" /> Bangalore
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
                <div className="location-search-separator"></div>
                <div className="header-search d-flex">
                  <BiSearch className="header-search-icon" />
                  <div className="m-auto" >
                    <input type="text" placeholder="search for restaurant, cuisine or a dish" className="search-input" />
                  </div>
                </div>
              </Dropdown>
            </div>
          </div>
          <Navbar.Text>
            Signed in as: <a href="#">Dhruv Bhardwaj</a>
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
}
