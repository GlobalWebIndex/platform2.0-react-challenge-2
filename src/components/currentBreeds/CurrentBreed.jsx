import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";
import ReactPaginate from "react-paginate";

export const CurrentBreed = () => {
  const [breedCurrentImages, setBreedCurrentImages] = useState([]);
  const { breedId } = useParams();
  useEffect(() => {
    fetchBreedImages();
  }, []);

  const [pageNumber, setPageNumber] = useState(0);
  const dogImagesPerPage = 8;

  const pagesVisited = pageNumber * dogImagesPerPage;


  const displayDogImages = breedCurrentImages
    .slice(pagesVisited, pagesVisited + dogImagesPerPage)
    .map((image, index) => {
      return (
        <div className="current-breed-container__images-list--box" key={index}>
          <img src={image} />
        </div>
      );
    });

  const pageCount = Math.ceil(breedCurrentImages.length / dogImagesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const fetchBreedImages = async () => {
    const url = `https://dog.ceo/api/breed/${breedId}/images`;
    const data = await api(url, "get");
    const breedCurrentArray = data.message;
    setBreedCurrentImages(breedCurrentArray);
  };

  return (
    <>
      <div className="current-breed-container">
        <h2 className="current-breed-container--title">{breedId}</h2>
        <div className="current-breed-container__images-list">
          {displayDogImages}
        </div>
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pegination-container"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"pegination-container--active"}
      />
    </>
  );
};
