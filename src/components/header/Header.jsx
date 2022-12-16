import React from 'react'
import { Li, Logo, Nav, Navigation, Ul } from './Header.style'
import shortly from "../../images/logo.svg"
import { Button, Container } from '../../styles/Common'

function Header() {
    return (
        <Container>
            <Navigation>
                <Nav>
                    <Logo>
                        <img src={shortly} alt="" />
                    </Logo>
                    <Ul>
                        <Li>Features</Li>
                        <Li>Prices</Li>
                        <Li>Resources</Li>
                    </Ul>
                    <Li>Login</Li>
                    <Button primary>Sign Up</Button>
                </Nav>
            </Navigation>
        </Container>
    )
}

export default Header