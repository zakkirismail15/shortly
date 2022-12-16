import styled from "styled-components";

export const Navigation = styled.header`
    width: 100%;
    z-index: 999;
    position: relative;
`

export const Nav = styled.nav`
padding: 3rem 0 0 0;
    display: flex;
    gap: 3rem;
`

export const Ul = styled.ul`
    display: flex;
    width: 25%;
    justify-content: space-between;
    margin-right:auto;
`

export const Li = styled.li`
    padding: .5rem 0;
    color: var(--GrayishViolet);
    font-weight: 700;

    :hover{
        color: var(--VeryDarkViolet)
    }
`
export const Logo = styled.div`
    display: flex;
    align-items: flex-end;
`