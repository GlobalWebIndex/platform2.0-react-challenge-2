import { useEffect, useState } from "react"
import { DogImage } from "../DogImage"
import { Link, useLocation } from "react-router-dom"
import { css } from "@emotion/css"

export function Dog() {
  const location = useLocation()
  const breed = location.pathname.split("/")[2]
  const [breedImages, setBreedImages] = useState<string[]>([])
  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => setBreedImages(data.message))
      .catch((error) => console.error(error))
  }, [breed])

  return (
    <div className={styles.container}>
      <div>
        <h1>{breed}</h1>
        {breedImages.map((breed) => (
          <DogImage image={breed} />
        ))}
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
}
