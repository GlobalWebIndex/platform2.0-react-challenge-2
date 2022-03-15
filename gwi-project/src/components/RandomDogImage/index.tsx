import { css } from "@emotion/css"
import { Link } from "react-router-dom"
import { DogImage } from "../DogImage"
import { useEffect, useState } from "react"
import { getRandomDogImages } from "../../api/record"
import { container } from "../Dog"

export function RandomDogImages() {
  const [images, setImages] = useState<string[]>([])
  useEffect(() => {
    getRandomDogImages()
      .then((data) => setImages(data.message))
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <div className={styles.container}>
        <Link
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            marginTop: "16px",
          }}
          className={globalButtonStyle.buttonLink}
          to="/breeds"
        >
          <div className={globalButtonStyle.buttonContainer}>
            <span>Browse Dog Breeds</span>
          </div>
        </Link>
      </div>
      <div>
        <h2> Random Dog Images </h2>
        <div className={container.container}>
          {images.map((image) => (
            <DogImage key={image} image={image} />
          ))}
        </div>
      </div>
    </>
  )
}

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    padding: 0;
  `,
}

export const globalButtonStyle = {
  buttonContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--header);
    background: var(--white);
    :hover {
      background: var(--header);
      span:nth-child(1) {
        color: var(--white);
      }
    }
    height: 30px;
    padding: 14px;
    border-radius: 15px;
  `,
  buttonLink: css`
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--black);

    :hover {
      cursor: pointer;
    }
  `,
}
