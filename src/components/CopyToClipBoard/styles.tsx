import styled from 'styled-components';
import { dogloverTheme } from '../../dogloverTheme';

export const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
    position: relative;
`;

export const StyledInput = styled.input`
    width: 30%;
    background-color: ${dogloverTheme.colors.secondary};
    border: none;
    text-align: center;
`;

export const StyledButton = styled.button`
    width: 80px;
    height: 40px;
    border: none;
    border-radius: 0;
    background-color: ${dogloverTheme.colors.main};
    color: white;
    font-weight: bold;
    padding: 0 1em;
    text-transform: uppercase;
    &:active {
        background-color: ${dogloverTheme.colors.main};
        box-shadow: 0 2px ${dogloverTheme.colors.main};
        transform: translateY(1px)
    }
    &:hover {
        cursor: pointer;
    }
`;

export const StyledTooltip = styled.div`
    background-color: black;
    color: white;
    display: none;
    position: absolute;
    bottom: 40px;
    height: 20px;
    padding: 0.2em 0.5em;
`;