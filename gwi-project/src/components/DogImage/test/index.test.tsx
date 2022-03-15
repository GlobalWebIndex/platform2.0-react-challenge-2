import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { DogImage } from "../index"

test("render dog image", () => {
  const image = "https://images.dog.ceo/breeds/hound-afghan/n02088094_1096.jpg"
  render(
    <MemoryRouter>
      <DogImage image={image} />
    </MemoryRouter>
  )
  const dogImage = screen.getByTestId("dogImage")
  expect(dogImage).toBeInTheDocument()
  expect(dogImage).toHaveAttribute("src", image)
})
