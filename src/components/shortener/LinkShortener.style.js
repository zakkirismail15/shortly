import styled from "styled-components";
import shortenBg from "../../images/bg-shorten-desktop.svg";

export const LinkShortenerContent = styled.div`
  height: 100%;
  min-height: 30vh;
  background: var(--Grayish);
`;

export const LinkShortenerWidget = styled.div`
  position: absolute;
  z-index: 100;
  top: calc(100vh - 8rem);
  width: calc(100% - 20rem);
  padding: 2.5rem 2rem;
  margin: 4rem auto;
  background: url(${shortenBg});
  background-color: var(--DarkViolet);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;

  @media (max-width: 1080px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 375px) {
    justify-content: center;
    align-items: center;
    left: 10%;
    top: calc(100vh - 12rem);
    width: 80%;
    display: flex;
    flex-direction: column;
  }
`;

export const LinkShortenerButton = styled.div`
  background: var(--Cyan);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  white-space: nowrap;
  cursor: pointer;
  :hover {
    background: var(--DullCyan);
  }
`;

export const LinkShortenerWidgetWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const LinkShortenerInput = styled.input.attrs({
  type: "text",
})`
  display: flex;
  border-radius: 0.5rem;
  border: none;
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem;
  font-size: 1rem;

  &:focus {
    border: 2px solid var(--Red);
    outline: none;

    ::placeholder {
      color: var(--Red);
      opacity: 70%;
    }
  }
`;
