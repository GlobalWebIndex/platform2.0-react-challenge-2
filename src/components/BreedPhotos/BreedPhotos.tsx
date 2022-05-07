import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ImageCard from '../ImageCard/ImageCard';
import formatBreedName from '../../helpers/formatName';
import { BreedPhotosGrid, StyledMain, StyledPaginateContainer } from "./styles";

type BreedPhotosProps = {
    breedName: string;
    itemsPerPage: number;
};

type ItemProps = {
    currentItems: Array<string>;
}

function Items({ currentItems }: ItemProps) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <ImageCard imageUrl={item} />
          ))}
      </>
    );
  }

export default function BreedPhotos({ breedName, itemsPerPage }: BreedPhotosProps) {
    // Set empty list of items.
    const [items, setItems] = useState<string[]>([]);
    const [currentItems, setCurrentItems] = useState<string[]>([]);
    const [pageCount, setPageCount] = useState(0);
    // Set page offsets.
    const [itemOffset, setItemOffset] = useState(0);

    // Fetch breed images
        useEffect(() => {
            const breedImages = () => {
                fetch(`https://dog.ceo/api/breed/${breedName}/images`)
                .then(data => data.json())
                .then(jsonData => setItems(jsonData.message));
            }
            breedImages();

            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(items.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(items.length / itemsPerPage));
        }, [items, itemOffset, itemsPerPage]);

    // Call when user click to request another page.
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return(
        <>
            <StyledMain>
                <h2>{formatBreedName(breedName)}</h2>
                <BreedPhotosGrid>
                    <Items currentItems={currentItems} />
                </BreedPhotosGrid>
                <StyledPaginateContainer>
                    <ReactPaginate
                        breakLabel="..."
                        breakClassName="break-me"
                        nextLabel="Next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< Previous"
                        renderOnZeroPageCount={undefined}
                        containerClassName="pagination"
                        activeClassName="active"
                    />
                </StyledPaginateContainer>
            </StyledMain>
        </>
    )
}