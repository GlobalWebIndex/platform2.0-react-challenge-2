import { BreedList, IFetchRandomImages } from "../../models/models";

export const fetchRandomImages = async (): Promise<
  IFetchRandomImages | undefined | null
> => {
  try {
    const results = await fetch("https://dog.ceo/api/breeds/image/random/50");
    return results.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const fetchAllDogBreeds = async (): Promise<BreedList> => {
  try {
    const results = await fetch("https://dog.ceo/api/breeds/list/all");
    return results.json();
  } catch (err) {
    console.error(err);
    return {} as BreedList;
  }
};

export const fetchSpecificDogBreed = async (dogBreed: string | undefined) => {
  try {
    const results = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images`);
    return results.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const fetchDogImgByBreed = async (specificBreed: string | undefined) => {
  try {
    const results = await fetch(
      `https://dog.ceo/api/breed/${specificBreed}/images/random`
    );
    return results.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};
