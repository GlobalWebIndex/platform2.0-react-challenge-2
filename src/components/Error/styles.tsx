import styled from 'styled-components';

export const StyledErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    @media (min-width: 1024px) {
        margin-top: 6em;
    }
    & img {
        margin: auto;
        width: 50em;
        max-width: 100%;

    }
`;