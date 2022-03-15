import { SetStateAction } from "react"

export type BreedImages = {
  message: string[]
  status: string
}

export type BreedImage = {
  message: string
  status: string
}

export type RandomBreedImage = {
  message: SetStateAction<string>
  status: string
}
