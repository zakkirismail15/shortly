import styled from "styled-components";

export const InfoContent = styled.div`
  width: 100%;
  padding: 0 10rem 5rem 10rem;
  overflow: hidden;
  background: var(--Grayish);
  position: relative;

  @media (max-width: 375px) {
    padding: 0 0 5rem;
  }
`;
export const InfoTitle = styled.div`
  width: 100%;
  padding: 5rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    width: 35rem;
    color: var(--Gray);
    margin-bottom: 2rem;
    text-align: center;
  }

  @media (max-width: 375px) {
    p {
      width: 25rem;
    }
  }
`;

export const InfoCardWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (min-width: 1080px) {
    div:nth-child(3) {
      margin-top: 2rem;
    }

    div:nth-child(4) {
      margin-top: 5rem;
    }
  }

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5rem;
  }
`;
export const InfoCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 20rem;
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;

  h5 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 2rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1rem;
    width: 100%;
    text-align: start;
    color: var(--Gray);
  }

  height: fit-content;
`;

export const InfoCardImage = styled.div`
  position: absolute;
  top: -2rem;
  width: 4rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999rem;
  background-color: var(--DarkViolet);

  @media (max-width: 375px) {
    left: 40%;
  }
`;

export const HorizontalLine = styled.div`
  width: 75%;
  height: 0.5rem;
  background-color: var(--Cyan);
  position: absolute;
  top: 50%;

  @media (max-width: 1080px) {
    width: 0.5rem;
    height: 100%;
    top: 0;
  }
`;
