import React from "react";
import { BannerTitle, BannerWrapper } from "./Banner.style";
import { H3 } from "../../styles/Typography";
import { Button } from "../../styles/Common";

function Banner() {
  return (
    <BannerWrapper>
      <BannerTitle>
        <H3>Boost your links today</H3>
      </BannerTitle>
      <Button>Get Started</Button>
    </BannerWrapper>
  );
}

export default Banner;
