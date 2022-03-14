import { css } from "@emotion/css"
import { Link } from "react-router-dom"
import { DogImage } from "../DogImage"
import { useEffect, useState } from "react"

export function RandomDogImage() {
  const [image, setImage] = useState<string>("")
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setImage(data.message))
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className={styles.container}>
      <div>
        <h2> Random Dog Image </h2>
        <DogImage image={image} />
      </div>
      <div className={styles.dogBreedsContainer}>
        <Link
          style={{
            textDecoration: "none",
            fontWeight: "bold",
          }}
          className={styles.dogBreedsText}
          to="/breeds"
        >
          Dog breeds
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
    justify-content: space-evenly;
    margin: 0 auto;
    padding: 0;
  `,

  dogBreedsContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  dogBreedsText: css`
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--black);

    :hover {
      cursor: pointer;
      opacity: 0.7;
    }
  `,
}
