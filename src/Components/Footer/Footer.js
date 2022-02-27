import React from 'react';
import './Footer.css';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
    
  const Footer = () => {
    return (
      <Box>
        <h1 style={{ color: "#fff", 
                     textAlign: "left", 
                     marginTop: "-55px",
                     marginLeft: '-30px' }}>
          Calbear Trails 
        </h1>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
            </Column>
            <Column>
              <Heading>Maps</Heading>
              <FooterLink href="#">My Maps</FooterLink>
              <FooterLink href="#">My Locations</FooterLink>
              <FooterLink href="#">Print maps</FooterLink>
              <FooterLink href="#">Navigation</FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#" aria-label='Instagram'>Support</FooterLink>
              <FooterLink href="#">Members</FooterLink>
              <FooterLink href="#">Forum</FooterLink>
              <FooterLink href="#">BearTrail Gear</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>
                    Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>
                    Instagram
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>
                    Twitter
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>
                    Youtube
                  </span>
                </i>
              </FooterLink>
  
            </Column>
          </Row>
        </Container>
        <h1 className="copy" style={{ color: "#fff"}}>BearTrails © 2022</h1>
        <h1 style={{ color: "#fff", marginBottom: "-60px", alignItems:"right"}}>
          <div className="social">
            <FontAwesomeIcon icon={faYoutube} size="1x" />
            <FontAwesomeIcon icon={faFacebook} size="1x" />
            <FontAwesomeIcon icon={faTwitter} size="1x" />
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </div>
        </h1>
      </Box>
    );
  };
  export default Footer;