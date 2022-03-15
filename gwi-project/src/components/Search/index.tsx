import { css } from "@emotion/css"
import { useNavigate } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"
import { getAllBreeds } from "../../api/record"

export function Search() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [allBreeds, setAllBreeds] = useState<string[]>([])
  const searchParams = new URLSearchParams()
  const changeHandler = (event: { target: { value: any } }) => {
    setSearchTerm(event.target.value)
  }
  const debouncedChangeHandler = useCallback(changeHandler, [])
  const handleSubmit = useCallback(handleKeyPress, [searchParams])
  useEffect(() => {
    getAllBreeds()
      .then((data) => setAllBreeds(Object.keys(data.message)))
      .catch((error) => console.error(error))
  }, [])

  function handleKeyPress(event: { key: string }) {
    const key = event.key
    if (key !== "Enter") return
    if (searchTerm.length === 0 || searchTerm.trim() === "") return
    if (allBreeds.includes(searchTerm.toLowerCase())) {
      navigate(`/breeds/${searchTerm.toLowerCase()}?currentPage=1`)
      setSearchTerm("")
    }
  }

  return (
    <div data-testid="search" className={styles.search}>
      <input
        data-testid="search-input"
        value={searchTerm}
        onChange={debouncedChangeHandler}
        onKeyPress={handleSubmit}
        type="text"
        placeholder="Search"
      />
    </div>
  )
}

const styles = {
  search: css`
    position: absolute;
    display: flex;
    align-items: center;
    width: 120px;
    height: 35px;
    right: 10%;
    margin-top: 20px;
    border-radius: 20px;
    border: 2px solid var(--gray);
    background-color: var(--white);
    padding: 0 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    input {
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      font-size: 16px;
      font-weight: 500;
      color: var(--black);
      outline: none;
    }
    button {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--white);
      border: none;
      outline: none;
      cursor: pointer;
      svg {
        width: 100%;
        height: 100%;
        fill: #000;
      }
    }
  `,
}
