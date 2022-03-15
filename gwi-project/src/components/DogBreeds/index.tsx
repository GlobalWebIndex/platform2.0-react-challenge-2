import React, { useEffect, useState } from "react"
import { DogImage } from "../DogImage"
import { css, cx } from "@emotion/css"
import { Link, useNavigate } from "react-router-dom"
import { getAllBreeds, getRandomBreedImage } from "../../api/record"
import { globalButtonStyle } from "../RandomDogImage"
import { Dropdown } from "../Dropdown"
import { useOutsideAlerter } from "../Hooks/useOutsideListener"
import { capitalizeFirstLetter } from "../../Utils/stringUtils"
import { ReactComponent as Chevron } from "../../assets/icons-chevron-down/icons-chevron-down.svg"

export function DogBreeds() {
  const [breed, setBreed] = useState<string>("affenpinscher")
  const [breedImage, setBreedImage] = useState<string[]>([])
  const [allBreeds, setAllBreeds] = useState<string[]>([])
  const navigate = useNavigate()
  const {
    visible: isDropdownVisible,
    setVisible: setDropdownVisible,
    ref: dropdownRef,
  } = useOutsideAlerter(false)
  useEffect(() => {
    getRandomBreedImage(breed)
      .then((data) => setBreedImage(data.message))
      .catch((error) => console.error(error))
  }, [breed])
  useEffect(() => {
    getAllBreeds()
      .then((data) => setAllBreeds(Object.keys(data.message)))
      .catch((error) => console.error(error))
  }, [])

  const handleClick = () => {
    setDropdownVisible(!isDropdownVisible)
  }

  return (
    <div className={styles.container}>
      <div style={{ marginRight: "24px" }}>
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
        <div className={styles.breed}>{capitalizeFirstLetter(breed)}</div>
        <Link to={`/breeds/${breed}`}>
          <DogImage image={breedImage} />
        </Link>
      </div>
      <Link
        style={{
          textDecoration: "none",
          fontWeight: "bold",
        }}
        className={globalButtonStyle.buttonLink}
        to={`/breeds/${breed}`}
      >
        <div className={globalButtonStyle.buttonContainer}>
          <span> More Details</span>
        </div>
      </Link>
      <div style={{ position: "relative" }}>
        <span
          onClick={handleClick}
          className={cx(
            styles.breedSelection,
            isDropdownVisible ? "dropdownVisible" : undefined
          )}
        >
          Select Another Breed
          <span
            className={cx(
              styles.chevronContainer,
              isDropdownVisible ? "dropdownVisible" : undefined
            )}
          >
            <Chevron />
          </span>
        </span>
        {isDropdownVisible ? (
          <div ref={dropdownRef}>
            <Dropdown allBreeds={allBreeds} setBreed={setBreed} />
          </div>
        ) : null}
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
  breed: css`
    font-size: 1.4rem;
    font-weight: bold;
    border: 2px solid var(--black);
    color: var(--matteblack);
    border-radius: 15px;
  `,
  breedSelection: css`
    position: relative;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--matteblack);
    border-radius: 4px;
    cursor: pointer;
    margin-left: 24px;
    :hover {
      opacity: 0.7;
    }
    &.dropdownVisible {
      color: var(--lightgray);
      pointer-events: none;
    }
  `,
  chevronContainer: css`
    filter: brightness(0) invert(0);
    margin-top: 6px;
    &.dropdownVisible {
      filter: brightness(0) invert(0.5);
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
    color: var(--lightgray);
    pointer-events: none;
    cursor: default;
    opacity: 0.5;
  `,
}
