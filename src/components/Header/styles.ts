import styled from 'styled-components';

export const HeaderContainer = styled.header`
    grid-area: MH;

    color: #282828;
    background-color: #0c3455;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 80px;
        height: 50px;

        margin-left: 55px;
    }

    svg {
        width: 35px;
        height: 35px;

        margin-right: 25px;

        color: #fff;
    }
`;

export const SearchBar = styled.div`
    width: 50%;
    height: 35px;

    display: flex;
    align-items: center;

    background-color: #fff;

    border-radius: 50px;

    svg {
        width: 20px;
        height: 20px;
        
        color: #8dc63f;

        margin: 0 10px;
    }
`;