import { globalBreadcrumbStyles } from "../DogBreeds"
import { capitalizeFirstLetter } from "../../Utils/stringUtils"
import { Pagination } from "../Pagination"
import { SetStateAction, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { getAllSubBreeds } from "../../api/record"
import { container } from "../Dog"
import { SubBreed } from "../SubBreed"

export function SubBreeds() {
  const [allSubBreeds, setAllSubBreeds] = useState<string[]>([])
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

  useEffect(() => {
    getAllSubBreeds(breed)
      .then((response) => {
        setAllSubBreeds(response.message)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [breed])

  const currentPageDogs = allSubBreeds?.slice(
    (offset - 1) * dogsPerPage,
    offset * dogsPerPage
  )
  return (
    <div>
      <span
        data-testid="goBackContainer"
        className={globalBreadcrumbStyles.goBackContainer}
      >
        <span
          data-testid="mainPage"
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
      <h1 style={{ marginTop: "40px" }}>
        {capitalizeFirstLetter(breed || "")}
      </h1>
      <div className={container.container}>
        {allSubBreeds.length === 0 ? (
          <h2> No Breeds Found</h2>
        ) : (
          currentPageDogs.map((subBreed: any, idx: any) => (
            <SubBreed key={idx} breed={breed} subBreed={subBreed} />
          ))
        )}
      </div>
      <Pagination
        onPageChange={(pageNumber: any) => paginate(pageNumber)}
        totalCount={allSubBreeds.length}
        siblingCount={1}
        currentPage={offset}
        pageSize={dogsPerPage}
      />
    </div>
  )
}
