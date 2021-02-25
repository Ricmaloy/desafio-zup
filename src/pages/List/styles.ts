import styled from 'styled-components';

export const Grid = styled.div`
    height: 100vh;

    display: grid;

    background-color: var(--background);

    grid-template-columns: 240px auto;
    grid-template-rows: 70px auto;

    grid-template-areas: ' MH MH '
                         ' AS CT ';
`;
