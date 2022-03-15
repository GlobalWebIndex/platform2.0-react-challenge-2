import { SetStateAction } from "react"

export type BreedsT = {
  message: string[]
  status: string
}

export type BreedT = {
  message: string
  status: string
}

export type RandomBreedImageT = {
  message: SetStateAction<string>
  status: string
}
