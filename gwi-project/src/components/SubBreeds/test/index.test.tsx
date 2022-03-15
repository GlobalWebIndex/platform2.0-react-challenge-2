import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SubBreeds } from "../index"

test("render sub-breeds", () => {
  render(
    <MemoryRouter>
      <SubBreeds />
    </MemoryRouter>
  )
  const goBackContainer = screen.getByTestId("goBackContainer")
  const mainPage = screen.getByTestId("mainPage")
  const breedSelection = screen.getByTestId("breedSelection")
  expect(mainPage).toBeInTheDocument()
  expect(goBackContainer).toBeInTheDocument()
  expect(breedSelection).toBeInTheDocument()
})
