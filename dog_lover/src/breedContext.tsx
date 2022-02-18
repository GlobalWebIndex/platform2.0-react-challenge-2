import React, { useContext, useState } from "react";
import axios from "axios";
import {
  DogBreed,
  ListAllResponse,
  ImageResponse,
  DogBreedImage,
} from "../components/breedSelectorBox";

const ClickedBreedContext = React.createContext({} as DogBreedImage[]);
const BreedContext = React.createContext({} as DogBreed[]);
const HeartContextUpdate = React.createContext({} as any);
const FetchBreedsContextUpdate = React.createContext({} as any);
const OpenContext = React.createContext({} as any);

export const useVariableBreedContext = () => {
  return useContext(BreedContext);
};
export const useVariableClickedBreedContext = () => {
  return useContext(ClickedBreedContext);
};
export const useVariableOpenContext = () => {
  return useContext(OpenContext);
};
export const useFunctionHeartContext = () => {
  return useContext(HeartContextUpdate);
};
export const useFunctionFetchBreedsContext = () => {
  return useContext(FetchBreedsContextUpdate);
};

export const BreedProvider = ({ children }: { children: any }) => {
  const [breeds, setBreeds] = useState<DogBreed[]>([]);
  const [clickedBreed, setClickedBreed] = useState<DogBreedImage[]>([]);
  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => {
    setIsOpened((wasOpened) => !wasOpened);
    console.log("toggle");
  };

  const handleHeartClicked = (breed: string) => () => {
    setClickedBreed((state) => ({
      ...state, // <-- copy previous state
      [breed]: !state[breed], // <-- update value by index key
    }));
    toggle();
  };

  const fetchBreedsList = async () => {
    // fetch all breeds. Axios requests can be typed for the response
    const {
      data: { message: allBreeds },
    } = await axios.get<ListAllResponse>("https://dog.ceo/api/breeds/list/all");

    // extract keys from the ListAllResponse.message
    const keys = Object.keys(allBreeds);

    // resolve images and create DogBreed objects
    const dogBreeds = await Promise.all(
      keys.map(async (key) => {
        const {
          data: { message: value },
        } = await axios.get<ImageResponse>(
          `https://dog.ceo/api/breed/${encodeURIComponent(key)}/images/random`
        );
        return { key, value };
      })
    );
    setBreeds(dogBreeds);
  };

  return (
    <ClickedBreedContext.Provider value={clickedBreed}>
      <BreedContext.Provider value={breeds}>
        <HeartContextUpdate.Provider value={handleHeartClicked}>
          <FetchBreedsContextUpdate.Provider value={fetchBreedsList}>
            <OpenContext.Provider value={isOpened}>
              {children}
            </OpenContext.Provider>
          </FetchBreedsContextUpdate.Provider>
        </HeartContextUpdate.Provider>
      </BreedContext.Provider>
    </ClickedBreedContext.Provider>
  );
};
