import { BreedImage, BreedImages, RandomBreedImage } from "./types"

export const getBreedImages = async (breed: string) => {
  const api = await fetch(`https://dog.ceo/api/breed/${breed}/images`, {
    mode: "cors",
  })
  return (await api?.json()) as BreedImages
}

export const getRandomDogImage = async () => {
  const api = await fetch("https://dog.ceo/api/breeds/image/random")
  return (await api?.json()) as BreedImage
}

export const getRandomBreedImage = async (breed: string) => {
  const api = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`, {
    mode: "cors",
  })
  return (await api?.json()) as RandomBreedImage
}

export const getAllBreeds = async () => {
  const api = await fetch("https://dog.ceo/api/breeds/list/all", {
    mode: "cors",
  })
  return (await api?.json()) as BreedImage
}
