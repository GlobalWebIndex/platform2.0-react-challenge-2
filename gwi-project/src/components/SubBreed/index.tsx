import { useEffect, useState } from "react"
import { getSubBreedImage } from "../../api/record"
import { DogImage } from "../DogImage"
import { capitalizeFirstLetter } from "../../Utils/stringUtils"

export function SubBreed(props: any) {
  const [image, setImage] = useState<string>("")
  useEffect(() => {
    getSubBreedImage(props.breed, props.subBreed)
      .then((response) => {
        setImage(response.message)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <div>
      <h2>{capitalizeFirstLetter(props.subBreed)}</h2>
      <DogImage image={image} />
    </div>
  )
}
