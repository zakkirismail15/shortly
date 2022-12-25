import React from "react";
import {
  FooterWrapper,
  Li,
  LinkContent,
  LogoImage,
  SocialMediaLogo,
  Ul,
} from "./Footer.style";
import shortly from "../../images/logo.svg";
import fb from "../../images/icon-facebook.svg";
import ig from "../../images/icon-instagram.svg";
import pin from "../../images/icon-pinterest.svg";
import twt from "../../images/icon-twitter.svg";
import { H6 } from "../../styles/Typography";

function Footer() {
  return (
    <FooterWrapper>
      <LogoImage>
        <img src={shortly} alt="" />
      </LogoImage>
      <LinkContent>
        <H6>Features</H6>
        <Ul>
          <Li>Link Shortening</Li>
          <Li>Branded Links</Li>
          <Li>Analytics</Li>
        </Ul>
      </LinkContent>
      <LinkContent>
        <H6>Resources</H6>
        <Ul>
          <Li>Blog</Li>
          <Li>Developers</Li>
          <Li>Support</Li>
        </Ul>
      </LinkContent>
      <LinkContent>
        <H6>Company</H6>
        <Li>About</Li>
        <Li>Our Team</Li>
        <Li>Careers</Li>
        <Li>Contact</Li>
      </LinkContent>
      <SocialMediaLogo>
        <img src={fb} alt="" />
        <img src={twt} alt="" />
        <img src={pin} alt="" />
        <img src={ig} alt="" />
      </SocialMediaLogo>
    </FooterWrapper>
  );
}

export default Footer;
