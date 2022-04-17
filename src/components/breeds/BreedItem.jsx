import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { api } from "../../utils/api";

const BreedItem = ({ breed }) => {
  const [imageBreed, setImageBreed] = useState("");

  useEffect(() => {
    fetchBreedImage();
  }, []);

  const fetchBreedImage = async () => {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const data = await api(url, "get");
    const imageUrl = data.message;
    setImageBreed(imageUrl);
  };

  const breedLink = `/${breed}`;

  return (
    <>
      <Link to={breedLink}>
        <h3> {breed}</h3>
        {imageBreed && <img src={imageBreed} />}
      </Link>
    </>
  );
};

export default BreedItem;
