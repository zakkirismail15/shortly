import styled from "styled-components";

export const Navigation = styled.header`
  width: 100%;
  z-index: 999;
  position: relative;
  background-color: white;

  @media (max-width: 375px) {
    position: fixed;
  }
`;

export const Nav = styled.nav`
  padding: 3rem 0 0 0;
  display: flex;
  gap: 3rem;
  height: 6rem;

  .hamburger {
    display: none;
  }

  @media (max-width: 375px) {
    padding: 1rem 2rem;

    .hamburger {
      display: block;
      width: 4rem;
      margin-left: auto;
      object-fit: contain;
    }
  }

  ul.active {
    display: block;
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 2rem;
  width: 100%;

  button {
    white-space: nowrap;
  }

  div {
    display: flex;
    gap: 2rem;
    width: 100%;
    justify-content: flex-end;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    width: calc(100% - 4rem);
    align-items: center;
    position: fixed;
    top: 6rem;
    display: none;
    background-color: var(--DarkViolet);
    border-radius: 2rem;
    padding: 4rem 2rem;
    text-align: center;
    gap: 1rem;
    z-index: 999;

    li {
      color: white;
    }

    div {
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      gap: 1rem;
    }
  }
`;

export const Li = styled.li`
  padding: 0.5rem 0;
  color: var(--GrayishViolet);
  font-weight: 700;

  :hover {
    color: var(--VeryDarkViolet);
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: flex-end;
`;
