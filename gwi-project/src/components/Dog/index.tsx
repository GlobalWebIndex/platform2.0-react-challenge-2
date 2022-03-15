import { SetStateAction, useEffect, useState } from "react"
import { DogImage } from "../DogImage"
import { useLocation, useNavigate } from "react-router-dom"
import { css } from "@emotion/css"
import { Pagination } from "../Pagination"
import { capitalizeFirstLetter } from "../../Utils/stringUtils"
import { globalBreadcrumbStyles } from "../DogBreeds"
import { getBreedImages } from "../../api/record"

export function Dog() {
  const [breedImages, setBreedImages] = useState<string[]>([])
  const location = useLocation()
  const breed = location.pathname.split("/")[2]
  const pageQuery = location.search.split("=")[1]
  const paginate = (pageNumber: SetStateAction<number>) => setOffset(pageNumber)
  const page =
    pageQuery && !isNaN(parseInt(pageQuery)) ? parseInt(pageQuery) : 1
  const [offset, setOffset] = useState<number>(page)
  const dogsPerPage = 6
  const navigate = useNavigate()
  useEffect(() => {
    navigate(`?currentPage=${offset}`)
  }, [offset])

  //I do not like client pagination, but I do not see anywhere in the documentation
  // mentioning offset and limit...
  useEffect(() => {
    getBreedImages(breed)
      .then((response) => {
        setBreedImages(response.message)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [breed])

  const currentPageDogs = breedImages?.slice(
    (offset - 1) * dogsPerPage,
    offset * dogsPerPage
  )
  return (
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
        <span
          className={globalBreadcrumbStyles.goBack}
          onClick={() => {
            navigate("/breeds")
          }}
        >
          Breed Selection {">"}
        </span>
        <span className={globalBreadcrumbStyles.disabled}>{breed}</span>
      </span>
      <h1 style={{ marginTop: "40px" }}>{capitalizeFirstLetter(breed)}</h1>
      <div className={styles.container}>
        {currentPageDogs.map((image, idx) => (
          <DogImage key={idx} image={image} />
        ))}
      </div>
      <Pagination
        onPageChange={(pageNumber: any) => paginate(pageNumber)}
        totalCount={breedImages.length}
        siblingCount={1}
        currentPage={offset}
        pageSize={dogsPerPage}
      />
    </div>
  )
}

const styles = {
  container: css`
    display: grid;
    justify-items: center;
    padding: 30px;
    grid-template-rows: 1fr;
    grid-auto-rows: minmax(1, 2);
    grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  `,
}
