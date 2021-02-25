import styled from 'styled-components';

export const AsideContainer = styled.aside`
    grid-area: AS;

    background-color: var(--white);
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;

    margin-top: 20px;
    margin-left: 30px;
`;

export const MenuItemLink = styled.a`
    display: flex;
    align-items: center;

    color: var(--text);
    
    margin: 9px 0;
    
    font-size: 16px;
    text-decoration: none;

    transition: transform .3s;

    svg {
        font-size: 25px;
    
        margin-right: 20px;
    }

    &.activated {
        font-weight: bold;
        color: var(--green);
    }

    &:hover {
        transform: translateX(10px);
    }
`;