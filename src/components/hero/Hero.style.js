import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: calc(100vh - 10rem);
  margin-bottom: 4rem;

  @media (max-width: 375px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding-top: 6rem;
  }
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

  @media (max-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;

    p {
      text-align: center;
      width: 100%;
    }

    h1 {
      text-align: center;
    }
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

  @media (max-width: 375px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
  }
`;

export const HeroContentWrapper = styled.div`
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      width: 15rem;
      height: 5rem;
      font-size: 1.5rem;
    }
  }
`;
