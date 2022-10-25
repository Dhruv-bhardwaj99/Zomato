import React from "react";
import { Container, Dropdown, Image } from "react-bootstrap";
import "./Footer.css";

export function Footer() {
  return (
    <div className="main_footer">
      <Container className="mt-4 d-flex justify-content-between">
        <div className="logo_container p-1">
          <Image
            className="img_logo"
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt="zomato_logo"
          />
        </div>
        <Dropdown className="w-25 d-flex justify-content-center gap-3">
          <Dropdown.Toggle
            className="bg-transparent text-dark border-dark h-100"
            id="dropdown-basic"
          >
            India
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
          <Dropdown.Toggle
            className="bg-transparent text-dark border-dark h-100"
            id="dropdown-basic"
          >
            English
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <Container className="d-flex mt-5">
        <div className="font_footer w-25">
          <h6 className="footer_header mb-3">About Zomato</h6>
          <div className="font-weight-light ul_font">
            <ul
              className="bg-transparent w-100 footer_list px-0"
              variant="flush"
            >
              <li>Who We Are</li>
              <li>Blog</li>
              <li>Work With Us</li>
              <li>Investor Relations</li>
              <li>Report Fraud</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="font_footer w-25">
          <h6 className="footer_header mb-3">Zomaverse</h6>
          <div className="font-weight-light ul_font">
            <ul
              className="bg-transparent w-100 footer_list px-0"
              variant="flush"
            >
              <li>Zomato</li>
              <li>Feeding India</li>
              <li>Hyperpure</li>
              <li>Zomaland</li>
            </ul>
          </div>
        </div>
        <div className="font_footer w-25">
          <h6 className="footer_header mb-3">Zomaverse</h6>
          <div className="font-weight-light ul_font">
            <ul
              className="bg-transparent w-100 footer_list px-0"
              variant="flush"
            >
              <li>Zomato</li>
              <li>Feeding India</li>
              <li>Hyperpure</li>
              <li>Zomaland</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
// export default Footer
