import { Select, Button, Group } from "@mantine/core";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchAllDogBreeds } from "../api/api";

const SearchFilter: React.FC = () => {
  const navigate = useNavigate();

  const [searchedBreed, setSearchedBreed] = useState<
    string | undefined | null
  >();

  const { data, status } = useQuery("allBreeds", fetchAllDogBreeds, {
    staleTime: 50000,
  });

  let dogBreedsKeys: string[] = [];

  if (status === "success") {
    dogBreedsKeys = Object.keys(data?.message);
  }

  const handleSubmit = async () => {
    if (searchedBreed?.trim() !== "" && searchedBreed !== undefined) {
      navigate(`/dog-breed/${searchedBreed}`);
    }
    setSearchedBreed("");
  };

  return (
    <form onSubmit={(e: React.BaseSyntheticEvent) => e.preventDefault()}>
      <Group>
        <Select
          placeholder="Search breed!"
          value={searchedBreed}
          data={dogBreedsKeys}
          nothingFound="No breed found!"
          onChange={setSearchedBreed}
          searchable
        />
        <Button onClick={handleSubmit} size="md" color="violet">
          Search
        </Button>
      </Group>
    </form>
  );
};

export default SearchFilter;
