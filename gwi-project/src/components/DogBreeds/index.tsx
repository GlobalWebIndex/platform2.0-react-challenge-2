import { useEffect, useState } from "react"
import { DogImage } from "../DogImage"
import { css } from "@emotion/css"
import { Link, useNavigate } from "react-router-dom"
import { getRandomBreedImage } from "../../api/record"

export function DogBreeds() {
  const [breed, setBreed] = useState<string>("affenpinscher")
  const [breedImage, setBreedImage] = useState<string[]>([])
  const [allBreeds, setAllBreeds] = useState<string[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    getRandomBreedImage(breed)
      .then((data) => setBreedImage(data.message))
      .catch((error) => console.error(error))
  }, [breed])
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => setAllBreeds(Object.keys(data.message)))
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className={styles.container}>
      <div>
        <span className={globalBreadcrumbStyles.goBackContainer}>
          <span
            className={globalBreadcrumbStyles.goBack}
            onClick={() => {
              navigate("/")
            }}
          >
            Main Page {">"}
          </span>
          <span className={globalBreadcrumbStyles.disabled}>Dog Breeds</span>
        </span>
        <h1>Dog Breeds</h1>
        <select onChange={(e) => setBreed(e.target.value)}>
          {allBreeds.map((breed: string) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <Link to={`/breeds/${breed}`}>
          <DogImage image={breedImage} />
        </Link>
      </div>
      <div>
        <Link
          style={{
            textDecoration: "none",
            fontWeight: "bold",
          }}
          className={styles.moreDetails}
          to={`/breeds/${breed}`}
        >
          More Details
        </Link>
      </div>
    </div>
  )
}

const styles = {
  container: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  moreDetails: css`
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--matteblack);
    :hover {
      opacity: 0.8;
    }
  `,
}

export const globalBreadcrumbStyles = {
  goBackContainer: css`
    position: absolute;
    top: 65px;
    left: 5%;
  `,
  goBack: css`
    color: var(--black);
    font-size: 17px;
    cursor: pointer;
    margin-right: 5px;
    :hover {
      opacity: 0.7;
    }
  `,
  disabled: css`
    color: var(--lightgrey);
    pointer-events: none;
    cursor: default;
    opacity: 0.5;
  `,
}
