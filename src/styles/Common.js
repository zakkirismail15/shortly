import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10rem;
  overflow: hidden;

  @media (max-width: 1080px) {
    padding: 0 5rem;
  }

  @media (max-width: 375px) {
    padding: 0;
    margin: 0;
  }
`;

export const Button = styled.button`
  background: var(--Cyan);
  border: none;
  border-radius: 3rem;
  padding: 0.5rem 2rem;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: white;

  :hover {
    background: var(--DullCyan);
  }
`;
