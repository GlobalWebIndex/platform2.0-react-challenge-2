import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { Search } from "../index"

test("render search", () => {
  render(
    <MemoryRouter>
      <Search />
    </MemoryRouter>
  )
  const searchInput = screen.getByTestId("search-input")
  const search = screen.getByTestId("search")
  expect(search).toBeInTheDocument()
  expect(searchInput).toBeInTheDocument()
})

describe("Search", () => {
  it("should render", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
