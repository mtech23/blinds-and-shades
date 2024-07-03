import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { facebookIcon, twitterIcon, instragramIcon, linkedinIcon, phoneIcon, mailIcon, locationIcon } from "../../../asserts/images";

import { footerLogo } from "../../../asserts/images";

import "./style.css"

const Footer = () => {

  return (
    <footer>
      <Container>
        <Row>
          <Col md={4}>
            <div>

              <div className="footerLogoImg">
                <img src={footerLogo} alt="footer_logo"></img>
              </div>

              <p className="footer_detail footer_extra_padding">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="footer_social_icons d-flex align-items-center gap-3">

                <Link className="social_icon">
                  <img src={facebookIcon} alt="facbook_icon"></img>
                </Link>

                <Link className="social_icon">
                  <img src={twitterIcon} alt="facbook_icon"></img>
                </Link>

                <Link className="social_icon">
                  <img src={instragramIcon} alt="facbook_icon"></img>
                </Link>

                <Link className="social_icon">
                  <img src={linkedinIcon} alt="facbook_icon"></img>
                </Link>

              </div>

            </div>
          </Col>

          <Col md={2}>
            <div className="pt-1">

             <h6 className="footer_links_heading">
                SHOP
             </h6>

             <ul className="footer_links_list list-unstyled">
              <li ><Link className="footer_detail">Roller Shades</Link></li>
              <li ><Link className="footer_detail">Zebra Shades</Link></li>
              <li ><Link className="footer_detail">Cellular Shades</Link></li>
              <li ><Link className="footer_detail">Dual Roller Shades</Link></li>
             </ul>

            </div>
          </Col>

          <Col md={2}>
            <div className="pt-1">

             <h6 className="footer_links_heading">
              Useful Links
             </h6>

             <ul className="footer_links_list list-unstyled">
              <li ><Link className="footer_detail">About Us</Link></li>
              <li ><Link className="footer_detail">Blogs</Link></li>
              <li ><Link className="footer_detail">Contact Us</Link></li>
              <li ><Link className="footer_detail">Privacy Policy</Link></li>
              <li ><Link className="footer_detail">Terms & Conditions</Link></li>
             </ul>

            </div>
          </Col>

          <Col xl={2} lg={3}>
            <div className="pt-1">

             <h6 className="footer_links_heading">
              Contact Info
             </h6>

             <ul className="footer_links_list list-unstyled">
              <li>
                <Link className="d-flex gap-3 align-items-center text-decoration-none">
                  <span className="contact_info_icon">
                    <img src={phoneIcon} alt="phone"></img>
                  </span>
                  <span className="contact_info">+1 (123) 456-7890</span>
                </Link>
              </li>

              <li>
                <Link className="d-flex gap-3 align-items-center text-decoration-none">
                  <span className="contact_info_icon">
                    <img src={mailIcon} alt="phone"></img>
                  </span>
                  <span className="contact_info">email@example.com</span>
                </Link>
              </li>

              <li>
                <Link className="d-flex gap-3 align-items-center text-decoration-none">
                  <span className="contact_info_icon">
                    <img src={locationIcon} alt="phone"></img>
                  </span>
                  <span className="contact_info">United States</span>
                </Link>
              </li>

             </ul>

            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
