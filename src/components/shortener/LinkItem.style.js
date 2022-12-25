import styled from "styled-components";

export const LinkResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5rem;
  width: 100%;

  @media (max-width: 375px) {
    padding-top: 10rem;
  }
`;

export const LinkResultItem = styled.div`
  display: flex;
  background-color: white;
  margin: 0.5rem 0;
  align-items: center;
  padding: 0 2rem;
  border-radius: 0.5rem;
  height: 4rem;
  column-gap: 1rem;

  .link {
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const OriginalLinkWrapper = styled.div`
  width: 30%;
`;

export const ShortenedLinkWrapper = styled.div`
  margin-left: auto;
  h5 {
    color: var(--Cyan);
  }
`;

export const LinkItemButton = styled.button`
  background: ${(props) =>
    props.className ? "var(--DarkViolet)" : "var(--Cyan)"};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 10%;
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
