export const getBreedImages = async (breed: string) => {
  const api = await fetch(`https://dog.ceo/api/breed/${breed}/images`, {
    mode: "cors",
  })
  return api?.json()
}

export const getRandomDogImage = async () => {
  const api = await fetch("https://dog.ceo/api/breeds/image/random")
  return api?.json()
}

export const getRandomBreedImage = async (breed: string) => {
  const api = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`, {
    mode: "cors",
  })
  return api?.json()
}

export const getAllBreeds = async () => {
  const api = await fetch("https://dog.ceo/api/breeds/list/all", {
    mode: "cors",
  })
  return api?.json()
}
