import styled from 'styled-components';

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;

    margin-top: 20px;
    margin-left: 30px;
`;

export const MenuItemLink = styled.a`
    display: flex;
    align-items: center;

    color: #a3a3a3;
    
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
        color: #8dc63f!important;
    }

    &:hover {
        transform: translateX(10px);
    }
`;