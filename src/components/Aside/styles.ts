import styled from 'styled-components';

export const AsideContainer = styled.aside`
    grid-area: AS;

    background-color: var(--white);

    @media(max-width: 1200px) {
        width: 90%; 
        height: 5.5rem;

        margin: 0 auto; 
        margin-top: 2rem; 
        
        border-radius: 4rem; 
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;

    margin-top: 2rem;
    margin-left: 3rem;

    @media(max-width: 1200px) {
        flex-direction: row; 
        margin: .5rem 2rem; 
        justify-content: space-evenly;
    }
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

        @media(max-width: 1200px) {
            margin-right: 1rem;
        }

        @media(max-width: 650px) {
            margin-right: .5rem;
        }
    }

    &.activated {

        @media(max-width: 1200px) {

        }
        font-weight: bold;
        color: var(--green);
    }

    &:hover {
        transform: translateX(10px);

        @media(max-width: 650px) {
            transform: none;
        }
    }
`;