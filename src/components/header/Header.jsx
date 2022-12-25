import React, { useState } from "react";
import { Li, Logo, Nav, Navigation, Ul } from "./Header.style";
import shortly from "../../images/logo.svg";
import { Button, Container } from "../../styles/Common";
import hamburger from "../../images/icon-hamburger.svg";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <Container>
      <Navigation>
        <Nav>
          <Logo>
            <img src={shortly} alt="" />
          </Logo>
          <Ul className={open ? "active" : "navlinks"}>
            <Li>Features</Li>
            <Li>Prices</Li>
            <Li>Resources</Li>
            <div>
              <Li>Login</Li>
              <Button primary>Sign Up</Button>
            </div>
          </Ul>
          <img
            src={hamburger}
            className="hamburger"
            alt=""
            onClick={handleClick}
          />
        </Nav>
      </Navigation>
    </Container>
  );
}

export default Header;
