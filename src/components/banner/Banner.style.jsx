import styled from "styled-components";
import boostBg from "../../images/bg-boost-desktop.svg";

export const BannerWrapper = styled.div`
  background: url(${boostBg});
  background-color: var(--DarkViolet);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: fit-content;
  }
`;

export const BannerTitle = styled.div`
  display: flex;
  justify-content: center;
  h3 {
    color: white;
  }
  margin-bottom: 2rem;

  @media (max-width: 375px) {
    h3 {
      text-align: center;
    }
  }
`;
