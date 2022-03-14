import { useEffect, useState } from "react"
import { DogImage } from "../DogImage"
import { css } from "@emotion/css"
import { Link } from "react-router-dom"

export function DogBreeds() {
  const [breed, setBreed] = useState<string>("affenpinscher")
  const [breedImages, setBreedImages] = useState<string[]>([])
  const [allBreeds, setAllBreeds] = useState<string[]>([])
  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => setBreedImages(data.message))
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
        <h1>Dog Breeds</h1>
        <select onChange={(e) => setBreed(e.target.value)}>
          {allBreeds.map((breed: string) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <DogImage image={breedImages[0]} />
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
  `,
}
