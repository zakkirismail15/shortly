import React from "react";
import {
  InfoCard,
  InfoCardWrapper,
  InfoCardImage,
  InfoContent,
  InfoTitle,
  HorizontalLine,
} from "./Info.style";
import { H4, H5, Para } from "../../styles/Typography";
import BrandRecognition from "../../images/icon-brand-recognition.svg";
import DetailedRecord from "../../images/icon-detailed-records.svg";
import FullyCustomizable from "../../images/icon-fully-customizable.svg";

function Info() {
  return (
    <InfoContent>
      <InfoTitle>
        <H4>Advanced Statistics</H4>
        <Para>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </Para>
      </InfoTitle>
      <InfoCardWrapper>
        <HorizontalLine />
        <InfoCard>
          <InfoCardImage>
            <img src={BrandRecognition} alt="" />
          </InfoCardImage>
          <H5>Brand Recognition</H5>
          <Para>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links instil confidence in your content.
          </Para>
        </InfoCard>
        <InfoCard>
          <InfoCardImage>
            <img src={DetailedRecord} alt="" />
          </InfoCardImage>
          <H5>Detailed Records</H5>
          <Para>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </Para>
        </InfoCard>
        <InfoCard>
          <InfoCardImage>
            <img src={FullyCustomizable} alt="" />
          </InfoCardImage>
          <H5>Fully Customizable</H5>
          <Para>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </Para>
        </InfoCard>
      </InfoCardWrapper>
    </InfoContent>
  );
}

export default Info;
