import { Route, Routes } from "react-router"
import { Dog } from "../../components/Dog"
import { DogBreeds } from "../../components/DogBreeds"
import { RandomDogImage } from "../../components/RandomDogImage"
import { SubBreeds } from "../../components/SubBreeds"

export function Base() {
  return (
    <Routes>
      <Route path="/sub-breeds/:breed" element={<SubBreeds />} />
      <Route path="/breeds/:breed" element={<Dog />} />
      <Route path="/breeds" element={<DogBreeds />} />
      <Route path="/" element={<RandomDogImage />} />
    </Routes>
  )
}
