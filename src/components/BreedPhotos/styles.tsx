import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const StyledMain = styled.main`
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 6em;
`;

export const BreedPhotosGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export const StyledPaginateContainer = styled.div`
    .pagination {
        color: #de1b76;
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 0.2em;
    }
    .pagination > li {
        cursor: pointer;
    }
    .break-me {
        cursor: default;
    }
    .active {
        border-color: #de1b76;
        border-bottom: 1px solid #de1b76;
        color: black;
    }
    .previous, .next {
        color: black;
        border-bottom: 1px solid #de1b76;
    }
    .previous {
        margin-right: 0.5em;
    }
    .next {
        margin-left: 0.5em;
    }
`;