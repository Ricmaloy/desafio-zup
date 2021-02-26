import styled from 'styled-components';

export const AsideContainer = styled.aside`
    grid-area: AS;

    background-color: var(--white);
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;

    margin-top: 2rem;
    margin-left: 3rem;
`;

export const MenuItemLink = styled.a`
    display: flex;
    align-items: center;

    color: var(--text);
    
    margin: 1rem 0;
    
    font-size: 1.6rem;
    text-decoration: none;

    transition: transform .3s;

    svg {
        font-size: 2.5rem;
        margin-right: 2rem;
    }

    &.activated {
        font-weight: bold;
        color: var(--green);
    }

    &:hover {
        transform: translateX(10px);
    }
`;