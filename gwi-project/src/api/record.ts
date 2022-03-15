import { BreedT, BreedsT, RandomBreedImageT } from "./types"

export const getBreedImages = async (breed: string) => {
  const api = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
  return (await api?.json()) as BreedsT
}

export const getRandomDogImage = async () => {
  const api = await fetch("https://dog.ceo/api/breeds/image/random")
  return (await api?.json()) as BreedT
}

export const getRandomBreedImage = async (breed: string) => {
  const api = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
  return (await api?.json()) as RandomBreedImageT
}

export const getAllBreeds = async () => {
  const api = await fetch("https://dog.ceo/api/breeds/list/all")
  return (await api?.json()) as BreedT
}

export const getAllSubBreeds = async (breed: string) => {
  const api = await fetch(`https://dog.ceo/api/breed/${breed}/list`)
  return (await api?.json()) as BreedsT
}

export const getSubBreedImage = async (breed: string, subBreed: string) => {
  const api = await fetch(
    `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`
  )
  return (await api?.json()) as BreedT
}
