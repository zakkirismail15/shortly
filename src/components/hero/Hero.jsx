import React from 'react'
import { Button, Container } from '../../styles/Common'
import { H1, Para } from '../../styles/Typography'
import { HeroContent, HeroContentWrapper, HeroImage, HeroWrapper } from './Hero.style'
import HeroImg from '../../images/illustration-working.svg'


function Hero() {
    return (
        <Container>
            <HeroWrapper>
                <HeroContent>
                    <HeroContentWrapper>
                        <H1>More than just shorter links</H1>
                        <Para>
                            Build your brand's recognition and get detailed
                            insights on how your links are performing.
                        </Para>
                        <Button>
                            Get Started
                        </Button>
                    </HeroContentWrapper>
                </HeroContent>
                <HeroImage>
                    <img src={HeroImg} alt="" />
                </HeroImage>
            </HeroWrapper>
        </Container>
    )
}

export default Hero