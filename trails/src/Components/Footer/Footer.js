import React from 'react';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";
    
  const Footer = () => {
    return (
      <Box>
        <h1 style={{ color: "#f5d24b", 
                     textAlign: "left", 
                     marginTop: "-50px" }}>
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
              <FooterLink href="#">Support</FooterLink>
              <FooterLink href="#">Members</FooterLink>
              <FooterLink href="#">Forum</FooterLink>
              <FooterLink href="#">BearTrail Gear</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="https://cornhub.website/">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>
                    Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="https://www.quora.com/Why-doesnt-Ash-Ketchum-from-the-Pokemon-series-age">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>
                    Instagram
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="https://en.wikipedia.org/wiki/Birds_Aren%27t_Real">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>
                    Twitter
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="https://www.youtube.com/watch?v=gkTb9GP9lVI">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>
                    Youtube
                  </span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    );
  };
  export default Footer;