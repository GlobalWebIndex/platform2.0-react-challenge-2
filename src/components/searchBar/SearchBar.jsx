import React, { useState } from "react";
import  { ReactComponent as SearchIcon } from "../../assets/iconSearch.svg";

export const SearchBar = ({ onChangeHandler }) => {
    const [visibleInput, setVisibleInput] =useState(false);

    const searchInputHandler = () =>{
        visibleInput ? setVisibleInput(false) : setVisibleInput(true);
    };

  return (
      <>
    <div className="searchbar-container">
        <SearchIcon onClick={searchInputHandler}  className="searchbar-container--icon"/>
        
        <input className={visibleInput ? " searchbar-container--input-visible" : "searchbar-container--input-hide"} placeholder="Search Breeds" type="search" onChange={onChangeHandler} />
       
    </div>
    </>
  );
};
