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
        width: 80px;
        height: 50px;

        margin-left: 55px;

        animation: ${fadeInLeft} 1s;
    }

    svg {
        width: 35px;
        height: 35px;

        margin-right: 25px;

        color: var(--white);
    }
`;

export const SearchBar = styled.div`
    width: 50%;
    height: 35px;

    display: flex;
    align-items: center;

    background-color: var(--white);

    border-radius: 50px;

    animation: ${openSearchBarAnimate} 1s ease-in-out;

    svg {
        width: 20px;
        height: 20px;
        
        color: var(--green);

        margin: 0 10px;
    }
`;