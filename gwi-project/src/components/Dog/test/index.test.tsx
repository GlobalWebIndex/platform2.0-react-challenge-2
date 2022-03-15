import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { Dog } from "../index"

test("render dog", () => {
  render(
    <MemoryRouter>
      <Dog />
    </MemoryRouter>
  )
  const goBackContainer = screen.getByTestId("goBackContainer")
  const mainPage = screen.getByTestId("mainPage")
  expect(mainPage).toBeInTheDocument()
  expect(goBackContainer).toBeInTheDocument()
})
