import { useCallback, useEffect, useState } from "react";
import { api } from "../../utils/api";
import BreedItem from "./BreedItem";
import { SearchBar } from "../searchBar/SearchBar";
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";

const Breeds = () => {
  const [allBreeds, setAllBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState(allBreeds);
  const [searchField, setSearchField] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const breedsPerPage = 8;
  const pagesVisited = pageNumber * breedsPerPage;
  const displayBreedImages = filteredBreeds
    .slice(pagesVisited, pagesVisited + breedsPerPage)
    .map((breed) => (
      <>
        <div className="breeds-main-container__image-list--item " key={breed}>
          <BreedItem breed={breed} />
        </div>
      </>
    ));

  const pageCount = Math.ceil(filteredBreeds.length / breedsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    fetchBreeds();
  }, []);

  useEffect(() => {
    const delaySearchResult = setTimeout(() => {
      const newFilteredBreeds = allBreeds.filter((breed) => {
        return breed.toLowerCase().includes(searchField);
      });

      setFilteredBreeds(newFilteredBreeds);
    }, 1000);

    return () => clearTimeout(delaySearchResult);
  }, [allBreeds, searchField]);

  const fetchBreeds = async () => {
    const url = "https://dog.ceo/api/breeds/list/all";
    const data = await api(url, "get");
    const breedsArray = data.message;
    setAllBreeds(Object.keys(breedsArray));
  };

  const handleChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <>
      <div className="breeds-main-container">
        <div className="main-title-container">
          <h2 className="main-title-container--title">Breeds</h2>
          <h3 className="main-title-container--subtitle">Find all breeds</h3>
        </div>

        <SearchBar onChangeHandler={handleChange} />
        <motion.div
          className="breeds-main-container__image-list"
          layout
          transition={{ duration: 0.3 }}
        >
          {displayBreedImages}
        </motion.div>
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

export default Breeds;
