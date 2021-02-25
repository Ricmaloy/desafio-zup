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

        border-radius: 5px;
        margin-top: 5%;

        overflow-y: scroll;

        background-color: var(--white);
        box-shadow: 1px 1px 10px 3px var(--shadow);

        animation: ${fadeInBottom} 1s ease-in-out;
    }
`;

export const ProfileListItem = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--text);
    font-size: 14px;

    padding: 0 15px;
    
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
            width: 50px;
            height: 50px;

            border-radius: 50%;
        }

        p {
            color: var(--highlight);
            font-weight: bold;

            margin-left: 15px;
        }
    }
`;

export const ProfileListItemIcons = styled.div`
    width: 100px;

    display: flex;
    justify-content: center;

    font-size: 25px;

    span {
        cursor: pointer;

        transition: all .3s;

        &:not(:first-child){
            margin-left: 10px;
        }

        &:hover {
            color: var(--green);
        }
    }
`;

