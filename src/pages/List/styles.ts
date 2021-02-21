import styled from 'styled-components';

export const Grid = styled.div`
    height: 100vh;

    display: grid;

    background-color: #dedede;

    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;

    grid-template-areas: ' MH MH '
                         ' AS CT ';
`; 

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

export const AsideContainer = styled.aside`
    grid-area: AS;

    background-color: #fff;
`;

export const ProfilesListContainer = styled.main`
    grid-area: CT;

    overflow-y: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
`;

