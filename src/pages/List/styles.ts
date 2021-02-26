import styled from 'styled-components';

export const Grid = styled.div`
    height: 100vh;

    display: grid;

    background-color: var(--background);

    grid-template-columns: 24rem auto;
    grid-template-rows: 7rem auto;

    grid-template-areas: ' MH MH '
                         ' AS CT ';
`;
