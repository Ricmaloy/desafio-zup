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

