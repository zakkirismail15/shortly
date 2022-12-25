import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
  width: 100%;
  padding: 3rem 4rem;
  column-gap: 2rem;
  background-color: var(--VeryDarkViolet);

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
  }
`;

export const LogoImage = styled.div`
  width: 6rem;
  color: white;
  img {
    object-fit: contain;
    filter: invert(100%);
  }
`;

export const LinkContent = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  @media (max-width: 375px) {
    h6 {
      text-align: center;
    }
  }
`;

export const SocialMediaLogo = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 1rem;
  width: 100%;
  img {
    object-fit: contain;
    width: 2rem;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: auto;

  @media (max-width: 375px) {
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

export const Li = styled.li`
  padding: 0.2rem 0;
  color: var(--GrayishViolet);
  font-weight: 300;
  font-size: 0.8rem;
  color: var(--Grayish);

  :hover {
    color: var(--Cyan);
  }

  @media (max-width: 375px) {
    text-align: center;
  }
`;
