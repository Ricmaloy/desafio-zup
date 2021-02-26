import styled, { keyframes } from 'styled-components';

const fadeInBottom = keyframes`
    from {
        transform: translateY(20%);
        opacity: 0;
    }
    to {
        transform: translateY(0%);
        opacity: 1;
    }
`;

export const ProfilesListContainer = styled.div`
    grid-area: CT;

    overflow-y: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    main {
        width: 90%;
        height: 90%;

        border-radius: .5rem;
        margin-top: 5%;

        overflow-y: scroll;

        background-color: var(--white);
        box-shadow: 1px 1px 10px 3px var(--shadow);

        animation: ${fadeInBottom} 1s ease-in-out;
    }
`;

export const ProfileListItem = styled.div`
    width: 100%;
    height: 7rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--text);
    font-size: 1.4rem;

    padding: 0 1.5rem;
    
    &:not(:first-child) {
        border-top: 1px solid var(--text);
    }

    > * {
        width: 20%;
    }

    & div {
        display: flex;
        align-items: center;

        img {
            width: 5rem;
            height: 5rem;

            border-radius: 50%;
        }

        p {
            color: var(--highlight);
            font-weight: bold;

            margin-left: 1.5rem;
        }
    }
`;

export const ProfileListItemIcons = styled.div`
    width: 10rem;

    display: flex;
    justify-content: center;

    font-size: 2.5rem;

    span {
        cursor: pointer;

        transition: all .3s;

        &:not(:first-child){
            margin-left: 10px;
            margin-left: 1rem;
        }

        &:hover {
            color: var(--green);
        }
    }
`;

