import { css } from "@emotion/css"
import { Link } from "react-router-dom"
import { DogImage } from "../DogImage"
import { useEffect, useState } from "react"
import { getRandomDogImage } from "../../api/record"

export function RandomDogImage() {
  const [image, setImage] = useState<string>("")
  useEffect(() => {
    getRandomDogImage()
      .then((data) => setImage(data.message))
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className={styles.container}>
      <div>
        <h2> Random Dog Image </h2>
        <DogImage image={image} />
      </div>
      <Link
        style={{
          textDecoration: "none",
          fontWeight: "bold",
        }}
        className={globalButtonStyle.buttonLink}
        to="/breeds"
      >
        <div className={globalButtonStyle.buttonContainer}>
          <span>Browse Dog Breeds</span>
        </div>
      </Link>
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
    @media (max-width: 700px) {
      flex-direction: column;
    }
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
