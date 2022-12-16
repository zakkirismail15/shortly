import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: calc(100vh - 10rem);
`;

export const HeroContent = styled.div`
  width: 40%;

  h1 {
    line-height: 1.2;
    color: var(--VeryDarkBlue);
  }

  p {
    width: 80%;
    color: var(--Gray);
    margin-bottom: 2rem;
  }

  /* adjustment */
  @media (max-width: 1440px) {
    width: 60%;
  }
`;

export const HeroImage = styled.div`
  width: 30%;
  position: relative;
  img {
    width: 180%;
  }

  @media (max-width: 1440px) {
    width: 40%;
  }
`;

export const HeroContentWrapper = styled.div``;
