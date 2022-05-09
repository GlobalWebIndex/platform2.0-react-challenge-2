import React, { useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ImageCard from '../ImageCard/ImageCard';
import formatBreedName from '../../helpers/formatName';
import { BreedPhotosGrid, StyledMain, StyledPaginateContainer } from './styles';

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
            <ImageCard key={item} imageUrl={item} />
          ))}
      </>
    );
  }

export default function BreedPhotos({ breedName, itemsPerPage }: BreedPhotosProps) {
    // Set empty list of items.
    const [items, setItems] = useState<string[]>([]);
    const [currentItems, setCurrentItems] = useState<string[]>([]);
    const [pageCount, setPageCount] = useState<number>(0);
    // Set page offsets.
    const [itemOffset, setItemOffset] = useState<number>(0);

    const getBreedPhotos = useCallback(() => {
        if(breedName.includes('-')) {
            breedName = breedName.replace('-', '/');
        }

        fetch(`https://dog.ceo/api/breed/${breedName}/images`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => setItems(data.message))
        .catch((error) => {
            console.log(error)
        });
    }, [breedName])

    // Fetch breed images
        useEffect(() => {
            getBreedPhotos();

            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(items.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(items.length / itemsPerPage));
        }, [items, itemOffset, itemsPerPage, getBreedPhotos]);

    // Call when user click to request another page.
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return(
        <>
            <StyledMain>
                <h1>{formatBreedName(breedName)}</h1>
                <BreedPhotosGrid>
                    <Items currentItems={currentItems} />
                </BreedPhotosGrid>
                <StyledPaginateContainer>
                    <ReactPaginate
                        breakLabel='...'
                        breakClassName='break-me'
                        nextLabel='Next >'
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel='< Previous'
                        renderOnZeroPageCount={undefined}
                        containerClassName='pagination'
                        activeClassName='active'
                    />
                </StyledPaginateContainer>
                <a href={`http://www.google.com/search?q=${breedName} wikipedia&btnI`} target='_blank' rel='noreferrer'>
                    See more information about {formatBreedName(breedName)} on Wikipedia
                </a>
            </StyledMain>
        </>
    )
}