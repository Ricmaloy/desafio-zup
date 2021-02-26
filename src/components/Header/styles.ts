import styled, { keyframes } from 'styled-components';

const openSearchBarAnimate = keyframes`
    from {
        width: 5%;
    }
    to {
        width: 50%;
    }
`;

const fadeInLeft = keyframes`
    from {
        transform: translateX(-100px);
        opacity: 0;
    }
    to {
        transform: translateX(0%);
        opacity: 1;
    }
`;


export const HeaderContainer = styled.header`
    grid-area: MH;

    color: var(--highlight);
    background-color: var(--blue);

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 8rem;
        height: 5rem;

        margin-left: 5.5rem;

        animation: ${fadeInLeft} 1s;
    }

    svg {
        width: 3.5rem; 
        height: 3.5rem;

        margin-right: 2.5rem;

        color: var(--white);
    }
`;

export const SearchBar = styled.div`
    width: 50%;
    height: 3.5rem;

    display: flex;
    align-items: center;

    background-color: var(--white);

    border-radius: 5rem;

    animation: ${openSearchBarAnimate} 1s ease-in-out;

    svg {
        width: 2rem;
        height: 2rem;
        
        color: var(--green);

        margin: 0 1rem;
    }
`;